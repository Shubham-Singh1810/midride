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
            <div className="d-flex addBtn justify-content-between">
                <p className="mb-0 ">Add</p>
                <p className="mb-0"><i className="fa fa-plus"></i></p>
                
              </div>
          </div>
          <div className="row p-0 m-0">
            <div className="col-8 m-0 p-0 ">
              <div className="p-4  m-2 shadow assignRoleMain">
                <div className="row p-0 m-0">
                  <div className="row justify-content-between m-0 p-0">
                  <div className="col-6 p-0 m-0">
                    <h6>First Name</h6>
                    <input className="form-control shadow-sm" />
                    <h6 className="mt-3">Last Name</h6>
                    <input className="form-control shadow-sm" />
                  </div>
                  <div className="col-2 my-auto p-0 mx-0">
                    <div className="cameraInput d-flex justify-content-center align-items-center">
                      <img src="https://cdn-icons-png.flaticon.com/128/3687/3687416.png" className="img-fluid"/>
                    </div>
                  </div>
                  </div>
                  <div className="col-12 p-0 m-0">
                  <h6 className="mt-3">Email Address</h6>
                  <input className="form-control shadow-sm" />
                  </div>
                  <div className="col-12 p-0 m-0">
                  <h6 className="mt-3">Phone Number</h6>
                  <input className="form-control shadow-sm" />
                  </div>
                  <div className="col-12 p-0 m-0">
                  <h6 className="mt-3">Password</h6>
                  <input className="form-control shadow-sm" />
                  </div>
                  <div className="col-12 p-0 mt-4">
                  <div className="p-4 shadow-sm">
                  <h5 className="mb-4">Permissions</h5>
                  <div className="row m-0 p-0">
                    <div className="col-2"></div>
                    <div className="col-10 row m-0 p-0">
                      <div className="col-2 m-0 p-0">
                        <h6>Member</h6>
                        <div className="d-flex justify-content-centen">
                        <CustomRangeInput/>
                        </div>
                      </div>
                      <div className="col-2 m-0 p-0">
                        <h6>Manager</h6>
                        <div className="d-flex justify-content-centen">
                        <CustomRangeInput value={true}/>
                        </div>
                      </div>
                      <div className="col-2 m-0 p-0">
                        <h6>Admin</h6>
                        <div className="d-flex justify-content-centen">
                        <CustomRangeInput/>
                        </div>
                      </div>
                      <div className="col-2 m-0 p-0">
                        <h6>Member</h6>
                        <div className="d-flex justify-content-centen">
                        <CustomRangeInput/>
                        </div>
                      </div>
                      <div className="col-2 m-0 p-0">
                        <h6>Member</h6>
                        <div className="d-flex justify-content-centen">
                        <CustomRangeInput/>
                        </div>
                      </div>
                      <div className="col-2 m-0 p-0">
                        <h6>Member</h6>
                        <div className="d-flex justify-content-centen">
                        <CustomRangeInput/>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>
                  <div className="col-12 p-0 mt-4">
                  <div className="p-4 shadow-sm">
                  <h5 className="mb-4">Permissions</h5>
                  <div className="row m-0 p-0">
                    <div className="col-2"></div>
                    <div className="col-10 row m-0 p-0">
                      <div className="col-2 m-0 p-0">
                        <h6>Member</h6>
                        <div className="d-flex justify-content-centen">
                        <CustomRangeInput/>
                        </div>
                      </div>
                      <div className="col-2 m-0 p-0">
                        <h6>Manager</h6>
                        <div className="d-flex justify-content-centen">
                        <CustomRangeInput value={true}/>
                        </div>
                      </div>
                      <div className="col-2 m-0 p-0">
                        <h6>Admin</h6>
                        <div className="d-flex justify-content-centen">
                        <CustomRangeInput/>
                        </div>
                      </div>
                      <div className="col-2 m-0 p-0">
                        <h6>Member</h6>
                        <div className="d-flex justify-content-centen">
                        <CustomRangeInput/>
                        </div>
                      </div>
                      <div className="col-2 m-0 p-0">
                        <h6>Member</h6>
                        <div className="d-flex justify-content-centen">
                        <CustomRangeInput/>
                        </div>
                      </div>
                      <div className="col-2 m-0 p-0">
                        <h6>Member</h6>
                        <div className="d-flex justify-content-centen">
                        <CustomRangeInput/>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <button className="sendInviteBtn shadow">Send Invite</button>
                </div>
              </div>
            </div>
            <div className="col-4 m-0 p-0 ">
            <div className="p-4  m-2 shadow assignRoleMain " style={{height:"100%"}}>
              <h6>Notifications</h6>
              <div className="mt-4">
                <div className="px-4 py-3 shadow-sm  d-flex justify-content-between align-items-center" style={{borderRadius:"18px"}}>
                  <p className="mb-0">Sandeep Sidhu Sent Invite Request</p>
                  <i className="fa fa-close text-danger"></i>
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

export default AssignRole;
