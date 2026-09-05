import ClassForm from './ClassForm'
import Popup from '../../components/Layout/Popup'
import { useEffect, useReducer, useState } from 'react'
import Button from '../../components/form/Button'
import api from '../../api/config'
import { Eye, PenSquare, Trash } from 'lucide-react'
import { showToast } from '../../helper/toast-utility'
import { formatDate } from '../../helper'

const reducer = (state, action) => {
  switch (action.type) {
    case "VIEW":
      return { contentType: "view", data: action.payload };

    case "EDIT":
      return { contentType: "edit", data: action.payload };

    case "DELETE":
      return { contentType: "delete", data: action.payload };

    default:
      return state;
  }
};

const Class = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [classList, setClassList] = useState([])
  // const [userList, setUserList] = useState(null)
  const [isClassPopup, setIsClassPopup] = useState(false)

  const [state, dispatch] = useReducer(reducer, null);

  const fetchClass = async () => {
    try {
      const response = await api.get('/admin/classes?isActive=true')
      console.log('response', response.data)
      setClassList(response.data.classes || [])
    } catch (error) {
      console.log('Fetch classes error:', error)
    }
  };

  const deactivateClass = async (id) => {
    try {
      const response = await api.patch(`/admin/classes/${id}/deactivate`)

      showToast("success", "class deactivate successfully")

      await fetchClass(response.data.classes);

      setIsClassPopup(false);
    } catch (error) {
      showToast(error)
    }
  }

  useEffect(() => {
    fetchClass()
  }, [])

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          Classes
        </h2>

        <Button
          type="button"
          onClick={() => setShowPopup(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Class
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {classList.map((data, index) => (
          <div
            key={data._id}
            className="bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition-shadow duration-200"
          >

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {data.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Class
                  </p>
                </div>
              </div>
            </div>


            <div className="space-y-3">

              <div className="flex justify-between bg-gray-500 rounded-lg px-3 py-2">
                <span className="text-gray-50">
                  Code
                </span>

                <span className="font-medium text-gray-50">
                  {data.code}
                </span>
              </div>

              <div className="bg-gray-500 rounded-lg px-3 py-2">

                <p className="text-gray-50 mb-1">
                  Location
                </p>

                <div className="flex gap-4 text-sm">
                  <span>
                    <strong>Lat:</strong>{" "}
                    {data.location?.lat}
                  </span>

                  <span>
                    <strong>Lng:</strong>{" "}
                    {data.location?.lng}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-gray-100 flex justify-end gap-2">
              <button
                onClick={() => {
                  setIsClassPopup(true);
                  dispatch({ type: "VIEW", payload: data });
                }}
                className="px-2 bg-mauve-600"
              >
                <Eye />
              </button>

              <button
                className="px-2 bg-mauve-600"
                onClick={() => {
                  setIsClassPopup(true);
                  dispatch({ type: "EDIT", payload: data });
                }}
              >
                <PenSquare />
              </button>

              <button
                className="px-2 bg-mauve-600"
                onClick={() => {
                  setIsClassPopup(true);
                  dispatch({ type: "DELETE", payload: data });
                }}
              >
                <Trash />
              </button>

            </div>
          </div>
        ))}
      </div>

      {showPopup && (
        <Popup onClose={setShowPopup}>
          <ClassForm
            onClose={() => {
              setShowPopup(false)
            }}
            fetchClass={fetchClass}
          />
        </Popup>
      )}

      {isClassPopup && state && (
        <Popup onClose={setIsClassPopup}>

          {state.contentType === "view" ? (

            <>

              {/* Details */}
              <div className="p-6 space-y-5">

                {/* Class Name */}
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Class Name
                  </p>

                  <p className="inline-block px-3 py-1.5 rounded-lg  bg-gray-100 text-gray-800">
                    {state.data.name}
                  </p>
                </div>

                {/* Code */}
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Class Code
                  </p>

                  <span className="inline-block px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 font-medium">
                    {state.data.code}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Created At</p>

                  <p className="bg-gray-100 rounded-lg p-4 mb-2 text-gray-700 font-medium ">
                    {formatDate(state.data.createdAt)}
                  </p>
                </div>


                {/* Location */}
                <div>
                  <p className="text-sm text-gray-500 mb-3">
                    Location
                  </p>

                  <div className="grid grid-cols-2 gap-4">

                    {/* Longitude */}
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                      <p className="text-xs text-gray-500 mb-1">
                        Longitude
                      </p>

                      <p className="font-semibold text-gray-800">
                        {state.data.location?.lng}
                      </p>
                    </div>

                    {/* Latitude */}
                    <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                      <p className="text-xs text-gray-500 mb-1">
                        Latitude
                      </p>

                      <p className="font-semibold text-gray-800">
                        {state.data.location?.lat}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Schedule */}
                <div>
                  <p className="text-sm text-gray-500 mb-3">
                    Class Schedule
                  </p>

                  <div className="space-y-3">
                    {state.data.schedule?.length > 0 ? (
                      state.data.schedule.map((schedule, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-3 gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4"
                        >

                          {/* Day */}
                          <div>
                            <p className="text-xs text-gray-500 mb-1">
                              Day
                            </p>

                            <p className="font-semibold text-gray-800">
                              {schedule.day}
                            </p>
                          </div>

                          {/* Start Time */}
                          <div>
                            <p className="text-xs text-gray-500 mb-1">
                              Start Time
                            </p>

                            <p className="font-semibold text-gray-800">
                              {schedule.startTime}
                            </p>
                          </div>

                          {/* End Time */}
                          <div>
                            <p className="text-xs text-gray-500 mb-1">
                              End Time
                            </p>

                            <p className="font-semibold text-gray-800">
                              {schedule.endTime}
                            </p>
                          </div>

                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500">
                        No schedule available.
                      </p>
                    )}
                  </div>
                </div>

                {/* Students List */}
                <div className="mt-6">

                  <p className="text-sm text-gray-500 mb-3">
                    Students in this Class
                  </p>

                  {state.data.students?.length > 0 ? (

                    <div className="space-y-3">

                      {state.data.students.map((student, index) => (

                        <div
                          key={student._id || index}
                          className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl p-4"
                        >

                          {/* Student Info */}
                          <div className="flex items-center gap-3">

                            {/* Serial Number */}
                            <div
                              className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold"
                            >
                              {index + 1}
                            </div>

                            <div>
                              <p className="font-semibold text-gray-800">
                                {student.name}
                              </p>

                              <p className="text-sm text-gray-500">
                                {student.email}
                              </p>
                            </div>

                          </div>

                          {/* Student ID */}
                          <span className="text-xs text-gray-500">
                            {student._id}
                          </span>

                        </div>

                      ))}

                    </div>

                  ) : (

                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-center">
                      <p className="text-gray-500">
                        No students added to this class.
                      </p>
                    </div>

                  )}

                </div>

              </div>
            </>

          ) : state.contentType === "edit" ? (

            <ClassForm
              onClose={setIsClassPopup}
              isUpdate={true}
              data={state.data}
              fetchClass={fetchClass}
            />

          ) : (

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Delete Class
              </h2>

              <div className="bg-gray-500 rounded-lg p-4 mb-5">

                <p className="font-semibold">
                  Class: {state.data.name}
                </p>

                <p className="font-semibold">
                  Code: {state.data.code}
                </p>

              </div>

              <div className="flex gap-3 mt-5">

                <Button onClick={() => setIsClassPopup(false)}>
                  Cancel
                </Button>

                <Button
                  primary={true}
                  onClick={() => deactivateClass(state.data._id)}
                >
                  Delete
                </Button>

              </div>
            </div>

          )}

        </Popup>
      )}

    </>
  )
}

export default Class;







