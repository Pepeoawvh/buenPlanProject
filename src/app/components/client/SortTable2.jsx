import React, { useState, useEffect } from "react";
import { useTable, useSortBy } from "react-table";
import { format } from "date-fns";
import { firestoreDB } from '../../firebase/config.js';
import jsPDF from "jspdf";
import "jspdf-autotable";
import EditForm from "./EditForm";
import TableRow from "./TableRow";

const SortableTable2 = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [editData, setEditData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const abbreviateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return (
        <span className="tooltip">
          {text.slice(0, maxLength) + '...'}
          <span className="tooltiptext">{text}</span>
        </span>
      );
    }
    return text;
  };

  const columns = React.useMemo(
    () => [
      { Header: "Nombre", accessor: "nombre" },
      { Header: "RUT", accessor: "rut" },
      { Header: "Email", accessor: "email" },
      { Header: "Edad", accessor: "edad" },
      { Header: "Teléfono", accessor: "telefono" },
      { Header: "Institución", accessor: "institucion", Cell: ({ value }) => abbreviateText(value, 15) },
      { Header: "Clínica", accessor: "clinica" },
      { Header: "Fecha de Envío", accessor: "fechaEnvio", Cell: ({ value }) => format(new Date(value), 'dd/MM/yyyy HH:mm') },
    ],
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await firestoreDB.collection('formubuenplan').get();
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(data);
      setFilteredData(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const results = data.filter(row =>
      columns.some(column =>
        (row[column.accessor] ? row[column.accessor].toString() : "").toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(results);
  }, [searchTerm, data, columns]);

  useEffect(() => {
    if (selectedMonth) {
      const filteredByMonth = data.filter(item => {
        const itemMonth = new Date(item.fechaEnvio).toISOString().slice(0, 7);
        return itemMonth === selectedMonth;
      });
      setFilteredData(filteredByMonth);
    } else {
      setFilteredData(data);
    }
  }, [selectedMonth, data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: filteredData }, useSortBy);

  const handleEdit = (row) => {
    setEditData(row.original);
    setSelectedRowId(row.original.id);
  };

  const handleDelete = async (row) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este invitado ?")) {
      try {
        await firestoreDB
          .collection("formubuenplan")
          .doc(row.original.id)
          .delete();
        alert("Registro eliminado exitosamente.");
        setFilteredData(filteredData.filter(item => item.id !== row.original.id));
      } catch (error) {
        console.error("Error al eliminar el registro:", error);
        alert("Hubo un problema al eliminar el registro.");
      }
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await firestoreDB
        .collection("formubuenplan")
        .doc(editData.id)
        .update(editData);
      alert("Registro actualizado exitosamente.");
      setFilteredData(filteredData.map(item => (item.id === editData.id ? editData : item)));
      setEditData(null);
      setSelectedRowId(null);
    } catch (error) {
      console.error("Error al actualizar el registro:", error);
      alert("Hubo un problema al actualizar el registro.");
    }
  };

  const handleRowClick = (rowId) => {
    if (selectedRowId === rowId) {
      setSelectedRowId(null);
      setEditData(null);
    } else {
      setSelectedRowId(rowId);
      setEditData(null);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Resumen de Formularios", 20, 10);
    doc.autoTable({
      head: [columns.map(col => col.Header)],
      body: filteredData.map(row => columns.map(col => row[col.accessor])),
    });
    doc.save("formularios.pdf");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="mb-4 px-4 flex items-center space-x-4">
        <button
          onClick={generatePDF}
          className="h-8 mt-2 text-[#ffffef] px-8 rounded-md bg-gradient-to-r from-cyan-600 to-cyan-800 shadow-md hover:bg-cyan-500"
        >
          Descargar Tabla Actual
        </button>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Buscar..."
          className="h-8 mt-2 px-4 rounded-md border border-gray-300 shadow-md focus:outline-none"
        />
        <label className="block mb-4">
          Mes:
          <input 
            type="month" 
            value={selectedMonth} 
            onChange={(e) => setSelectedMonth(e.target.value)} 
            className="ml-2 p-2 border rounded w-auto border-[#3d4f4a]" 
          />
        </label>
      </div>
      <table
        {...getTableProps()}
        className="border-collapse w-full"
      >
        <thead className="bg-lime-600 text-orange-100">
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup.id}
              className="border-b border-[#545f47]"
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={column.id}
                  className="py-1"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="text- whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {rows.map((row) => {
            prepareRow(row);
            const isSelected = selectedRowId === row.original.id;
            return (
              <React.Fragment key={row.id}>
                <TableRow
                  row={row}
                  isSelected={isSelected}
                  handleRowClick={handleRowClick}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
                {editData && selectedRowId === row.original.id && (
                  <tr key={`edit-${row.id}`}>
                    <td colSpan={columns.length}>
                      <EditForm
                        editData={editData}
                        handleEditChange={handleEditChange}
                        handleEditSubmit={handleEditSubmit}
                        columns={columns}
                      />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTable2;