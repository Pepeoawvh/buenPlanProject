import React from "react";

const EditForm = ({ editData, handleEditChange, handleEditSubmit, columns }) => {
  if (!editData) return null;

  return (
    <tr className="bg-[#e9f5ff] text-[#004aad] w-full aspect-auto text-xs border-l-4 border-[#2694e7]">
      <td colSpan={columns.length} className="grid w-full">
        <form className="grid mt-2 gap-2 p-2" onSubmit={handleEditSubmit}>
          <div className="grid auto-rows-min">
            <span className="pl-2">Nombre</span>
            <input
              type="text"
              name="nombre"
              value={editData.nombre || ""}
              onChange={handleEditChange}
              placeholder="Nombre"
              className="text-[#1f2937] mx-4 rounded border border-[#2694e7] bg-white px-3 py-1 focus:outline-none focus:ring-1 focus:ring-[#2694e7]"
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
              className="text-[#1f2937] mx-4 rounded border border-[#2694e7] bg-white px-3 py-1 focus:outline-none focus:ring-1 focus:ring-[#2694e7]"
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
              className="text-[#1f2937] mx-4 rounded border border-[#2694e7] bg-white px-3 py-1 focus:outline-none focus:ring-1 focus:ring-[#2694e7]"
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
              className="text-[#1f2937] mx-4 rounded border border-[#2694e7] bg-white px-3 py-1 focus:outline-none focus:ring-1 focus:ring-[#2694e7]"
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
              className="text-[#1f2937] mx-4 rounded border border-[#2694e7] bg-white px-3 py-1 focus:outline-none focus:ring-1 focus:ring-[#2694e7]"
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
              className="text-[#1f2937] mx-4 rounded border border-[#2694e7] bg-white px-3 py-1 focus:outline-none focus:ring-1 focus:ring-[#2694e7]"
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
              className="text-[#1f2937] mx-4 rounded border border-[#2694e7] bg-white px-3 py-1 focus:outline-none focus:ring-1 focus:ring-[#2694e7]"
            />
          </div>
       
          <button
            type="submit"
            className="h-8 mt-2 text-white mx-2 mb-2 rounded border border-[#004aad] bg-[#004aad] shadow-sm hover:bg-[#2694e7] transition-colors"
          >
            Guardar
          </button>
        </form>
      </td>
    </tr>
  );
};

export default EditForm;