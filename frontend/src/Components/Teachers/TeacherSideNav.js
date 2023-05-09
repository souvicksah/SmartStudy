import "./SideNavbar.css";
import { Link } from "react-router-dom";

// import { FarmerSideBarData } from "./FarmerSideBarData";

export function TeacherSideNav() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <li className="row">
          <Link className="SidebarList row" to="/teacher/myprofile">
            <div id="title">My Profile</div>
          </Link>
        </li>
        <li className="row">
          <Link className="SidebarList row" to="/teacher/editprofile">
            <div id="title">Edit Profile</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
