import { useEffect, useState } from "react";
import Navbar from "./component/navbar";
import Image from "./image/image.webp";
import axios from "axios";
function App() {
  const [data, setData] = useState();
  const [dataNews, setDataNews] = useState([]);

  useEffect(() => {
    const fetchDataNews = async () => {
      try {
        const res = await axios.get(
          `https://api.goapi.io/stock/idx/news?api_key=e639f5a0-1b7f-5e92-dbbf-69f2cd82`,
          {
            headers: {
              accept: "application/json",
              "X-API-KEY": "e639f5a0-1b7f-5e92-dbbf-69f2cd82",
            },
          }
        );
        console.log(res.data.data.results);
        setDataNews(res.data.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchDataTrending = async () => {
      try {
        const res = await axios.get(
          `https://api.goapi.io/stock/idx/trending?api_key=e639f5a0-1b7f-5e92-dbbf-69f2cd82`,
          {
            headers: {
              accept: "application/json",
              "X-API-KEY": "e639f5a0-1b7f-5e92-dbbf-69f2cd82",
            },
          }
        );
        console.log(res.data);
        setData(res.data.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataTrending();
    fetchDataNews();
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
      <img src={Image}></img>
      <div className="flex mx-2 my-9 justify-center items-center">
        <h1 className="text-black font-poppins text-xl">NEWS</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 mt-4">
        {dataNews.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-cover rounded-md mb-2"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h2>
            <p className="text-sm text-gray-600">{item.published_at}</p>
            <p className="text-sm text-gray-700 mt-2">{item.description}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-sm mt-2 inline-block"
            >
              Read More
            </a>
          </div>
        ))}
      </div>


      <div className="flex mx-2 my-9 justify-center items-center">
        <h1 className="text-black font-poppins text-xl">DATA SAHAM TRENDING</h1>
      </div>


      <div className="company-trending flex flex-wrap justify-center gap-8">
        {Array.isArray(data) &&
          data.map((item, index) => (
            <div key={index} className="max-w-xs mx-auto">
              <div className="mt-10 text-sm font-poppins text-center cursor-pointer ">
                <img
                  className="h-14 w-14 mx-10 mb-2 "
                  src={item.company.logo}
                  alt={item.symbol}
                />
                <p className="font-bold">{item.symbol}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
