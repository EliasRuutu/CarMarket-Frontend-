import SignInput from "../components/SignInput";
import "react-multi-carousel/lib/styles.css";
import "../components/slick/styles.css";
import NavSmall from "../components/NavSmall";
import { useEffect, useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Credito = () => {
  // const src = ["./inicio1.png", "./inicio2.png", "./inicio3.png"];
  const [price, setPrice] = useState("");
  const [mensualidad, setMensualidad] = useState("Mensualidad");
  const [plazo, setPlazo] = useState("");
  const [enganche, setEnganche] = useState("");

  const selldata = [
    "ejemplo de banner1.png",
    "ejemplo de banner1.png",
    "ejemplo de banner1.png",
    "ejemplo de banner1.png",
    "ejemplo de banner1.png",
  ];
  const handleSolcitudClick = () => {
    console.log("handleSolcitudClick");
  };
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

  const handleMouseLeave = () => {
    setMentionListShow(false);
    setBrandListShow(false);
  };

  const mentionList = [
    "Plazo",
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "Volkswagen",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Nissan",
    "Tesla",
    "Jeep",
    "Subaru",
    "Hyundai",
    "Kia",
    "Lexus",
    "Porsche",
    "Mazda",
    "Volvo",
    "Fiat",
    "Mitsubishi",
    "Jaguar",
    "Land Rover",
    "GMC",
    "Chrysler",
    "Dodge",
    "Buick",
    "Cadillac",
    "Lincoln",
    "Infiniti",
    "Acura",
    "MINI",
    "Alfa Romeo",
    "Ram",
    "Suzuki",
    "Genesis",
    "Maserati",
    "Ferrari",
    "Aston Martin",
    "Bentley",
  ];
  const [mention, setMention] = useState("ENGANCHE (Resultado del 10% Minimo)");
  const [mentionListShow, setMentionListShow] = useState(false);
  const [mentionListSearch, setMentionListSearch] = useState("");
  const handleClickMention = (value) => {
    setMention(value);
    setMentionListShow(false);
    setMentionListSearch("");
  };
  const handleClickMentionShow = (value) => {
    setMentionListShow((prev) => !prev);
  };

  const brandList = ["12", "24", "36", "48"];
  const [brandItem, setBrandItem] = useState("Plazo");
  const [brandListShow, setBrandListShow] = useState(false);
  const [brandListSearch, setBrandListSearch] = useState("");
  const handleClickBrand = (value) => {
    setBrandItem(value);
    setBrandListShow(false);
    setBrandListSearch("");
  };
  const handleClickBrandShow = (value) => {
    setBrandListShow((prev) => !prev);
  };

  return (
    <>
      <NavSmall onClick={handleMouseLeave} />
      <FloatingWhatsApp
        accountName={"52 1 5616002085"}
        darkMode={true}
        allowEsc={true}
        avatar="./highLightTitle.png"
        statusMessage="Bienvenido a nuestro servicio."
        chatMessage="Hola, ¿en qué puedo ayudarle?"
        phoneNumber={"52 1 5616002085"}
        onSubmit={(event, formValue) => clickSubmit(event, formValue)}
        onClick={handleMouseLeave}
      />
      <div className="bg-white w-5/6 h-32"></div>
      <div className="flex flex-col md:flex-row relative h-fit md:h-[600px] justify-between gap-12 md:gap-0 m-12">
        <div
          className="w-screen h-screen absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10"
          onClick={handleMouseLeave}
        ></div>
        <div className="w-full md:w-1/3 flex flex-col gap-4 justify-evenly items-center">
          <SignInput
            type={"outlined"}
            value={"$" + price + " " + brand}
            onChange={setPrice}
            style={"text-sm xs:text-md sm:text-lg z-20"}
          />
          <div className="w-full h-20 py-8 px-4 border-[1px] border-gray-300 rounded-lg flex items-center">
            <div className="outline-none cursor-pointer border-[1px] w-full border-gray-500 rounded-lg text-sm md:text-md h-12 pr-2 lg:h-12 flex items-center justify-between relative">
              {mentionListShow ? (
                <input
                  className="w-full h-full rounded-md px-2 outline-none z-30"
                  value={mentionListSearch}
                  onChange={(e) => setMentionListSearch(e.target.value)}
                />
              ) : (
                <label
                  className="w-full h-full flex items-center cursor-pointer pl-2 z-30"
                  onClick={handleClickMentionShow}
                >
                  {mention}
                </label>
              )}
              <FontAwesomeIcon icon={faAngleDown} />
              <div
                className={`absolute cursor-pointer min-h-12 h-fit max-h-48 top-[48px] shadow-xl bg-white w-full overflow-auto border-[2px] border-gray-400 rounded-sm pt-2 z-40 ${
                  mentionListShow ? "block" : "hidden"
                }`}
              >
                {mentionList
                  .filter((item) =>
                    item.toLowerCase().includes(mentionListSearch.toLowerCase())
                  )
                  .map((item) => (
                    <p
                      key={item}
                      className="w-full pl-2 h-8 border-t-[1px] border-gray-300 flex items-center bg-white hover:bg-blue-200 z-50 cursor-pointer"
                      onClick={() => handleClickMention(item)}
                    >
                      {item}
                    </p>
                  ))}
              </div>
            </div>
          </div>
          <div className="w-full h-20 py-8 px-4 border-[1px] border-gray-300 rounded-lg flex items-center">
            <div className="outline-none cursor-pointer border-[1px] w-full border-gray-500 rounded-lg text-sm md:text-md h-12 pr-2 lg:h-12 flex items-center justify-between relative">
              {brandListShow ? (
                <input
                  className="w-full h-full rounded-md px-2 outline-none z-30"
                  value={brandListSearch}
                  onChange={(e) => setBrandListSearch(e.target.value)}
                />
              ) : (
                <label
                  className="w-full h-full flex items-center cursor-pointer pl-2 z-30"
                  onClick={handleClickBrandShow}
                >
                  {brandItem}
                </label>
              )}
              <FontAwesomeIcon icon={faAngleDown} />
              <div
                className={`absolute cursor-pointer min-h-12 h-fit max-h-48 top-[48px] shadow-xl bg-white w-full overflow-auto border-[2px] border-gray-400 rounded-sm pt-2 z-30 ${
                  brandListShow ? "block" : "hidden"
                }`}
              >
                {brandList
                  .filter((item) =>
                    item.toLowerCase().includes(brandListSearch.toLowerCase())
                  )
                  .map((item) => (
                    <p
                      key={item}
                      className="w-full pl-2 h-8 border-t-[1px] border-gray-300 flex items-center bg-white hover:bg-blue-200 z-50 cursor-pointer"
                      onClick={() => handleClickBrand(item)}
                    >
                      {item}
                    </p>
                  ))}
              </div>
            </div>
          </div>
          <SignInput
            type={"outlined"}
            value={mensualidad}
            onChange={setMensualidad}
            style={"z-auto"}
          />
        </div>
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-end justify-center gap-10">
          <img className="w-5/6 h-4/5 object-cover" src={src} alt="tomas1" />
          <button
            className="w-1/3 h-[50px] bg-green-700 rounded-md text-white mr-0 md:mr-[200px] z-30"
            onClick={handleSolcitudClick}
          >
            Solcitud en linea
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start border-[1px] p-4 border-gray-300 rounded-xl mx-12 mb-10">
        <p className="text-xl md:text-2xl">Requisitos:</p>
        <p className="text-lg md:text-xl">
          Si tu solcitud es autorizada por la finaiera te solcitareme los
          siguientes requisitos.
        </p>
        <p className="text-md md:text-lg">-INE POR AMBOS LADOS</p>
        <p className="text-md md:text-lg">-Firmar la solcitud</p>
        <p className="text-md md:text-lg">
          -Comprobante de Domicilio vigente (no mas de dos meses de vigencia)
        </p>
        <p className="text-md md:text-lg">-3 estados de cuena en PDF completo y/o 3 meses de recibos de nomina con sello fiscal </p>
      </div>
      <Footer />
    </>
  );
};
export default Credito;
