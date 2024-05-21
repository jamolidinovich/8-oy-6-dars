import { useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import audi from "../assets/a.mp3";
function Musics() {
  const [d, setD] = useState();
  const music = useRef();
  const location = useLocation();
  const { musicId } = location.state;
  const token = localStorage.getItem("token");
  const [data, setData] = useState();
  console.log(token);
  let da = location.state;
  console.log(da);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  fetch(`${import.meta.env.VITE_API_MUSIC}playlists/${da.el.id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setData(data.tracks.items);
      console.log(data.tracks.items[0].added_at);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <div className=" w-[100%] mt-[-100px]  pt-[100px]  bg-gradient-to-b from-[#cade2f] from-2% via-[#8b8b3d] via-5% to-[#121212] to-40%  bg-[#121212] bg-100% ">
      <div
        style={{ display: "flex" }}
        className="flex p-16 gap-10 w-[100%] flex-wrap  items-center   "
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <img
            src={da.el.images[0].url}
            alt={da.el.name}
            className="w-[279px] h-[279px]  rounded-lg "
          />
          <h3 className="uppercase text-6xl text-white font-bold">
            {da.el.name}
          </h3>
        </div>
        <div className="ml-[300px] mt-[-120px]">
          <p className="text-white">{da.el.description}</p>
        </div>

        {/* <audio ref={music} src={da.el.tracks} controls={true}></audio>
        <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button> */}
        <h1>Audio Player</h1>
        <audio controls ref={audioRef}>
          <source src={da.el.tracks.href} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <br />
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>

        <h3 key={index}>{data.tracks.items[0].added_at}</h3>
      </div>
    </div>
    // </div>
  );
}

export default Musics;
