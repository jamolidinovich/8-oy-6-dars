import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function Musics() {
  const [d, setD] = useState();
  // console.log(props);
  // const location = useLocation();
  // const { id } = useParams();
  // const { state } = location;
  // const data = state ? state.data : null;
  // console.log(data);
  const location = useLocation();
  const { musicId } = location.state;
  let da = location.state;
  console.log(da);
  // console.log(location.state);
  return (
    <div className=" w-[100%]  pt-[100px]  bg-gradient-to-b from-[#cade2f] from-2% via-[#8b8b3d] via-5% to-[#121212] to-40%  bg-[#121212] bg-100% ">
      <div className="flex p-16 gap-10 w-[100%] flex-wrap  items-center   ">
        <div>
          <img
            src={da.el.images[0].url}
            alt={da.el.name}
            className="w-[279px] h-[279px]  rounded-lg "
          />
        </div>
        <div>
          <span className="text-white text-[16px]">PUBLIC PLAYLIST</span>
          <h3 className="uppercase text-[122px] text-white font-bold">
            {da.el.name}
          </h3>
          <p className="text-white">{da.el.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Musics;
