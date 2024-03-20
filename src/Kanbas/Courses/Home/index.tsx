import ModuleList from "../Modules/List";
import Status from "./Status";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div style={{ display: 'flex' }}>
        <ModuleList />
        <Status/>
      </div>
    </div>
  );
}
export default Home;