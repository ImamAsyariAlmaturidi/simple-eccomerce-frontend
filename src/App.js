import React, { useEffect, useState } from "react";
import Navbar from "./component/navbar";
import Image from "./image/image.webp";
import axios from "axios";

function App() {
  const [data, setData] = useState([]); // Menggunakan array kosong sebagai nilai awal
  const [dataNews, setDataNews] = useState([]);

  useEffect(() => {
    const fetchDataTrending = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/products`);
        console.log(res.data);
        setData(res.data.products); // Mengatur data yang diterima dari server ke state data
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataTrending();
  }, []);

  return (
    <div className="App h-full">
      <div className=" bg-neutral-700 p-2 w-full ">
        <header className="w-full flex items-center justify-center">
          <h5 className="text-white font-poppins text-sm tracking-widest">
            30 DAYS OF FREE THERAPY WITH EVERY ORDER - FREE SHIPPING OVER 60€
          </h5>
        </header>
      </div>

      <Navbar />
      <img src={Image} alt="Banner" /> {/* Memastikan ada alt properti di tag img */}
      <div className="flex mx-2 my-9 justify-center items-center">
        <h1 className="text-black font-poppins text-xl">NEW SPRING DROP</h1>
      </div>

      <div className="gap-4 mx-4 my-4 mt-4 flex  justify-evenly w-full ">
        {data &&
          data.map((item, index) => (
            <div key={index} className="bg-white p-4 text-center">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-2/4 w-40 object-cover rounded-md mb-2"
              />
              <h2 className="text-lg  font-poppins font-semibold text-gray-800">
                {item.title}
              </h2>
              <p className="text-sm font-poppins text-gray-700 mt-2">{item.description}</p>
              <p className="text-sm text-gray-700 mt-2">RP.{item.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
