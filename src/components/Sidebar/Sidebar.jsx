import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { useState } from "react";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="Sidebar">
      {/* LOGO */}

      <div className="logo">
        <img src={Logo} alt="Logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      {/* MENU */}

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={`menuItem ${selected === index && "active"}`}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}

        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
