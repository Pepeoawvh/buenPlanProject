import React, { useEffect, useState } from "react";
import { firestoreDB } from "../../firebase/config.js";
import SortableTable2 from "./SortTable2.jsx";

const FormuFetcher = ({ columns }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firestoreDB;
      const dataRef = db.collection("formubuenplan");
      const snapshot = await dataRef.get();
      const dataList = [];
      snapshot.forEach((doc) => {
        const createdAt = doc.data().createdAt ? doc.data().createdAt.toDate() : new Date();
        dataList.push({ ...doc.data(), id: doc.id, createdAt });
      });
      setData(dataList);
    };
    fetchData().catch((error) => {
      alert("Hubo un problema, revisar consola");
      console.log(error);
    });
  }, []);

  return <SortableTable2 columns={columns} data={data} />;
};

export default FormuFetcher;