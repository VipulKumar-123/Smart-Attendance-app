import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import api from '../../api/config';
import { showToast } from '../../helper/toast-utility';
import Button from '../../components/form/Button';
import useMyLocation from '../../helper/useMyLocation';
// import Popup from '../../components/Layout/Popup';
import { Trash } from 'lucide-react';
import Modal from '../../components/popup/Modal';

const SingleClass = ({ onClose }) => {

  const { classid, type } = useParams();
  const [classData, setClassData] = useState(null)
  const [sessionDetails, setSessionDetails] = useState(null)
  const [studentList, setStudentList] = useState(null)
  const [showPopup, setShowPopup] = useState(false)



  const fetchClassById = async (id) => {
    try {
      const res = await api.get(`/teacher/classes/${id}`)
      setClassData(res.data.class)
    } catch (error) {
      console.log(error);
    }
  }


  const generateQRCode = async (id) => {
    const location = await useMyLocation();


    const requestBody = {
      classId: id,
      // useMyCurrentLocation:true,
      lat: location.latitude,
      lng: location.longitude
    };


    try {
      const res = await api.post("/attendance/sessions", requestBody)
      console.log(res.data);
      setSessionDetails(res.data)
    } catch (error) {
      showToast("failed", "Error generating QR Code")
    }
  };


  const closeSession = async (id) => {
    try {
      await api.patch(`/attendance/sessions/${id}/close`);
      showToast("success", "session Close succesfully");
      setSessionDetails(null)
    } catch (error) {
      showToast("failed", "Failed to Close session")
    }
  }





  const fetchStudentList = async (id = classid) => {
    try {
      const res = await api.get(
        `/teacher/classes/${id}`)
      const students = res.data?.class?.students || [];
      setStudentList(students);
    } catch (error) {
      console.log(error)
      showToast("Error", "Unsuccessful fetch student");
    }



  };


  // const addStudentList = async (id) => {
  //   try {
  //     console.log("Function called");
  //     console.log("ID:", id);

  //     const res = await api.patch(
  //       `/teacher/classes/${id}/students/add`
  //     );

  //     console.log("PATCH response:", res.data);
  //     showToast("success", "Successfully added student");
  //   } catch (error) {
  //     showToast("error", "Failed to add student");
  //   }
  // };


  const deactivateStudent = async (studentId) => {
    try {
      console.log("Remove student", studentId);
      const res = await api.patch(`/teacher/classes/${classid}/students/remove`, { studentId: studentId, });
      console.log("Remove response", res.data);
      fetchStudentList(studentId)
      showToast("success", "Student removed successfully");
    } catch (error) {
      console.log("error", "student not deactivate")
    }

  }


  useEffect(() => {
    fetchClassById(classid)
    fetchStudentList()


  }, [classid])

  return (

    <div className='bg-mauve-800 p-8 rounded-md mt-10'>
      {classData && (
        <div>
          <h2 className='mb-4'>{classData.name}</h2>
          <Button onClick={() => generateQRCode(classid)}>
            Generate OR
          </Button>

          {" "}

          <Button onClick={() => {
            fetchStudentList()
            setShowPopup(true)
          }}>Student</Button>

        </div>
      )}


      {sessionDetails ? (
        <div className="p-6 bg-mauve-700">
          <p> Session Date :{sessionDetails.session.sessionDate}</p>
          <p> Session Expiry :{sessionDetails.session.expiresAt}</p>
          <img src={sessionDetails.qr.dataUrl} alt="qr" />
          <Button onClick={() => closeSession(sessionDetails.session._id)}>Close Session</Button>
        </div>
      ) : (
        <p>No active session</p>
      )}


      {showPopup &&
        (<Modal onClose={setShowPopup}>
          <div className="px-5 text-amber-100">
            <h2>Student List</h2>
          </div>
          {studentList.length > 0 ? (
            <table className="w-full mt-4">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-5 py-3 text-left"> Id </th>
                  <th className="px-5 py-3 text-left"> Name </th>
                  <th className="px-5 py-3 text-left"> Email </th>
                  <th className="px-5 py-3 text-left"> Deactivate </th>
                </tr>
              </thead>
              <tbody>
                {studentList.map((student, index) => (
                  <tr key={student._id || index} className="border-b border-gray-200 transition duration-200 hover:bg-indigo-50" >

                    <td className="px-5 py-4 text-sm font-semibold text-indigo-950">
                      {index + 1}
                    </td>
                    <td className="px-5 py-4 text-sm font-semibold text-gray-800">
                      {student.name}
                    </td>
                    <td className="px-5 py-4 text-sm text-gray-500">
                      {student.email}
                    </td>
                    <td className="px-5 py-4">
                      <button type="button" onClick={() => {
                        deactivateStudent(student._id)

                      }} className="text-red-500 hover:text-red-700" > <Trash size={20} />
                      </button>
                    </td>
                  </tr>))}
              </tbody>
            </table>
          ) : (
            <div className="text-center py-5">
              No students found
            </div>
          )}
        </Modal>
        )}

    </div>
  )
}

export default SingleClass;