"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FormuFetcher from "../components/client/formuFetcher";
import Contact from "../components/client/contact";
import Login from "../components/client/login";
import { useAuth } from "../context/authProvider";

const AdminBP = () => {
  const { currentUser, logout } = useAuth();
  const pathname = usePathname();

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
    <div className="bg-white text-blue-900 min-h-screen">
      <header className="flex items-center justify-evenly bg-[#2694e7] text-white py-4 shadow-md">
        <div className="flex w-full px-12 justify-between items-center">
          <h1 className="text-1xl md:text-2xl font-bold">Panel de Administración BuenPlan</h1>
          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-md shadow-md text-sm transition-colors"
          >
            Cerrar sesión
          </button>
        </div>
      </header>
      
      {/* Navegación del admin */}
      <div className="px-4 py-4">
        <nav className="flex h-full bg-gray-100 p-4 rounded-lg w-full">
          <ul className="flex flex-row gap-4">
            <li>
              <Link 
                href="/adminbp" 
                className={`px-4 py-2 rounded-md transition-colors ${
                  pathname === "/adminbp" 
                    ? "bg-blue-700 text-white" 
                    : "bg-[#2694e7] text-white hover:bg-blue-700"
                }`}
              >
                Formularios
              </Link>
            </li>
            <li>
              <Link 
                href="/adminbp/blog" 
                className={`px-4 py-2 rounded-md transition-colors ${
                  pathname === "/adminbp/blog" 
                    ? "bg-blue-700 text-white" 
                    : "border bg-[#2694e7] text-[white] hover:text-yellow-600 hover:bg-blue-700"
                }`}
              >
                Administrar Blog
              </Link>
            </li>
          </ul>
        </nav>
        
        <h2 className="text-xl font-semibold mb-4">Formularios recibidos</h2>
        
        <div className="overflow-x-auto">
          <FormuFetcher columns={columns} />
        </div>
      </div>
      
      <footer className="mt-12 border-t pt-6 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <Contact/>
        </div>
      </footer>
    </div>
  );
};

export default AdminBP;