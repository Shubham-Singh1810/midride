import React from 'react'
import {Route, Routes} from "react-router-dom"
import SuperDashboard from '../pages/SuperAdmin/SuperDashboard'
import CommandCenter from '../pages/SuperAdmin/CommandCenter'
import BookingDashboard from '../pages/SuperAdmin/BookingDashboard'
import AssignRole from '../pages/SuperAdmin/AssignRole'
function SuperAdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SuperDashboard/>}/>
      <Route path="/command-center" element={<CommandCenter/>}/>
      <Route path="/booking-dashboard" element={<BookingDashboard/>}/>
      <Route path="/assign-role" element={<AssignRole/>}/>
    </Routes>
  )
}

export default SuperAdminRoutes