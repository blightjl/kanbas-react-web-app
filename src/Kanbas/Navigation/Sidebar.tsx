import { ReactNode } from "react";
function Sidebar({ children }: { children: ReactNode }) {
  return (
    <span style={{ backgroundColor: "black", height: "100vh", width: "80px", position: "fixed"}}>
      {children}
    </span>
  );
}
export default Sidebar;