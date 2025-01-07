"use client";
import React from "react";
import FormuFetcher from "../components/client/formuFetcher";
import Contact from "../components/client/contact";
import Login from "../components/client/login";
import { useAuth } from "../context/authProvider";
import AdminLayout from "./adminlayout";

const AdminBP = () => {
  const { currentUser, logout } = useAuth();

  const columns = React.useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "nombre",
      },
      {
        Header: "Rut",
        accessor: "rut",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Edad",
        accessor: "edad",
      },
      {
        Header: "Teléfono",
        accessor: "telefono",
      },
      {
        Header: "Institución",
        accessor: "institucion",
      },
      {
        Header: "Clínica",
        accessor: "clinica",
      },
      {
        Header: "Fecha de Envío",
        accessor: "createdAt",
        Cell: ({ value }) => {
          console.log("Fecha de Envío:", value);
          return value ? new Date(value).toLocaleDateString() : 'Fecha inválida';
        },
      },
    ],
    []
  );

  if (!currentUser) {
    return <Login />;
  }

  return (
    <AdminLayout>
      <div className="bg-white text-blue-900 h-full w-screen">
        <header>
          <h1 className="text-center text-2xl my-4 pl-4">FORMULARIOS BUEN PLAN</h1>
        </header>
        <main className="grid justify-items-center auto-rows-min text-[9px] font-bold ">
          <FormuFetcher columns={columns} />
          <div className="grid mb-4 mt-4 bg-blue-600 w-screen justify-items-center justify-self-start text-xl py-2">
          </div>
        </main>
        <footer className="grid justify-items-center">
          <Contact/>
          <button
            onClick={logout}
            className="mt-4 p-2 bg-red-600 w-1/2 text-white rounded mb-5"
          >
            Cerrar sesión
          </button>
        </footer>
      </div>
    </AdminLayout>
  );
};

export default AdminBP;