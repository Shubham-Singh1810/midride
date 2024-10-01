import React from "react";
import Sidebar from "../../components/Sidebar";

function SuperDashboard() {
  const statics = [
    {
      title: "Users",
      count: 42,
      mainIcon: "/images/user_1.png",
      postive: true,
      percentage: "+15%",
    },
    {
      title: "Drivers",
      count: 40,
      mainIcon: "/images/driver.png",
      postive: true,
      percentage: "+15%",
    },
    {
      title: "Total Monthly Earning",
      count: "$250",
      mainIcon: "/images/money.png",
      postive: true,
      percentage: "+15%",
    },
    {
      title: "My Monthly Earning",
      count: "$20",
      mainIcon: "/images/earnings.png",
      postive: true,
      percentage: "+15%",
    },
    {
      title: "Today's Intrac E-Transfer ",
      count: "$50",
      mainIcon: "/images/transfer.png",
      postive: true,
      percentage: "+15%",
    },
    {
      title: "Today's Quick Deposite",
      count: "$100",
      mainIcon: "/images/time.png",
      postive: true,
      percentage: "+15%",
    },
  ];
  return (
    <div className="mainBody">
      <div className="row  m-0 p-0">
        <Sidebar />
        <div className="col-lg-10 rightBodyContainerMain p-4">
          <div className="d-flex justify-content-between p-2 align-items-center">
            <div className="d-flex">
              <p className="mb-0 me-2 align-items-center">Welcome</p>
              <h5 className="mb-0">Shubham Singh!</h5>
            </div>
            <div className="d-flex align-items-center">
              <div>
                <select className="langSelect">
                  <option>English</option>
                </select>
              </div>
              <div className="mx-4 userImg">
                <img src="/images/ellipse_1.png" />
              </div>
              <div className="logOut">
                <img src="/images/turn-off.png" />
              </div>
            </div>
          </div>
          <div className="row mx-0 p-0 my-3">
            {statics?.map((v, i) => {
              return (
                <div className="col-lg-2 p-1">
                  <div className="staticsCard shadow-sm border">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="mb-0" style={{ fontSize: "13px", height: "40px", lineHeight: "16px" }}>
                        {v?.title}
                      </p>
                      <img src={v?.mainIcon} />
                    </div>
                    <h4 className="mb-2">{v?.count}</h4>
                    <div className="d-flex">
                      <img src="/images/statistics.png" style={{ height: "15px" }} className="bg-success rounded" />
                      <p className="ms-1 mb-0" style={{ fontSize: "12px" }}>
                        {v?.percentage} from last month
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row m-0 p-0">
            <div className="col-lg-5  m-0 p-1">
              <div className="shadow-sm bookingGraph p-4">
                <div className="d-flex justify-content-between">
                  <h6 className="mb-0">Booking Overview</h6>
                  <div>
                    <select className="shadow-sm me-2">
                      <option>Total</option>
                      <option>Completed</option>
                      <option>Cancelled</option>
                    </select>
                    <select className="shadow-sm">
                      <option>This Month</option>
                      <option>Todays</option>
                      <option>This year</option>
                      <option>Lifetime</option>
                    </select>
                  </div>
                </div>
                <div className="row m-0 mt-4 p-0">
                  <div className="col-1 m-0 p-0">
                    {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]?.map((v, i) => {
                      return <p className="mb-0 text-end " style={{height:"25px",position:"relative", bottom:"5px", fontSize:"12px",  fontWeight:"500"}}>{v * 100}</p>;
                      
                    })}
                    <p className="mb-0 text-end " style={{height:"25px",position:"relative", bottom:"12px", fontSize:"12px",  fontWeight:"500"}}>0</p>;
                  </div>
                  <div className="col-11 row m-0 p-0">
                    {[1, 2,  4,3, 5,  8, 9, 10, 11,7, 8, 12]?.map((v, i)=>{
                      return(
                        <div className="col-1 " >
                      <div style={{ height: "250px", width:"22px" ,borderRadius:"8px", background:"#F5F5F5"}} className="d-flex align-items-end">
                        <div className="" style={{ height: v*10+"px", width:"22px" ,borderRadius:"8px", background:"#139F01"}}></div>
                      </div>
                    </div>
                      )
                    })}
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep" , "Oct", "Nov", "Dec"]?.map((v, i)=>{
                      return(
                        <div className="col-1 " >
                      <div style={{  width:"22px"}} className="d-flex align-items-end justify-content-center">
                        <p style={{fontSize:"10px"}}>{v}</p>
                      </div>
                    </div>
                      )
                    })}
                    
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="row col-lg-7 m-0 p-0">
            <div className="col-lg-6 m-0  p-1">
              <div className="shadow-sm pieGraphBg  p-4">
                <div className="d-flex justify-content-between">
                  <h6 className="mb-0">Booking Overview</h6>
                  <div>
                    <select className="shadow-sm me-2">
                      <option>Total</option>
                      <option>Completed</option>
                      <option>Cancelled</option>
                    </select>
                   
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center" style={{height:"100%"}}>
                  <img className="img-fluid" src="/images/vector_smart_object.png"/>
                </div>
              </div>
            </div>
            <div className="col-lg-6 m-0  p-1">
              <div className="shadow-sm tasksRemainer  p-4">
                <div className="d-flex bg-dark btnGroup">
                  <div className="toggleBtn activeToggle">Taks</div>
                  <div className="toggleBtn">Remainder</div>
                  <div>
                    
                   
                  </div>
                </div>
                
              </div>
            </div>
            </div>
          </div>
          <div className="row m-0 p-0">
          <div className="col-lg-6  m-0 p-1">
              <div className="shadow-sm bookingGraph p-4">
                
                <div className="row m-0 p-0">
                  <div className="col-1   ">
                    <div className="outOfAreaText" >
                      Out Of Area
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="outAreaCard border-sm">
                      <div className="text-center upperCap">Bramton to Bramton</div>
                      <div className="text-center lowerCap">Total-2</div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="outAreaCard border-sm">
                      <div className="text-center upperCap">Bramton to Bramton</div>
                      <div className="text-center lowerCap">Total-2</div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="outAreaCard border-sm">
                      <div className="text-center upperCap">Bramton to Bramton</div>
                      <div className="text-center lowerCap">Total-2</div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="outAreaCard border-sm">
                      <div className="text-center upperCap">Bramton to Bramton</div>
                      <div className="text-center lowerCap">Total-2</div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="outAreaCard border-sm">
                      <div className="text-center upperCap">Bramton to Bramton</div>
                      <div className="text-center lowerCap">Total-2</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuperDashboard;
