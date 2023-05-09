import "./Css/SideNavbar.css";
import { Link } from "react-router-dom";
import { StudentSideNavBarData } from "./StudentSideNavBarData";
// import { FarmerSideBarData } from "./FarmerSideBarData";

export function StudentSideNav() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <li className="row">
          <Link className="SidebarList row" to="/student/dashboard">
            <div id="title">dashBorad</div>
          </Link>
        </li>
        <li className="row">
          <Link className="SidebarList row" to="/student/profile">
            <div id="title">My Profile</div>
          </Link>
        </li>
        <li className="row">
          <Link className="SidebarList row" to="/student/editprofile">
            <div id="title">Edit Profile</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
