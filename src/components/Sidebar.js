import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname)
  const navItems = [
    {
      title: "Dashboard",
      img: "/images/dashboard_1.png",
      path:"/"
    },
    {
      title: "Command Center",
      img: "/images/exam_copy.png",
      path:"/command-center"
    },
    {
      title: "Booking Dashboard",
      img: "/images/dashboard_1.png",
      path:"/booking-dashboard"
    },
    {
      title: "Chat Support",
      img: "/images/customer-support.png",
    },
    {
      title: "Funds Management",
      img: "/images/money-bag.png",
    },
    
    {
        title: "Ad Control Panel",
        img: "/images/settings_1.png",
      },
      {
        title: "Pricing & Cities",
        img: "/images/file.png",
      },
      {
        title: "Reports",
        img: "/images/google-docs.png",
      },
      {
        title: "Support Center",
        img: "/images/live-chat.png",
      },
      {
        title: "Option 1",
        img: "/images/live-chat.png",
      },
      {
        title: "Option 2",
        img: "/images/live-chat.png",
      },
      {
        title: "Option 3",
        img: "/images/live-chat.png",
      },
  ];
  return (
    <div className="col-lg-2 m-0 p-0">
      <div className="sideBar pt-4">
        <div className="d-flex align-items-center">
          <div className="brandLogo">
            <img src="/images/brandLogo.jpg" />
          </div>
          <div className="brandName">
            {" "}
            <img src="/images/mie_ride.png" />
          </div>
        </div>
        {/* sidebar list start */}
        <div className="pe-2">
          {navItems?.map((v, i) => {
            return (
              <div onClick={()=>navigate(v?.path)} className={"d-flex  sideBarOption align-items-center mb-3 " + (location.pathname == v?.path && "selectedBtn")}>
                <img className="img-fluid" src={v?.img} />
                <p className="mb-0">{v?.title}</p>
              </div>
            );
          })}
        </div>
        {/* sidebar list end */}
      </div>
    </div>
  );
}

export default Sidebar;
