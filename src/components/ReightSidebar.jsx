import user from "../assets/user.svg";
import close from "../assets/close.svg";
import icon from "../assets/icon.svg";
function ReightSidebar() {
  return (
    <div className="w-[17%] text-[#B2B2B2]  bg-black ">
      <div className="pt-8  pl-8  mr-20">
        <p className="flex text-[#B2B2B2] items-center">
          <span className="flex gap-1 text-[20px] font-bold">
            Friend <span></span> Activity
          </span>{" "}
          <img src={user} alt="" /> <img src={close} alt="" />
        </p>
        <p className="text-[12px]">
          Let friends and followers on Spotify see what you’re listening to.
        </p>
        <br />
        <img src={icon} alt="" />
        <br />
        <img src={icon} alt="" />
        <br />
        <img src={icon} alt="" />
        <span className="p-0 mt-3 inline-block text-[16px]">
          Go to Settings Social and enable “Share my listening activity on
          Spotify.’ You can turn this off at any time.
        </span>
        <button className="p-5 rounded-2xl text-black mt-5 bg-white">
          SETTINGS
        </button>
      </div>
    </div>
  );
}

export default ReightSidebar;
