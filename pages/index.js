import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  const getUsers = async () => {
    try {
      const result = await axios(`https://jsonplaceholder.typicode.com/users`);
      setData(result.data);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  });

  console.log("hihi", data);
  const list = data;
  return (
    <>
      <div>
        <div className="w-full px-6 md:px-20 py-10 bg-green-800/50 flex items-center gap-3 fixed top-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              fillRule="evenodd"
              d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
              clipRule="evenodd"
            />
            <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
          </svg>
          <p className="text-white text-2xl font-semibold">Data Users</p>
        </div>
        <div className="w-full mt-24 px-10 md:px-32 py-10 space-y-2">
          {list.map((x, index) => (
            <div className="w-full py-5 px-3 bg-green-800/20" key={index}>
              {x.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
