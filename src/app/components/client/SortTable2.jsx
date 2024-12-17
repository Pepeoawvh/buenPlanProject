import React, { useState, useEffect } from "react";
import { useTable, useSortBy } from "react-table";
import { format, isValid } from "date-fns";
import { firestoreDB } from "../../firebase/config.js";
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
          {text.slice(0, maxLength) + "..."}
          <span className="tooltiptext">{text}</span>
        </span>
      );
    }
    return text;
  };

  const columns = React.useMemo(
    () => [
      { Header: "Nombre", accessor: "nombre" },
      {
        Header: "Institución",
        accessor: "institucion",
        Cell: ({ value }) => abbreviateText(value, 15),
      },
      {
        Header: "Fecha de Envío",
        accessor: "createdAt",
        Cell: ({ value }) => {
          console.log("Fecha de Envío en tabla:", value); // Agregar console.log para verificar la fecha
          return isValid(new Date(value))
            ? format(new Date(value), "dd/MM/yyyy")
            : "Fecha inválida";
        },
      },
      { Header: "Estado", accessor: "estado" },
    ],
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await firestoreDB.collection("formubuenplan").get();
      const data = snapshot.docs.map((doc) => {
        const createdAt = doc.data().createdAt
          ? doc.data().createdAt.toDate()
          : new Date();
        console.log("Fecha de creación obtenida:", createdAt); // Agregar console.log para verificar la fecha
        return { id: doc.id, ...doc.data(), createdAt };
      });
      setData(data);
      setFilteredData(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const results = data.filter((row) =>
      columns.some((column) =>
        (row[column.accessor] ? row[column.accessor].toString() : "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(results);
  }, [searchTerm, data, columns]);

  useEffect(() => {
    if (selectedMonth) {
      const filteredByMonth = data.filter((item) => {
        const itemMonth = new Date(item.createdAt).toISOString().slice(0, 7);
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
    if (editData && selectedRowId === row.original.id) {
      setEditData(null);
    } else {
      setEditData(row.original);
      setSelectedRowId(row.original.id);
    }
  };

  const handleDelete = async (row) => {
    try {
      await firestoreDB
        .collection("formubuenplan")
        .doc(row.original.id)
        .delete();
      alert("Registro eliminado exitosamente.");
      setFilteredData(
        filteredData.filter((item) => item.id !== row.original.id)
      );
    } catch (error) {
      console.error("Error al eliminar el registro:", error);
      alert("Hubo un problema al eliminar el registro.");
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
      setFilteredData(
        filteredData.map((item) => (item.id === editData.id ? editData : item))
      );
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
      head: [columns.map((col) => col.Header)],
      body: filteredData.map((row) => columns.map((col) => row[col.accessor])),
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
          className="h-fit mt-2 px-8 rounded-md border-2 border-[#40a0ff] hover:bg-cyan-500"
        >
          Descargar Tabla Actual
        </button>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Buscar..."
          className="h-8 mt-2 px-4 rounded-md border-2 border-[#40a0ff] shadow-md focus:outline-none"
        />
        <label className="block mb-4">
          Mes:
          <input
            type="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="ml-2 p-2 border-2 rounded w-auto border-[#40a0ff]"
          />
        </label>
      </div>
      <table {...getTableProps()} className="w-full">
        <thead className="bg-blue-600 text-yellow-400 tracking-wider">
          {headerGroups.map((headerGroup) => (
            <tr
              key={headerGroup.id} // Pasar la propiedad key directamente
              {...headerGroup.getHeaderGroupProps()}
              className="grid w-screen grid-cols-4"
            >
              {headerGroup.headers.map((column) => (
                <th
                  key={column.id} // Pasar la propiedad key directamente
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="py-1"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className=" whitespace-nowrap overflow-hidden text-ellipsis"
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
                  editData={editData}
                  handleEditChange={handleEditChange}
                  handleEditSubmit={handleEditSubmit}
                />
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTable2;
