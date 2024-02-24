import { Link } from "react-router-dom";
import courses from "../Database/courses.json";
import DashboardMod from "./DashboardMod";
import "../../libs/bootstrap/bootstrap.min.css";
import "./index.css";

function Dashboard() {
  return (
    
    <div className="dashboard">
        <div>
      <h1 className="wd-dashboard-anchor">Dashboard<br/><hr/></h1>

      </div>
      <div className="wd-dashboard-subview">
      <h2>Published Courses (7)</h2>
      <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="wd-dashboard-card">
              <div className="card">
                <img
                  src={course.image}
                  className="card-img-top"
                />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.name}
                  </Link>
                  <p className="card-text">Full Stack software developer</p>
                  <Link to="#" className="btn btn-primary">
                    {" "}
                    Go{" "}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Dashboard;