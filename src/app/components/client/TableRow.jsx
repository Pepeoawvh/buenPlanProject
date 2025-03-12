import React, { useState } from "react";
import { firestoreDB } from '../../firebase/config.js';
import EditForm from "./EditForm";
import { FaEdit, FaTrash, FaWhatsapp } from "react-icons/fa";

const TableRow = ({ row, isSelected, handleRowClick, handleEdit, handleDelete, editData, handleEditChange, handleEditSubmit }) => {
  const [isEditingState, setIsEditingState] = useState(false);
  const [newState, setNewState] = useState(row.original.estado);

  const handleStateChange = async (e) => {
    const newState = e.target.value;
    setNewState(newState);
    try {
      await firestoreDB.collection("formubuenplan").doc(row.original.id).update({ estado: newState });
      alert("Estado actualizado exitosamente.");
    } catch (error) {
      console.error("Error al actualizar el estado:", error);
      alert("Hubo un problema al actualizar el estado.");
    }
  };

  return (
    <React.Fragment key={row.original.id}>
      <tr
        key={row.id}
        {...row.getRowProps()}
        className={`grid grid-cols-4 w-full justify-items-center border-b-[0.5px] border-sky-600 tracking-wider cursor-pointer ${isSelected ? 'bg-blue-300' : ''}`}
        onClick={() => handleRowClick(row.original.id)}
      >
        {row.cells.map((cell) => {
          const cellProps = cell.getCellProps();
          const { key, ...rest } = cellProps;
          if (["nombre", "institucion", "createdAt", "estado"].includes(cell.column.id)) {
            return (
              <td
                key={cell.column.id}
                {...rest}
                className="py-1 justify-center text-xs px-1"
              >
                {cell.column.id === "estado" ? (
                  isEditingState ? (
                    <select
                      value={newState}
                      onChange={handleStateChange}
                      onBlur={() => setIsEditingState(false)}
                      className="ml-2 bg-gray-800 text-white tracking-wider"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <option value="No contactado">No contactado</option>
                      <option value="Contactado">Contactado</option>
                      <option value="Cotizando">Cotizando</option>
                      <option value="Finalizado">Finalizado</option>
                    </select>
                  ) : (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsEditingState(true);
                      }}
                      className="ml-2 cursor-pointer"
                    >
                      {newState}
                    </span>
                  )
                ) : (
                  cell.render("Cell")
                )}
              </td>
            );
          }
          return null;
        })}
      </tr>
      {isSelected && (
        <div className="flex-col w-screen">
          <tr className="grid bg-blue-200 tracking-wider">
            <td colSpan={row.cells.length} className="grid py-1 px-1 w-fit text-nowrap ">
              <div className="grid auto-rows-min ml-4 my-4 text-sm gap-4">
                <div>
                  <strong>RUT:</strong> {row.original.rut}
                </div>
                <div>
                  <strong>Email:</strong> {row.original.email}
                </div>
                <div className="grid grid-cols-3">
                  <strong>Teléfono:</strong> <div className="col-span-1 whitespace-nowrap">{row.original.telefono}</div>
                  <a className="grid justify-items-center items-center" href={`https://wa.me/${row.original.telefono}`} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="bg-white text-green-500 shadow w-4 h-4 rounded-full ml-2 hover:animate-wiggle-more animate-infinite" />
                  </a>
                </div>
                <div>
                  <strong>Edad:</strong> {row.original.edad}
                </div>
                <div>
                  <strong>Clínica:</strong> {row.original.clinica}
                </div>
                <div>
                  <strong>Isapre:</strong> {row.original.institucion}
                </div>
              </div>
            </td>
          </tr>
          <tr className="flex border-l-2 text-xs justify-center bg-blue-100 w-full">
            <td colSpan={row.cells.length} className="flex w-fit  mx-2 items-center gap-8">
              <button
                className="grid justify-items-center items-center text-blue-400 bg-white shadow-lg rounded-full h-10 w-10 m-0 px-2 hover:animate-wiggle-more animate-infinite"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEdit(row);
                }}
              >
                <FaEdit />
              </button>
              <button
                className="text-red-400 grid justify-items-center items-center bg-white shadow-lg rounded-full h-10 w-10 m-0 px-2 hover:animate-wiggle-more animate-infinite"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(row);
                }}
              >
                <FaTrash />
              </button>
            </td>
          </tr>
          {editData && editData.id === row.original.id && (
            <EditForm
              editData={editData}
              handleEditChange={handleEditChange}
              handleEditSubmit={handleEditSubmit}
              columns={row.cells.length}
            />
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default TableRow;