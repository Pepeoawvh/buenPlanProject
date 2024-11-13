import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TableRow = ({ row, isSelected, handleRowClick, handleEdit, handleDelete }) => (
  <React.Fragment key={row.original.id}>
    <tr
      key={row.id} // Pasar la propiedad key directamente
      {...row.getRowProps()}
      className={`border-b-[0.5px] border-[#545f47] cursor-pointer ${isSelected ? 'bg-gray-800' : ''}`}
      onClick={() => handleRowClick(row.original.id)}
    >
      {row.cells.map((cell) => {
        const cellProps = cell.getCellProps();
        const { key, ...rest } = cellProps; // Extraer la clave y el resto de las propiedades
        return (
          <td
            key={cell.column.id} // Pasar la propiedad key directamente
            {...rest}
            className="py-1 px-1 whitespace-nowrap overflow-hidden text-ellipsis"
          >
            {cell.render("Cell")}
          </td>
        );
      })}
    </tr>
    {isSelected && (
      <tr className=" bg-gray-800">
        <td colSpan={row.cells.length} className="">
          <div className="flex pl-12 justify-start space-x-24">
            <button
              className="text-blue-400 bg-black  rounded-full h-full m-0 py-1 px-8"
              onClick={() => handleEdit(row)}
            >
              <FaEdit />
            </button>
            <button
              className="text-red-400 bg-black rounded-full h-full m-0  py-1 px-8"
              onClick={() => handleDelete(row)}
            >
              <FaTrash />
            </button>
          </div>
        </td>
      </tr>
    )}
  </React.Fragment>
);

export default TableRow;