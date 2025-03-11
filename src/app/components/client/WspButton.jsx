"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/wsp.module.css";

const WspButton = () => {
  const message = encodeURIComponent("Hola, vengo desde buenplan.cl, me interesa obtener mas información de sus servicios.");
  const whatsappUrl = `https://wa.me/+56933475014?text=${message}`;

  return (
    <div>
      <button className={`animate-fade animate-delay-300 ${styles.wsp}`}>
        <Link href={whatsappUrl}>
          <Image src="img/wspicon.svg" alt="WhatsApp Icon" width={50} height={50} />
        </Link>
      </button>
    </div>
  );
};

export default WspButton;