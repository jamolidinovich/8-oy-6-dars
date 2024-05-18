import LeftSidebar from "../components/LeftSidebar";
import ReightSidebar from "../components/ReightSidebar";

function Layout({ children }) {
  return (
    <div className="flex justify-between">
      <LeftSidebar></LeftSidebar>
      {children}
      <ReightSidebar></ReightSidebar>
    </div>
  );
}

export default Layout;
