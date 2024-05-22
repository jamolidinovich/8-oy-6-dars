import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import audi from "../assets/a.mp3";
function Musics() {
  const token = localStorage.getItem("token");
  const music = useRef();
  const location = useLocation();
  const { musicId } = location.state;
  const audioRef = useRef(null);
  const [data, setData] = useState();
  const [musicc, setMusic] = useState();
  const [musicList, setMusicList] = useState([]); // Changed musicc to musicList

  let da = location.state;
  // console.log(da);
  useEffect(() => {
    try {
      fetch(`https://api.spotify.com/v1/playlists/${da.id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((d) => {
          const musicUrls = d.tracks.items.map(
            (item) => item.track.preview_url
          );
          setMusicList(musicUrls);
          // setData(musicUrls.track.preview_url);
          // setPlaylistInfo({ name: d.name, description: d.description });
          console.log(d.tracks.items);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(28, error);
    }
  }, [token]);

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
        <h1>Audio Player</h1>
        {/* <audio controls ref={audioRef} src={musicc}></audio> */}
        <br />
      </div>
      <div>
        {musicList &&
          musicList.length > 0 &&
          musicList.map((el, index) => (
            <div key={index}>
              <audio controls ref={audioRef} src={el}></audio>
              {/* <p>{location.state.tracks.items[index].track.name}</p>
              <p>{location.state.tracks.items[index].track.artists[0].name}</p> */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Musics;
