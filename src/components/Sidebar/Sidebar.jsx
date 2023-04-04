import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { motion } from "framer-motion";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt, UilBars, UilTimes } from "@iconscout/react-unicons";
import { useState } from "react";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  return (
    <>
      <div className="bars" style={expanded ? { left: "58%" } : { left: "5%" }}
      onClick={()=>setExpanded(!expanded)}
      >
        {expanded ? <UilTimes /> : <UilBars />}
      </div>
      <motion.div
        className="Sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
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
      </motion.div>
    </>
  );
};

export default Sidebar;
