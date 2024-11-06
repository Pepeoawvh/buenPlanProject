import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TableRow = ({ row, isSelected, handleRowClick, handleEdit, handleDelete }) => (
  <React.Fragment key={row.original.id}>
    <tr
      {...row.getRowProps()}
      className={`border-[0.5px] border-[#545f47] cursor-pointer ${isSelected ? 'bg-gray-200' : ''}`}
      onClick={() => handleRowClick(row.original.id)}
    >
      {row.cells.map((cell) => (
        <td
          {...cell.getCellProps()}
          key={cell.id}
          className="py-1 px-1 whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {cell.render("Cell")}
        </td>
      ))}
    </tr>
    {isSelected && (
      <tr className="border-[0.5px] border-[#545f47] bg-gray-200">
        <td colSpan={row.cells.length} className="">
          <div className="flex pl-12 justify-start space-x-24">
            <button
              className="text-blue-500 border rounded-full h-full m-0 border-[#545f47] py-1 px-8"
              onClick={() => handleEdit(row)}
            >
              <FaEdit />
            </button>
            <button
              className="text-red-500 border rounded-full h-full m-0 border-[#545f47] py-1 px-8"
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
