import React from "react";

const EditForm = ({ editData, handleEditChange, handleEditSubmit, columns }) => {
  if (!editData) return null;

  return (
    <tr className=" bg-blue-800 text-yellow-400 w-full aspect-auto">
      <td colSpan={columns.length} className="grid w-full">
        <form className="grid mt-2 gap-2" onSubmit={handleEditSubmit}>
          <div className="grid auto-rows-min">
            <span className="pl-2">Nombre</span>
            <input
              type="text"
              name="nombre"
              value={editData.nombre || ""}
              onChange={handleEditChange}
              placeholder="Nombre"
              className="text-blue-900 mx-4 rounded-sm bg-blue-200 px-3 py-1 shadow-md focus:outline-none"
            />
          </div>
          <div className="grid auto-rows-min">
            <span className="pl-2">RUT</span>
            <input
              type="text"
              name="rut"
              value={editData.rut || ""}
              onChange={handleEditChange}
              placeholder="RUT"
              className="text-blue-900 mx-4 rounded-sm bg-blue-200 px-3 py-1 shadow-md focus:outline-none"
            />
          </div>
          <div className="grid auto-rows-min">
            <span className="pl-2">Email</span>
            <input
              type="email"
              name="email"
              value={editData.email || ""}
              onChange={handleEditChange}
              placeholder="Email"
              className="text-blue-900 mx-4 rounded-sm bg-blue-200 px-3 py-1 shadow-md focus:outline-none"
            />
          </div>
          <div className="grid auto-rows-min">
            <span className="pl-2">Edad</span>
            <input
              type="number"
              name="edad"
              value={editData.edad || ""}
              onChange={handleEditChange}
              placeholder="Edad"
              className="text-blue-900 mx-4 rounded-sm bg-blue-200 px-3 py-1 shadow-md focus:outline-none"
            />
          </div>
          <div className="grid auto-rows-min">
            <span className="pl-2">Teléfono</span>
            <input
              type="tel"
              name="telefono"
              value={editData.telefono || ""}
              onChange={handleEditChange}
              placeholder="Teléfono"
              className="text-blue-900 mx-4 rounded-sm bg-blue-200 px-3 py-1 shadow-md focus:outline-none"
            />
          </div>
          <div className="grid auto-rows-min">
            <span className="pl-2">Institución</span>
            <input
              type="text"
              name="institucion"
              value={editData.institucion || ""}
              onChange={handleEditChange}
              placeholder="Institución"
              className="text-blue-900 mx-4 rounded-sm bg-blue-200 px-3 py-1 shadow-md focus:outline-none"
            />
          </div>
          <div className="grid auto-rows-min">
            <span className="pl-2">Clínica</span>
            <input
              type="text"
              name="clinica"
              value={editData.clinica || ""}
              onChange={handleEditChange}
              placeholder="Clínica"
              className="text-blue-900 mx-4 rounded-sm bg-blue-200 px-3 py-1 shadow-md focus:outline-none"
            />
          </div>
       
          <button
            type="submit"
            className="h-8 mt-2 text-[#ffffef] mx-2 mb-2 rounded-sm border-2 border-yellow-400  bg-gradient-to-r from-blue-600 to-blue-800 shadow-md hover:bg-orange-500"
          >
            Guardar
          </button>
        </form>
      </td>
    </tr>
  );
};

export default EditForm;