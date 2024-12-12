import React, { useState, useEffect } from "react";
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
        key={row.id} // Pasar la propiedad key directamente
        {...row.getRowProps()}
        className={`grid grid-cols-4 w-full justify-items-center border-b-[0.5px] border-white cursor-pointer ${isSelected ? 'bg-gray-800' : ''}`}
        onClick={() => handleRowClick(row.original.id)}
      >
        {row.cells.map((cell) => {
          const cellProps = cell.getCellProps();
          const { key, ...rest } = cellProps; // Extraer la clave y el resto de las propiedades
          return (
            <td
              key={cell.column.id} // Pasar la propiedad key directamente
              {...rest}
              className="py-1 justify-center px-1"
            >
              {cell.column.id === "estado" ? (
                isEditingState ? (
                  <select
                    value={newState}
                    onChange={handleStateChange}
                    onBlur={() => setIsEditingState(false)}
                    className="ml-2 bg-gray-800 text-white  "
                    onClick={(e) => e.stopPropagation()} // Detener la propagación del evento de clic
                  >
                    <option value="No contactado">No contactado</option>
                    <option value="Contactado">Contactado</option>
                    <option value="Cotizando">Cotizando</option>
                    <option value="Finalizado">Finalizado</option>
                  </select>
                ) : (
                  <span
                    onClick={(e) => {
                      e.stopPropagation(); // Detener la propagación del evento de clic
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
        })}
      </tr>
      {isSelected && (
        <div className="grid grid-cols-2 w-screen">
          <tr className="grid bg-gray-800">
            <td colSpan={row.cells.length} className="grid py-1 px-1 w-fit text-nowrap">
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
                    <FaWhatsapp className="bg-slate-500 text-green-500 w-4 h-4 rounded-full ml-2" />
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
          <tr className="grid border-l-2 bg-gray-800 w-fit">
            <td colSpan={row.cells.length} className="grid w-fit auto-rows-min mx-2 justify-items-center content-center gap-8">
              <button
                className="grid justify-items-center items-center text-blue-400 bg-black rounded-full h-10 w-10 m-0 px-2"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEdit(row);
                }}
              >
                <FaEdit />
              </button>
              <button
                className="text-red-400 grid justify-items-center items-center bg-black rounded-full h-10 w-10 m-0 px-2"
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