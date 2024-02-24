import { ReactNode } from "react";
function DashboardMod({ children }: { children: ReactNode }) {
  return (
    <span style={{ backgroundColor: "red", margin: "150px"}}>
      {children}
    </span>
  );
}
export default DashboardMod;