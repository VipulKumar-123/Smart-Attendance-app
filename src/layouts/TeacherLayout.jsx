import React from 'react'
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import { Outlet } from 'react-router';

const TeacherLayout = () => {
  const TeacherRouter = [
    { url: "/admin", linkText: "Dashboard", icon: "gauge" },
    { url: "/teacher/student", linkText: "Student", icon: "id-card" },
    { url: "/teacher/classes", linkText: "Class", icon: "pc-case" },


  ]


  return (
    <>
      <Navbar routes={TeacherRouter} />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default TeacherLayout;