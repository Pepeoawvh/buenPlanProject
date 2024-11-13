import React from "react";

const EditForm = ({ editData, handleEditChange, handleEditSubmit, columns }) => {
  if (!editData) return null;

  return (
    <tr className=" bg-gray-800 w-full">
      <td colSpan={columns.length} className="grid w-full">
        <form className="grid w- gap-2" onSubmit={handleEditSubmit}>
          <div className="grid auto-rows-min">
            <span className="pl-2">Nombre</span>
            <input
              type="text"
              name="nombre"
              value={editData.nombre || ""}
              onChange={handleEditChange}
              placeholder="Nombre"
              className="text-gray-300 w-full bg-gray-600 px-6 py-1 shadow-md focus:outline-none"
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
              className="text-gray-300 w-full bg-gray-600 px-6 py-1 shadow-md  focus:outline-none"
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
              className="text-gray-300 w-full bg-gray-600 px-6 py-1 shadow-md  focus:outline-none"
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
              className="text-gray-300 w-full bg-gray-600 px-6 py-1 shadow-md  focus:outline-none"
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
              className="text-gray-300 w-full bg-gray-600 px-6 py-1 shadow-md  focus:outline-none"
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
              className="text-gray-300 w-full bg-gray-600 px-6 py-1 shadow-md  focus:outline-none"
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
              className="text-gray-300 w-full bg-gray-600 px-6 py-1 shadow-md  focus:outline-none"
            />
          </div>
       
          <button
            type="submit"
            className="h-8 mt-2 text-[#ffffef]  bg-gradient-to-r from-blue-600 to-blue-800 shadow-md hover:bg-orange-500"
          >
            Guardar
          </button>
        </form>
      </td>
    </tr>
  );
};

export default EditForm;