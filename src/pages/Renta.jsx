import SignInput from "../components/SignInput";
import "react-multi-carousel/lib/styles.css";
import "../components/slick/styles.css";
import NavSmall from "../components/NavSmall";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Footer from "../components/Footer";

const Renta = () => {
  // const src = ["./inicio1.png", "./inicio2.png", "./inicio3.png"];
  const [price, setPrice] = useState("");
  const [renta, setRenta] = useState("RENTA");
  const whatsApp = localStorage.getItem("whatsApp");
  const handleSolcitudClick = () => {
    console.log("handleSolcitudClick");
  };
  const navigate = useNavigate();
  const [src, setSrc] = useState("");
  const [brand, setBrand] = useState("");
  useEffect(() => {
    const currentURL = window.location.href;
    const urlParams = new URLSearchParams(currentURL);

    // Get the value of a specific query parameter
    const queryParamValue = urlParams.get("query");
    console.log("Query parameter value:", queryParamValue);

    let paramsString = "";
    for (const param of urlParams) {
    paramsString = param[0];
    }
    let str = "";
    // Get all query parameters
    for (const param of urlParams) {
      let index = paramsString.lastIndexOf("?");
      str = paramsString.slice(index + 1, paramsString.length);
      setBrand(str);
      paramsString = paramsString.slice(0, index);
      console.log("\ncredito src", str);
      console.log("credito paramsString", paramsString);
    }
    for (const param of urlParams) {
      let index = paramsString.lastIndexOf("?");
      str = paramsString.slice(index + 1, paramsString.length);
      setPrice(str);
      paramsString = paramsString.slice(0, index);
      console.log("\ncredito src", str);
      console.log("credito paramsString", paramsString);
    }
    for (const param of urlParams) {
      let index = paramsString.lastIndexOf("?");
      str = paramsString.slice(index + 1, paramsString.length);
      setSrc(str);
      console.log("\ncredito src", str);
      console.log("credito paramsString", paramsString);
    }
  }, []);
  // useEffect(() => {
  //   let isLogged = localStorage.getItem("isLogged");
  //   let freetime = localStorage.getItem("freetime");
  //   let status = localStorage.getItem("membership");
  //   if(isLogged !== "true") navigate("/signin");
  //   else if(freetime !== "true" || status !== "active") navigate("/system");
  // }, []);
  return (
    <>
      <NavSmall />
      <FloatingWhatsApp
        accountName={whatsApp}
        darkMode={true}
        allowEsc={true}
        avatar="./highLightTitle.png"
        statusMessage="Bienvenido a nuestro servicio."
        chatMessage="Hola, ¿en qué puedo ayudarle?"
        phoneNumber={whatsApp}
        onSubmit={(event, formValue) => clickSubmit(event, formValue)}
      />
      <div className="bg-white w-5/6 h-32"></div>
      <div className="flex flex-col md:flex-row h-fit md:h-[600px] justify-between gap-12 md:gap-0 m-12">
        <div className="w-full md:w-1/3 flex flex-col gap-4 justify-evenly items-center">
          <SignInput type={"outlined"} value={"$" + price + " " + brand} onChange={setPrice} style={"text-sm xs:text-md sm:text-lg"} />
          <SignInput type={"outlined"} value={renta} onChange={setRenta} />
          <button
            className="bg-green-700 rounded-md text-white px-4 py-2 mt-8"
            onClick={handleSolcitudClick}
          >
            Solcitud en linea
          </button>
        </div>
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-end justify-center gap-10">
          <img className="md:h-[500px] lg:h-[600px] w-5/6 object-cover" src={src} alt="tomas1" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start border-[1px] p-4 border-gray-300 rounded-xl mx-12 mb-10">
        <p className="text-xl md:text-2xl">Requisitos:</p>
        <p className="text-lg md:text-xl">
          Al ser autorizado por la institucion finaciera debera enviar los siguientes requisitos:
        </p>
        <p className="text-md md:text-lg">-INE POR AMBOS LADOS</p>
        <p className="text-md md:text-lg">-Licencia Vigente</p>
        <p className="text-md md:text-lg">
          -Comprobante de Domicilio
        </p>
      </div>
      <Footer />
    </>
  );
};
export default Renta;
