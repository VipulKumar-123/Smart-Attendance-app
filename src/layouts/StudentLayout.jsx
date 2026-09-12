import React from 'react'
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import { Outlet } from 'react-router';

const StudentLayout = () => {
  const StudentRouter = [
    { url: "/student", linkText: "Dashboard", icon: "gauge" },
    { url: "/student/mark", linkText: "Mark Attendence", icon: "list-todo" },
    { url: "/student/my-attendance", linkText: "my Attendance", icon: "user-check" },

  ]


  return (
    <>
      <Navbar routes={StudentRouter} />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default StudentLayout;
