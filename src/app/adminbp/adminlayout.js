import React from "react";
import { AuthProvider } from "../context/authProvider";
import Header from "../components/client/header";
import Footer from "../components/client/footer";

export default function AdminLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="es">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Admin - Buen Plan</title>
        </head>
        <body className="antialiased bg-white">
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}