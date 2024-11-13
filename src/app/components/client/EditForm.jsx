import React from "react";

const EditForm = ({ editData, handleEditChange, handleEditSubmit, columns }) => {
  if (!editData) return null;

  return (
    <tr className=" bg-gray-800 rounded-md">
      <td colSpan={columns.length} className="py-1 px-1">
        <form className="grid w-full gap-2" onSubmit={handleEditSubmit}>
          <div className="grid auto-rows-min">
            <span>Nombre</span>
            <input
              type="text"
              name="nombre"
              value={editData.nombre || ""}
              onChange={handleEditChange}
              placeholder="Nombre"
              className="text-gray-600 px-2 py-1 shadow-md rounded-md focus:outline-none"
            />
          </div>
          <div className="grid auto-rows-min">
            <span>RUT</span>
            <input
              type="text"
              name="rut"
              value={editData.rut || ""}
              onChange={handleEditChange}
              placeholder="RUT"
              className="text-gray-600 px-2 py-1 shadow-md rounded-md focus:outline-none"
            />
          </div>
          <div className="grid auto-rows-min">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={editData.email || ""}
              onChange={handleEditChange}
              placeholder="Email"
              className="text-gray-600 px-2 py-1 shadow-md rounded-md focus:outline-none"
            />
          </div>
          <div className="grid auto-rows-min">
            <span>Edad</span>
            <input
              type="number"
              name="edad"
              value={editData.edad || ""}
              onChange={handleEditChange}
              placeholder="Edad"
              className="text-gray-600 px-2 py-1 shadow-md rounded-md focus:outline-none"
            />
          </div>
          <div className="grid auto-rows-min">
            <span>Teléfono</span>
            <input
              type="tel"
              name="telefono"
              value={editData.telefono || ""}
              onChange={handleEditChange}
              placeholder="Teléfono"
              className="text-gray-600 px-2 py-1 shadow-md rounded-md focus:outline-none"
            />
          </div>
          <div className="grid auto-rows-min">
            <span>Institución</span>
            <input
              type="text"
              name="institucion"
              value={editData.institucion || ""}
              onChange={handleEditChange}
              placeholder="Institución"
              className="text-gray-600 px-2 py-1 shadow-md rounded-md focus:outline-none"
            />
          </div>
          <div className="grid auto-rows-min">
            <span>Clínica</span>
            <input
              type="text"
              name="clinica"
              value={editData.clinica || ""}
              onChange={handleEditChange}
              placeholder="Clínica"
              className="text-gray-600 px-2 py-1 shadow-md rounded-md focus:outline-none"
            />
          </div>
       
          <button
            type="submit"
            className="h-8 mt-2 text-[#ffffef] rounded-md bg-gradient-to-r from-blue-800 to-blue-950 shadow-md hover:bg-orange-500"
          >
            Guardar
          </button>
        </form>
      </td>
    </tr>
  );
};

export default EditForm;