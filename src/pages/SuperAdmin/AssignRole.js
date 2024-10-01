import React from "react";
import Sidebar from "../../components/Sidebar";
import CustomRangeInput from "../../components/CustomRangeInput";

function AssignRole() {
  
  return (
    <div className="mainBody">
      <div className="row  m-0 p-0">
        <Sidebar />
        <div className="col-lg-10 rightBodyContainerMain p-4">
          <div className="d-flex justify-content-between p-2 align-items-center">
            <div className="d-flex">
              <h5 className="mb-0">Assign Role</h5>
            </div>
          </div>
         <div className="row p-0 m-0">
            <div className="col-7 m-0 p-0 ">
                <div className="p-4 border m-2 rounded">
                {/* <h6 className="mb-0">Assign Role</h6> */}
                </div>
            </div>
            <div className="col-5 m-0 p-0 ">
                <div className="p-4 border m-2 rounded"></div>
            </div>
         </div>
        </div>
      </div>
    </div>
  );
}

export default AssignRole;
