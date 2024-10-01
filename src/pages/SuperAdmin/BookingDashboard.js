import React from "react";
import Sidebar from "../../components/Sidebar";

function BookingDashboard() {
  const statics = [
    {
      title: "Sharing",
    },
    {
      title: "Personal",
    },
    {
      title: "Airport",
    },
    {
      title: "Drive Test",
    },
    {
      title: "Intercity",
    },
    {
      title: "Avaibilty",
    },
    {
      title: "Route",
    },
    {
      title: "Out of Area",
    },
  ];
  const tableHeader = [
    {
      title: "New Booking",
    },
    {
      title: "Confirmed",
    },
    {
      title: "Group",
    },
    {
      title: "Assigned",
    },
    {
      title: "Accepted",
    },
    {
      title: "Enroute",
    },
    {
      title: "Completed",
    },
    {
      title: "Cancelled",
    },
  ];
  const tabSubHeading = [
    {
      title: "S No.",
    },
    {
      title: "Booking ID",
    },
    {
      title: "Source Address",
    },
    {
      title: "Destination Address",
    },
    {
      title: "Username",
    },
    {
      title: "Booking Date",
    },
    {
      title: "Booking Time",
    },
    {
      title: "Time Choice",
    },
    {
      title: "Total Amount",
    },
    {
      title: "Driver Earn",
    },
    {
      title: "Booking Placed",
    },
    {
      title: "Action",
    },
  ];
  return (
    <div className="mainBody">
      <div className="row  m-0 p-0">
        <Sidebar />
        <div className="col-lg-10 rightBodyContainerMain p-4">
          <div className="d-flex justify-content-between p-2 align-items-center">
            <div className="d-flex">
              <h5 className="mb-0">Boarding Dashboard</h5>
            </div>
          </div>
          <div className="row mx-0 p-0 my-3 mainNav">
            <div className="col-lg-6 row p-0 m-0">
              {statics?.slice(0, 4).map((v, i) => {
                return (
                  <div className="col-lg-3 p-0">
                    <div className={"navItem " + (i == 0 ? " activeNav" : " ")}>{v?.title}</div>
                  </div>
                );
              })}
            </div>
            <div className="col-lg-6 row p-0 m-0">
              {statics?.slice(4, 8).map((v, i) => {
                return (
                  <div className="col-lg-3 p-0">
                    <div className="navItem">{v?.title}</div>
                  </div>
                );
              })}
            </div>
            <div className="col-lg-6"></div>
          </div>
          <div className="mt-4 ">
            <div className="row mx-0 p-0 ">
              <div className="col-lg-6 row p-0 m-0">
                {tableHeader?.slice(0, 4).map((v, i) => {
                  return (
                    <div className="col-lg-3 p-0">
                      <div className={"tableHeaderItem " + (i == 0 ? " activetableHeaderItem" : " ")}>
                        <span className="pb-1 px-1 borderBottomWhite">{v?.title}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="col-lg-6 row p-0 m-0">
                {tableHeader?.slice(4, 8).map((v, i) => {
                  return (
                    <div className="col-lg-3 p-0">
                      <div className="tableHeaderItem">
                        <span className="pb-1 px-1 borderBottomWhite">{v?.title}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="px-2 py-3 bookingTableBody">
              <div className=" tableHeader">
                <div className="row m-0 p-0">

                  {tabSubHeading?.map((v, i) => {
                    return (
                      <div className="col-1 m-0 p-0">
                        <p className="mb-0 text-center" style={{color:"white", fontSize:"11px"}}>{v?.title}</p>
                      </div>
                    );
                  })}
                </div>
                
              </div>
              {[1,2, 3,4]?.map((v, i)=>{
                    return(
                        <div className="row px-2 py-3 bg-light m-0 my-3" style={{borderRadius:"20px"}}>
                            <div className="col-1 m-0 p-0">
                                <div style={{fontSize:"12px", fontWeight:"500"}} className="text-center">1</div>
                            </div>
                            <div className="col-1 m-0 p-0">
                                <div style={{fontSize:"12px", fontWeight:"500"}} className="text-center">12</div>
                            </div>
                            <div className="col-1 m-0 p-0">
                                <div style={{fontSize:"12px",fontWeight:"500", color:"blue"}} className="text-center">1</div>
                            </div>
                            <div className="col-1 m-0 p-0">
                                <div style={{fontSize:"12px",fontWeight:"500", color:"blue"}} className="text-center">Vikash Vihar Colony</div>
                            </div>
                            <div className="col-1 m-0 p-0">
                                
                                <div style={{fontSize:"12px",fontWeight:"500", }} className="text-center">12/10/2024</div>
                            </div>
                            <div className="col-1 m-0 p-0">
                                
                                <div style={{fontSize:"12px",fontWeight:"500", color:"red"}} className="text-center">12/10/2024</div>
                            </div>
                            <div className="col-1 m-0 p-0">
                                
                                <div style={{fontSize:"12px",fontWeight:"500", color:"green"}} className="text-center">04:34pm</div>
                            </div>
                            <div className="col-1 m-0 p-0">
                                
                                <div style={{fontSize:"12px",fontWeight:"500",}} className="text-center">Pickup</div>
                            </div>
                            <div className="col-1 m-0 p-0">
                                
                                <div style={{fontSize:"12px",fontWeight:"500",}} className="text-center">$80</div>
                            </div>
                            <div className="col-1 m-0 p-0">
                                
                                <div style={{fontSize:"12px",fontWeight:"500",}} className="text-center">$10</div>
                            </div>
                            <div className="col-1 m-0 p-0">
                                
                                <div style={{fontSize:"12px",fontWeight:"500",}} className="text-center">04:20pm</div>
                            </div>
                            <div className="col-1 m-0 p-0">
                                
                                <div className="d-flex justify-content-end">
                                <select style={{color:"white", background:"black", borderRadius:"8px", fontSize:"12px", padding:"4px"}}>
                                    <option>Action</option>
                                </select>
                                    </div>
                            </div>
                        </div>
                    )
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDashboard;
