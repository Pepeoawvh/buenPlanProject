"use client";
import React, { useEffect, useState } from "react";
import { firestoreDB } from "../firebase/config.js";
import SortableTable2 from "../components/client/SortTable2.jsx";
import Contact from "../components/client/contact.jsx";

const AdminBP = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firestoreDB;
      const dataRef = db.collection("formubuenplan");
      const snapshot = await dataRef.get();
      const dataList = [];
      snapshot.forEach((doc) => {
        const createdAt = doc.metadata.createTime ? doc.metadata.createTime.toDate() : new Date();
        dataList.push({ ...doc.data(), id: doc.id, createdAt });
      });
      console.log(dataList); // Agregar console.log para mostrar los datos obtenidos
      setData(dataList);
    };
    fetchData().catch((error) => {
      alert("Hubo un problema, revisar consola");
      console.log(error);
    });
  }, []);

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
        accessor: "fechaEnvio",
      },
    ],
    []
  );

  return (
    <div className="bg-gray-900">
      <div className="grid justify-items-center auto-rows-min text-[9px] font-bold ">
        <h1 className="text-center text-2xl my-4 pl-4">FORMULARIOS BUEN PLAN</h1>
        <SortableTable2 columns={columns} data={data} />
        <div className="grid mb-4 mt-4 bg-cyan-600 w-screen justify-items-center justify-self-start text-xl py-2">
        </div>
      </div>
      <div className="grid justify-items-center">
        <Contact />
      </div>
    </div>
  );
};

export default AdminBP;