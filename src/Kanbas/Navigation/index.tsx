import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./index.css";
import "../../libs/font-awesome/css/font-awesome.min.css"

function KanbasNavigator() {
  const { pathname } = useLocation();
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const images = ["fa fa-user default-padding", "fa fa-tachometer default_padding", "fa fa-book default_padding", "fa fa-calendar default_padding", "fa fa-inbox default_padding", "fa fa-clock-o default_padding", "fa fa-tv default_padding", "fa fa-cloud default_padding", "fa fa-question-circle default_padding"];
  return (
    <>
    <Sidebar>
      <ul className="wd-kanbas-navigation">
      <img className="neu_logo" src="/images/neu_logo.png"></img>
        {links.map((link) => (
          <li key={link} className={pathname.includes(link) ? "wd-active" : ""}>
            <div>
            <Link to={`/Kanbas/${link}`}><i className={images[links.findIndex((item) => item == link)]}></i><br/>{link}</Link>
            </div>
          </li>
        ))}
      </ul>
      </Sidebar>
    </>
  );
}

export default KanbasNavigator;