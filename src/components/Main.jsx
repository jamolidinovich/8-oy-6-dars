import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Main() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://api.spotify.com/v1/browse/featured-playlists", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((d) => {
        setData(d.playlists.items);
        console.log(d);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  function handleMusic(id, el) {
    navigate(`/musics/${id}`, { state: { id: id, el } });
  }
  console.log(data.collaborative);
  return (
    <div className="relative">
      <div className=" ">
        <div className=" justify-center relative gap-10 h-[100%] w-[100%] bg-[#121212] flex flex-wrap pt-[100px] ">
          {data.map((el, index) => (
            <div el={el} key={index} className="gap-4 ">
              <div
                onClick={() => handleMusic(el.id, el)}
                className="w-[224px] p-5 rounded-lg  h-[354px] bg-[#1B1B1B] text-[#B3B3B3]"
              >
                <img
                  src={el.images[0].url}
                  alt={el.name}
                  className="w-[182px] h-[182px] rounded-lg "
                  style={{
                    objectFit: "cover",
                  }}
                />
                <h1 className="text-[16px] text-white">{el.name}</h1>

                <span className="tetx-[12px]">{el.description}</span>
                <div className="w-[182px] h-[182px]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
