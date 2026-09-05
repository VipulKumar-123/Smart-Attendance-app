// // // import React, { useEffect, useState } from 'react'
// // // import FormInput from '../../components/form/FormInput'
// // // import Button from '../../components/form/Button'
// // // import api from '../../api/config'
// // // import { showToast } from '../../helper/toast-utility'

// // // const days = [
// // //     { value: "Mon", text: "Monday" },
// // //     { value: "Tue", text: "Tuesday" },
// // //     { value: "Wed", text: "Wednesday" },
// // //     { value: "Thu", text: "Thursday" },
// // //     { value: "Fri", text: "Friday" },
// // //     { value: "Sat", text: "Saturday" },
// // //     { value: "Sun", text: "Sunday" }]

// // // const ClassForm = ({ onClose, isUpdate, data, fetchClass }) => {
// // //     const initialData = {
// // //         name: '',
// // //         code: '',
// // //         location: {
// // //             lat: '',
// // //             lng: ''
// // //         },
// // //         role: ''
// // //     }

// // //     const [classData, setClassData] = useState(initialData)
// // //     const [studentList, setStudentList] = useState(null)
// // //     const [selectedStudent, setSelectedStudent] = useState("");

// // //     const handleInputs = (e) => {
// // //         const { name, value } = e.target
// // //         if (name === 'lat' || name === 'lng') {
// // //             setClassData((prev) => ({
// // //                 ...prev,
// // //                 location: {
// // //                     ...prev.location,
// // //                     [name]: value
// // //                 }
// // //             }))
// // //         } else {
// // //             setClassData((prev) => ({
// // //                 ...prev,
// // //                 [name]: value
// // //             }))
// // //         }
// // //     }

// // //     // [{day:" ",startTime:"",endTime:""}]
// // //     const daysInit = { day: "Mon", startTime: "09:00", endTime: "10:30" }
// // //     const [schedule, setSchedule] = useState([daysInit]);

// // //     const addNewScheduleItem = (e) => {
// // //         e.preventDefault();
// // //         if (schedule.length < 7) {
// // //             setSchedule((prev) => [...prev, daysInit]);
// // //         }
// // //     };


// // //     const handleSchedule = (i, name, value) => {
// // //         const arr = [...schedule];
// // //         arr[i] = { ...arr[i], [name]: value };
// // //         setSchedule(arr);
// // //     }

// // //     const addClass = async (e) => {
// // //         e.preventDefault();

// // //         try {
// // //             const requestBody = {
// // //                 ...classData,
// // //                 location: {
// // //                     lat: Number(classData.location.lat),
// // //                     lng: Number(classData.location.lng)
// // //                 },
// // //                 schedule
// // //             };

// // //             console.log("Sending data:", requestBody);
// // //             const response = await api.post("/admin/classes", requestBody);
// // //             console.log("Response:", response.data);
// // //             showToast("success", "Class added successfully!");
// // //             setClassData(initialData);
// // //             setSchedule([daysInit]);
// // //             fetchClass();
// // //             onClose(false);

// // //         } catch (error) {
// // //             console.log(error);
// // //             showToast("error", "Failed to add class!");
// // //         }
// // //     };




// // //     const UpdateClass = async (e) => {
// // //         e.preventDefault();
// // //         // let requestBody2 ={...formData,schedule};
// // //         try {
// // //             const response = await api.put(`/admin/classes/${classData._id}?isActive=true`, classData);
// // //             fetchClass(response.data.class._id)
// // //             showToast("success", "Class Update Successfully")
// // //             onClose(false)
// // //             console.log(response.data.class._id)

// // //         } catch (error) {
// // //             console.log(error)
// // //         }
// // //     };



// // //     // const handleAddClass = async (e) => {
// // //     //     e.preventDefault();
// // //     //     let requestBody = { ...formData, schedule };
// // //     //     console.log(requestBody);
// // //     //     try {
// // //     //         const response = await api.post("/admin/classes", requestBody)
// // //     //     } catch (error) {

// // //     //     }
// // //     // }




// // //     const addStudentToClass = async (id, studentId) => {
// // //         try {
// // //             await api.patch(`/admin/classes/${id}/students/add`, { studentId: studentId });
// // //             showToast("succes", "Student added to Class!")
// // //         } catch (error) {
// // //             console.log(error);
// // //             showToast("error", error.message)
// // //         }
// // //     };

// // //     useEffect(() => {
// // //         fetchClass();
// // //     }, []);


// // //     const fetchStudents = async (role = "student", isActive = true) => {
// // //         {/* use query parameters for add roles in list teacher or student */ }
// // //         try {
// // //             const response = await api.get(`/admin/users?role=${role}&isActive=${isActive}`,);
// // //             setStudentList(response.data.users);
// // //         } catch (error) {
// // //             console.log(error);
// // //         }
// // //     };

// // //     useEffect(() => {
// // //         if (isUpdate) {
// // //             fetchStudents();
// // //             setClassData(data)
// // //             setSchedule(data.schedule || [daysInit]);
// // //         }
// // //     }, [isUpdate, data])


// // //     return (
// // //         <>
// // //             <h2 className="text-xl font-semibold">
// // //                 {isUpdate ? "Update Class" : "  Classe"}
// // //             </h2>

// // //             <div className="py-4">
// // //                 <form>


// // //                     <FormInput
// // //                         label="Name"
// // //                         name="name"
// // //                         value={classData.name}
// // //                         onChange={handleInputs}
// // //                     />

// // //                     <FormInput
// // //                         label="Code"
// // //                         name="code"
// // //                         value={classData.code}
// // //                         onChange={handleInputs}
// // //                     />


// // //                     {!isUpdate && (
// // //                         <>


// // //                             <FormInput
// // //                                 label="Latitude"
// // //                                 name="lat"
// // //                                 type="number"
// // //                                 value={classData.location.lat}
// // //                                 onChange={handleInputs}
// // //                             />

// // //                             <FormInput
// // //                                 label="Longitude"
// // //                                 name="lng"
// // //                                 type="number"
// // //                                 value={classData.location.lng}
// // //                                 onChange={handleInputs}
// // //                             />

// // //                             <div className='flex flex-col'>
// // //                                 <label> Class Schedule</label>
// // //                                 {schedule.map((sched, i) => (
// // //                                     <div key={i} className='flex gap-3 items-center'>
// // //                                         <select value={sched.day}

// // //                                             onChange={(e) => handleSchedule(i, "day", e.target.value)}
// // //                                             className='bg-mauve-800 text-white'>
// // //                                             {days.map((day) => (
// // //                                                 <option key={day.value} value={day.value}> {day.text}</option>
// // //                                             ))}
// // //                                         </select>
// // //                                         <div className='ms-auto flex gap-3 items-center'>
// // //                                             <FormInput type='time' name='startTime' value={sched.startTime} onChange={(e) => handleSchedule(i, "startTime", e.target.value)} />
// // //                                             <FormInput type='time' name='endTime' value={sched.endTime} onChange={(e) => handleSchedule(i, "endTime", e.target.value)} />
// // //                                         </div>
// // //                                     </div>
// // //                                 ))}
// // //                                 <Button onClick={addNewScheduleItem}>Add Schedule</Button>
// // //                             </div>

// // //                             <div className='py-5 flex  gap-5'>
// // //                                 {
// // //                                     studentList &&
// // //                                     <select className='bg-mauve-700' onChange={(e) => setSelectedStudent(e.target.value)}>
// // //                                         {studentList.map((student) => (
// // //                                             <option key={student._id} value={student._id}>
// // //                                                 {student.name}
// // //                                             </option>
// // //                                         ))}
// // //                                     </select>
// // //                                 }
// // //                                 <Button type="button" onClick={() => addStudentToClass(data._id, selectedStudent)}>Add Student</Button>
// // //                             </div>
// // //                             {isUpdate ? (
// // //                                 <Button primary={true} onClick={UpdateClass}>
// // //                                     Update Class
// // //                                 </Button>

// // //                             ) : (
// // //                                 <Button onClick={isUpdate ? (UpdateClass) : addClass} >
// // //                                     {isUpdate ? "Update Class" : "Add Class"}
// // //                                 </Button>
// // //                             )}

// // //                         </>
// // //                     )}
// // //                 </form>
// // //             </div>
// // //         </>
// // //     )
// // // }

// // // export default ClassForm;














// // import React, { useEffect, useState } from "react";
// // import FormInput from "../../components/form/FormInput";
// // import Button from "../../components/form/Button";
// // import api from "../../api/config";
// // import { showToast } from "../../helper/toast-utility";

// // const days = [
// //     { value: "Mon", text: "Monday" },
// //     { value: "Tue", text: "Tuesday" },
// //     { value: "Wed", text: "Wednesday" },
// //     { value: "Thu", text: "Thursday" },
// //     { value: "Fri", text: "Friday" },
// //     { value: "Sat", text: "Saturday" },
// //     { value: "Sun", text: "Sunday" },
// // ];
// // const ClassForm = ({ onClose, isUpdate, data, fetchClass }) => {
// //     const initialData = {
// //         name: "",
// //         code: "",
// //         location: {
// //             lat: "",
// //             lng: "",
// //         },
// //         role: "",
// //     };
// //     const daysInit = {
// //         day: "Mon",
// //         startTime: "09:00",
// //         endTime: "10:30",
// //     };


// //     const [classData, setClassData] = useState(initialData);
// //     const [studentList, setStudentList] = useState([]);
// //     const [selectedStudent, setSelectedStudent] = useState("");
// //     const [classStudents, setClassStudents] = useState([]);
// //     const [schedule, setSchedule] = useState([daysInit]);
// //     const [loading, setLoading] = useState(false);
// //     const [teacher,setTeacher]=useState(null)



// //     const handleInputs = (e) => {
// //         const { name, value } = e.target;

// //         if (name === "lat" || name === "lng") {

// //             setClassData((prev) => ({
// //                 ...prev,

// //                 location: {
// //                     ...prev.location,
// //                     [name]: value,
// //                 },
// //             }));

// //         } else {

// //             setClassData((prev) => ({
// //                 ...prev,
// //                 [name]: value,
// //             }));

// //         }
// //     };



// //     const addNewScheduleItem = (e) => {
// //         e.preventDefault();
// //         if (schedule.length < 7) {
// //             setSchedule((prev) => [
// //                 ...prev,
// //                 {
// //                     day: days.find(
// //                         (item) => !prev.some(
// //                             (scheduleItem) =>
// //                                 scheduleItem.day === item.value
// //                         )
// //                     )?.value || "Mon",
// //                     startTime: "09:00",
// //                     endTime: "10:30",
// //                 },
// //             ]);
// //         }
// //     };
// //     const handleSchedule = (index, name, value) => {

// //         setSchedule((prev) => {

// //             const updated = [...prev];

// //             updated[index] = {
// //                 ...updated[index],
// //                 [name]: value,
// //             };
// //             return updated;
// //         });
// //     };



// //     const fetchStudents = async () => {

// //         try {

// //             const response = await api.get(
// //                 "/admin/users?role=student&isActive=true"
// //             );

// //             console.log("Students API response:", response.data);

// //             setStudentList(response.data?.users || []);

// //         } catch (error) {

// //             console.log("Fetch students error:", error);

// //             showToast(
// //                 "error",
// //                 error.response?.data?.message ||
// //                 "Failed to fetch students"
// //             );
// //         }
// //     };


// //     const fetchTeacher = async () => {

// //         try {

// //             const response = await api.get(
// //                 `/admin/users?role=${role}&isActive=${IsActive}`            );

// //             console.log("Students API response:", response.data);

// //             setStudentList(response.data?.users || []);

// //         } catch (error) {

// //             console.log("Fetch students error:", error);

// //             showToast(
// //                 "error",
// //                 error.response?.data?.message ||
// //                 "Failed to fetch students"
// //             );
// //         }
// //     };

// //     const fetchClassStudents = async (classId) => {
// //         if (!classId) return;
// //         try {
// //             if (data?.students) {
// //                 setClassStudents(data.students);
// //             }

// //         } catch (error) {
// //             console.log("Fetch class students error:", error);
// //         }
// //     };



// //     const addStudentToClass = async (classId, studentId) => {
// //         if (!classId) {
// //             showToast(
// //                 "error",
// //                 "Class ID is missing"
// //             );
// //             return false;
// //         }
// //         if (!studentId) {
// //             showToast(
// //                 "error", "Please select a student"
// //             );
// //             return false;
// //         }
// //         try {
// //             console.log("Adding student:", {
// //                 classId, studentId,
// //             });
// //             const response = await api.patch(
// //                 `/admin/classes/${classId}/students/add`,
// //                 { studentId: studentId, }
// //             );
// //             console.log(
// //                 "Add student response:",
// //                 response.data
// //             );
// //             showToast(
// //                 "success",
// //                 "Student added to Class!"
// //             );

// //             await fetchClass();
// //             if (response.data?.class?.students) {
// //                 setClassStudents(
// //                     response.data.class.students
// //                 );
// //             }
// //             // Clear selection
// //             setSelectedStudent("");
// //             return true;
// //         } catch (error) {
// //             console.log(
// //                 "Add student error:",
// //                 error
// //             );
// //             showToast(
// //                 "error",
// //                 error.response?.data?.message ||
// //                 "Failed to add student"
// //             );

// //             return false;
// //         }
// //     };



// //      const assignTeacherToClass = async (classId, teacherId) => {
// //         if (!classId) {
// //             showToast(
// //                 "error",
// //                 "Class ID is missing"
// //             );
// //             return false;
// //         }
// //         if (!studentId) {
// //             showToast(
// //                 "error", "Please select a student"
// //             );
// //             return false;
// //         }
// //         try {
// //             console.log("Adding student:", {
// //                 classId, studentId,
// //             });
// //             const response = await api.patch(
// //                 `/admin/classes/${classId}/assign-teacher`,
// //                 { teacherId: teacherId, }
// //             );
// //             console.log(
// //                 "Add student response:",
// //                 response.data
// //             );
// //             showToast(
// //                 "success",
// //                 "Student added to Class!"
// //             );

// //             await fetchClass();
// //             if (response.data?.class?.students) {
// //                 setClassStudents(
// //                     response.data.class.students
// //                 );
// //             }
// //             // Clear selection
// //             setSelectedStudent("");
// //             return true;
// //         } catch (error) {
// //             console.log(
// //                 "Add student error:",
// //                 error
// //             );
// //             showToast(
// //                 "error",
// //                 error.response?.data?.message ||
// //                 "Failed to add student"
// //             );

// //             return false;
// //         }
// //     };


// //     const addClass = async (e) => {

// //         e.preventDefault();

// //         try {
// //             setLoading(true);
// //             const requestBody = {
// //                 ...classData,
// //                 location: {
// //                     lat: Number(
// //                         classData.location.lat),
// //                     lng: Number(classData.location.lng
// //                     ),
// //                 },
// //                 schedule,
// //             };
// //             console.log(
// //                 "Creating class:",
// //                 requestBody
// //             );

// //             const response = await api.post(
// //                 "/admin/classes",
// //                 requestBody
// //             );

// //             console.log(
// //                 "Create class response:",
// //                 response.data
// //             );
// //             const createdClass =
// //                 response.data?.class ||
// //                 response.data?.data;
// //             const classId =
// //                 createdClass?._id;
// //             if (!classId) {
// //                 console.log(
// //                     "No class ID returned:",
// //                     response.data
// //                 );
// //                 showToast(
// //                     "error", "Class created but class ID was not returned"
// //                 );
// //                 return;
// //             }
// //             showToast(
// //                 "success", "Class added successfully!"
// //             );
// //             if (selectedStudent) {
// //                 await addStudentToClass(
// //                     classId,
// //                     selectedStudent
// //                 );
// //             }
// //             // Refresh classes
// //             await fetchClass();
// //             // Reset form
// //             setClassData(initialData);

// //             setSchedule([
// //                 daysInit
// //             ]);

// //             setSelectedStudent("");


// //             // Close popup
// //             onClose(false);

// //         } catch (error) {

// //             console.log(
// //                 "Add class error:",
// //                 error
// //             );

// //             showToast(
// //                 "error",
// //                 error.response?.data?.message ||
// //                 "Failed to add class!"
// //             );

// //         } finally {

// //             setLoading(false);

// //         }
// //     };




// //     const UpdateClass = async (e) => {

// //         e.preventDefault();

// //         try {

// //             setLoading(true);

// //             const requestBody = {
// //                 ...classData,
// //                 schedule,
// //             };

// //             console.log(
// //                 "Updating class:",
// //                 requestBody
// //             );

// //             const response = await api.put(
// //                 `/admin/classes/${classData._id}?isActive=true`,
// //                 requestBody
// //             );

// //             console.log(
// //                 "Update response:",
// //                 response.data
// //             );




// //             if (selectedStudent) {

// //                 await addStudentToClass(
// //                     classData._id,
// //                     selectedStudent
// //                 );

// //             }


// //             await fetchClass();

// //             showToast(
// //                 "success",
// //                 "Class Updated Successfully"
// //             );

// //             onClose(false);

// //         } catch (error) {

// //             console.log(
// //                 "Update class error:",
// //                 error
// //             );

// //             showToast(
// //                 "error",
// //                 error.response?.data?.message ||
// //                 "Failed to update class"
// //             );

// //         } finally {

// //             setLoading(false);

// //         }
// //     };




// //     useEffect(() => {
// //         fetchStudents();
// //         fetchTeacher();


// //     }, []);




// //     useEffect(() => {
// //         if (isUpdate && data) {
// //             console.log(
// //                 "Editing class:",
// //                 data
// //             );
// //             setClassData(data);
// //             setSchedule(
// //                 data.schedule?.length
// //                     ? data.schedule
// //                     : [daysInit]
// //             );
// //             setClassStudents(
// //                 data.students || []
// //             );

// //         } else {
// //             setClassData(initialData);
// //             setSchedule([
// //                 daysInit
// //             ]);
// //             setClassStudents([]);
// //         }
// //     }, [isUpdate, data]);



// //     return (
// //         <>
// //             <h2 className="text-xl font-semibold">
// //                 {isUpdate
// //                     ? "Update Class"
// //                     : "Add Class"}
// //             </h2>


// //             <div className="py-4">

// //                 <form>

// //                     {/* CLASS NAME */}

// //                     <FormInput
// //                         label="Name"
// //                         name="name"
// //                         value={classData.name}
// //                         onChange={handleInputs}
// //                     />


// //                     {/* CLASS CODE */}

// //                     <FormInput
// //                         label="Code"
// //                         name="code"
// //                         value={classData.code}
// //                         onChange={handleInputs}
// //                     />


// //                     {/* LOCATION */}

// //                     <FormInput
// //                         label="Latitude"
// //                         name="lat"
// //                         type="number"
// //                         value={
// //                             classData.location?.lat || ""
// //                         }
// //                         onChange={handleInputs}
// //                     />


// //                     <FormInput
// //                         label="Longitude"
// //                         name="lng"
// //                         type="number"
// //                         value={
// //                             classData.location?.lng || ""
// //                         }
// //                         onChange={handleInputs}
// //                     />


// //                     {/* SCHEDULE */}


// //                     <div className="flex flex-col ">

// //                         <label>
// //                             Class Schedule
// //                         </label>

// //                         <div className="overflow-auto ">
// //                             {schedule.map(
// //                                 (sched, i) => (

// //                                     <div
// //                                         key={i}
// //                                         className="flex gap-3 items-center"
// //                                     >

// //                                         <select
// //                                             value={sched.day}
// //                                             onChange={(e) =>
// //                                                 handleSchedule(
// //                                                     i,
// //                                                     "day",
// //                                                     e.target.value
// //                                                 )
// //                                             }
// //                                             className="bg-mauve-800 text-white"
// //                                         >

// //                                             {days.map(
// //                                                 (day) => (

// //                                                     <option
// //                                                         key={day.value}
// //                                                         value={day.value}
// //                                                     >
// //                                                         {day.text}
// //                                                     </option>

// //                                                 )
// //                                             )}

// //                                         </select>






// //                                         <div className="ms-auto flex gap-3 items-center">

// //                                             <FormInput
// //                                                 type="time"
// //                                                 name="startTime"
// //                                                 value={
// //                                                     sched.startTime
// //                                                 }
// //                                                 onChange={(e) =>
// //                                                     handleSchedule(
// //                                                         i,
// //                                                         "startTime",
// //                                                         e.target.value
// //                                                     )
// //                                                 }
// //                                             />


// //                                             <FormInput
// //                                                 type="time"
// //                                                 name="endTime"
// //                                                 value={
// //                                                     sched.endTime
// //                                                 }
// //                                                 onChange={(e) =>
// //                                                     handleSchedule(
// //                                                         i,
// //                                                         "endTime",
// //                                                         e.target.value
// //                                                     )
// //                                                 }
// //                                             />

// //                                         </div>

// //                                     </div>

// //                                 )

// //                             )}
// //                         </div>


// //                         <Button
// //                             type="button"
// //                             onClick={
// //                                 addNewScheduleItem
// //                             }
// //                         >
// //                             Add Schedule
// //                         </Button>

// //                     </div>


// //                     {/* STUDENT SECTION */}

// //                     <div className="py-5">

// //                         <label className="block mb-2">
// //                             Select Student
// //                         </label>


// //                         <div className="flex gap-5">

// //                             <select
// //                                 className="bg-mauve-700 text-white p-2"
// //                                 value={selectedStudent}
// //                                 onChange={(e) =>
// //                                     setSelectedStudent(
// //                                         e.target.value
// //                                     )
// //                                 }
// //                             >

// //                                 <option value="">
// //                                     Select Student
// //                                 </option>


// //                                 {studentList.map(
// //                                     (student) => (

// //                                         <option
// //                                             key={student._id}
// //                                             value={student._id}
// //                                         >
// //                                             {student.name}
// //                                         </option>

// //                                     )
// //                                 )}

// //                             </select>


// //                             {isUpdate && (
// //                                 <Button
// //                                     type="button"
// //                                     onClick={() =>
// //                                         addStudentToClass(
// //                                             classData._id,
// //                                             selectedStudent
// //                                         )
// //                                     }
// //                                 >
// //                                     Add Student
// //                                 </Button>
// //                             )}

// //                         </div>

// //                     </div>




// // {/* teacher selected */}

// //       <div className="py-5">

// //                         <label className="block mb-2">
// //                             Select Teacher
// //                         </label>


// //                         <div className="flex gap-5">
// // {teacherList && (
// //                             <select
// //                                 className="bg-mauve-700 text-white p-2"
// //                                 value={selectedStudent}
// //                                 onChange={(e) =>
// //                                     assignTeacherToClass(
// //                                         data._id , e.target.value
// //                                     )
// //                                 }
// //                             >



// //                                 {teacherList.map(({_id,name}) => (

// //                                         <option
// //                                             key={_id}
// //                                             value={_id}
// //                                         >
// //                                             {name}
// //                                         </option>

// //                                     )
// //                                 )}

// //                             </select>
// // )}

// //                         </div>

// //                     </div>





// //                     {/* CURRENT STUDENTS */}

// //                     {isUpdate && (

// //                         <div className="py-4">

// //                             <h3 className="font-semibold mb-3">
// //                                 Students in this Class
// //                             </h3>


// //                             {classStudents.length === 0 ? (

// //                                 <p>
// //                                     No students added yet.
// //                                 </p>

// //                             ) : (

// //                                 <div className="space-y-2">

// //                                     {classStudents.map(
// //                                         (student, index) => {

// //                                             /*
// //                                              * Depending on your
// //                                              * backend student object
// //                                              * structure.
// //                                              */

// //                                             const studentData =
// //                                                 student.student ||
// //                                                 student;

// //                                             return (

// //                                                 <div
// //                                                     key={
// //                                                         studentData._id ||
// //                                                         index
// //                                                     }
// //                                                     className="p-2 border rounded"
// //                                                 >

// //                                                     {studentData.name ||
// //                                                         "Student"}

// //                                                 </div>

// //                                             );

// //                                         }
// //                                     )}

// //                                 </div>

// //                             )}

// //                         </div>

// //                     )}


// //                     {/* BUTTON */}

// //                     {isUpdate ? (

// //                         <Button
// //                             type="button"
// //                             primary={true}
// //                             onClick={UpdateClass}
// //                         >
// //                             {loading
// //                                 ? "Updating..."
// //                                 : "Update Class"}
// //                         </Button>

// //                     ) : (

// //                         <Button
// //                             type="button"
// //                             onClick={addClass}
// //                         >
// //                             {loading
// //                                 ? "Adding..."
// //                                 : "Add Class"}
// //                         </Button>

// //                     )}

// //                 </form>

// //             </div>
// //         </>
// //     );
// // };

// // export default ClassForm;



import React, { useEffect, useState } from "react";
import FormInput from "../../components/form/FormInput";
import Button from "../../components/form/Button";
import api from "../../api/config";
import { showToast } from "../../helper/toast-utility";

const days = [
    { value: "Mon", text: "Monday" },
    { value: "Tue", text: "Tuesday" },
    { value: "Wed", text: "Wednesday" },
    { value: "Thu", text: "Thursday" },
    { value: "Fri", text: "Friday" },
    { value: "Sat", text: "Saturday" },
    { value: "Sun", text: "Sunday" },
];

const initialData = {
    name: "",
    code: "",
    location: {
        lat: "",
        lng: "",
    },
    role: "",
};

const daysInit = {
    day: "Mon",
    startTime: "09:00",
    endTime: "10:30",
};

const ClassForm = ({ onClose, isUpdate, data, fetchClass }) => {
   
    const [classData, setClassData] = useState(initialData);

    const [studentList, setStudentList] = useState([]);
    const [teacherList, setTeacherList] = useState([]);

    const [selectedStudent, setSelectedStudent] = useState("");
    const [selectedTeacher, setSelectedTeacher] = useState("");

    const [classStudents, setClassStudents] = useState([]);

    const [schedule, setSchedule] = useState([daysInit]);

    const [loading, setLoading] = useState(false);
    const [studentLoading, setStudentLoading] = useState(false);
    const [teacherLoading, setTeacherLoading] = useState(false);

    

    const handleInputs = (e) => {
        const { name, value } = e.target;

        if (name === "lat" || name === "lng") {
            setClassData((prev) => ({
                ...prev,
                location: {
                    ...prev.location,
                    [name]: value,
                },
            }));
        } else {
            setClassData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

  

    const addNewScheduleItem = (e) => {
        e.preventDefault();

        if (schedule.length >= 7) {
            showToast("error", "Maximum 7 schedule items allowed");
            return;
        }

        const availableDay = days.find(
            (day) =>
                !schedule.some(
                    (scheduleItem) => scheduleItem.day === day.value
                )
        );

        setSchedule((prev) => [
            ...prev,
            {
                day: availableDay?.value || "Mon",
                startTime: "09:00",
                endTime: "10:30",
            },
        ]);
    };

 

    const removeScheduleItem = (index) => {
        if (schedule.length === 1) {
            showToast("error", "At least one schedule is required");
            return;
        }

        setSchedule((prev) =>
            prev.filter((_, scheduleIndex) => scheduleIndex !== index)
        );
    };

  

    const handleSchedule = (index, name, value) => {
        setSchedule((prev) => {
            const updated = [...prev];

            updated[index] = {
                ...updated[index],
                [name]: value,
            };

            return updated;
        });
    };



    const fetchStudents = async () => {
        try {
            setStudentLoading(true);

            const response = await api.get(
                "/admin/users?role=student&isActive=true"
            );

            console.log("Students API response:", response.data);

            setStudentList(response.data?.users || []);
        } catch (error) {
            console.log("Fetch students error:", error);

            showToast(
                "error",
                error.response?.data?.message ||
                    "Failed to fetch students"
            );
        } finally {
            setStudentLoading(false);
        }
    };

  

    const fetchTeacher = async () => {
        try {
            setTeacherLoading(true);

            const response = await api.get(
                "/admin/users?role=teacher&isActive=true"
            );

            console.log("Teachers API response:", response.data);

            setTeacherList(response.data?.users || []);
        } catch (error) {
            console.log("Fetch teachers error:", error);

            showToast(
                "error",
                error.response?.data?.message ||
                    "Failed to fetch teachers"
            );
        } finally {
            setTeacherLoading(false);
        }
    };



    const addStudentToClass = async (classId, studentId) => {
        if (!classId) {
            showToast("error", "Class ID is missing");
            return false;
        }

        if (!studentId) {
            showToast("error", "Please select a student");
            return false;
        }

        try {
            console.log("Adding student:", {
                classId,
                studentId,
            });

            const response = await api.patch(
                `/admin/classes/${classId}/students/add`,
                {
                    studentId,
                }
            );

            console.log(
                "Add student response:",
                response.data
            );

            showToast(
                "success",
                "Student added to Class!"
            );

            // Update students immediately if backend returns them
            if (response.data?.class?.students) {
                setClassStudents(
                    response.data.class.students
                );
            }

            // Refresh classes
            await fetchClass();

            // Clear selection
            setSelectedStudent("");

            return true;
        } catch (error) {
            console.log("Add student error:", error);

            showToast(
                "error",
                error.response?.data?.message ||
                    "Failed to add student"
            );

            return false;
        }
    };


    const assignTeacherToClass = async (
        classId,
        teacherId
    ) => {
        if (!classId) {
            showToast("error", "Class ID is missing");
            return false;
        }

        if (!teacherId) {
            showToast("error", "Please select a teacher");
            return false;
        }

        try {
            console.log("Assigning teacher:", {
                classId,
                teacherId,
            });

            const response = await api.patch(
                `/admin/classes/${classId}/assign-teacher`,
                {
                    teacherId,
                }
            );

            console.log(
                "Assign teacher response:",
                response.data
            );

            showToast(
                "success",
                "Teacher assigned to Class!"
            );

            // Refresh classes
            await fetchClass();

            // Clear selection
            setSelectedTeacher("");

            return true;
        } catch (error) {
            console.log(
                "Assign teacher error:",
                error
            );

            showToast(
                "error",
                error.response?.data?.message ||
                    "Failed to assign teacher"
            );

            return false;
        }
    };


    const addClass = async (e) => {
        e.preventDefault();

        if (loading) return;

        try {
            setLoading(true);

            const requestBody = {
                ...classData,
                location: {
                    lat: Number(classData.location?.lat || 0),
                    lng: Number(classData.location?.lng || 0),
                },
                schedule,
            };

            console.log(
                "Creating class:",
                requestBody
            );

            const response = await api.post(
                "/admin/classes",
                requestBody
            );

            console.log(
                "Create class response:",
                response.data
            );

            const createdClass =
                response.data?.class ||
                response.data?.data;

            const classId = createdClass?._id;

            if (!classId) {
                console.log(
                    "No class ID returned:",
                    response.data
                );

                showToast(
                    "error",
                    "Class created but class ID was not returned"
                );

                return;
            }

            showToast(
                "success",
                "Class added successfully!"
            );

            // Add student after class creation
            if (selectedStudent) {
                await addStudentToClass(
                    classId,
                    selectedStudent
                );
            }

            // If your backend supports assigning a teacher
            // immediately after creation
            if (selectedTeacher) {
                await assignTeacherToClass(
                    classId,
                    selectedTeacher
                );
            }

            // Refresh classes
            await fetchClass();

            // Reset form
            setClassData(initialData);
            setSchedule([daysInit]);
            setSelectedStudent("");
            setSelectedTeacher("");
            setClassStudents([]);

            // Close popup
            onClose(false);
        } catch (error) {
            console.log(
                "Add class error:",
                error
            );

            showToast(
                "error",
                error.response?.data?.message ||
                    "Failed to add class!"
            );
        } finally {
            setLoading(false);
        }
    };

   

    const UpdateClass = async (e) => {
        e.preventDefault();

        if (loading) return;

        if (!classData?._id) {
            showToast(
                "error",
                "Class ID is missing"
            );
            return;
        }

        try {
            setLoading(true);

            const requestBody = {
                ...classData,
                location: {
                    lat: Number(
                        classData.location?.lat || 0
                    ),
                    lng: Number(
                        classData.location?.lng || 0
                    ),
                },
                schedule,
            };

            console.log(
                "Updating class:",
                requestBody
            );

            const response = await api.put(
                `/admin/classes/${classData._id}?isActive=true`,
                requestBody
            );

            console.log(
                "Update response:",
                response.data
            );

            // Add student if one has been selected
            if (selectedStudent) {
                await addStudentToClass(
                    classData._id,
                    selectedStudent
                );
            }

            // Assign teacher if one has been selected
            if (selectedTeacher) {
                await assignTeacherToClass(
                    classData._id,
                    selectedTeacher
                );
            }

            // Refresh classes
            await fetchClass();

            showToast(
                "success",
                "Class Updated Successfully"
            );

            onClose(false);
        } catch (error) {
            console.log(
                "Update class error:",
                error
            );

            showToast(
                "error",
                error.response?.data?.message ||
                    "Failed to update class"
            );
        } finally {
            setLoading(false);
        }
    };

    // -----------------------------
    // INITIAL FETCH
    // -----------------------------

    useEffect(() => {
        fetchStudents();
        fetchTeacher();
    }, []);

    // -----------------------------
    // LOAD CLASS FOR UPDATE
    // -----------------------------

    useEffect(() => {
        if (isUpdate && data) {
            console.log(
                "Editing class:",
                data
            );

            setClassData({
                ...initialData,
                ...data,
                location: {
                    ...initialData.location,
                    ...(data.location || {}),
                },
            });

            setSchedule(
                data.schedule?.length
                    ? data.schedule
                    : [daysInit]
            );

            setClassStudents(
                data.students || []
            );

            // If your API returns teacher/teacherId
            setSelectedTeacher(
                data.teacher?._id ||
                    data.teacherId ||
                    ""
            );

            setSelectedStudent("");
        } else {
            setClassData(initialData);
            setSchedule([daysInit]);
            setClassStudents([]);
            setSelectedStudent("");
            setSelectedTeacher("");
        }
    }, [isUpdate, data]);

    // -----------------------------
    // RENDER
    // -----------------------------

    return (
        <>
            <h2 className="text-xl font-semibold">
                {isUpdate
                    ? "Update Class"
                    : "Add Class"}
            </h2>

            <div className="py-4">
                <form
                    onSubmit={
                        isUpdate
                            ? UpdateClass
                            : addClass
                    }
                >
                    {/* =========================
                        CLASS NAME
                    ========================= */}

                    <FormInput
                        label="Name"
                        name="name"
                        value={classData.name || ""}
                        onChange={handleInputs}
                    />

                    {/* =========================
                        CLASS CODE
                    ========================= */}

                    <FormInput
                        label="Code"
                        name="code"
                        value={classData.code || ""}
                        onChange={handleInputs}
                    />

                    {/* =========================
                        LOCATION
                    ========================= */}

                    <FormInput
                        label="Latitude"
                        name="lat"
                        type="number"
                        value={
                            classData.location?.lat || ""
                        }
                        onChange={handleInputs}
                    />

                    <FormInput
                        label="Longitude"
                        name="lng"
                        type="number"
                        value={
                            classData.location?.lng || ""
                        }
                        onChange={handleInputs}
                    />

                    {/* =========================
                        SCHEDULE
                    ========================= */}

                    <div className="flex flex-col">
                        <label className="mb-2 font-medium">
                            Class Schedule
                        </label>

                        <div className="overflow-auto">
                            {schedule.map(
                                (sched, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-3 items-center mb-3"
                                    >
                                        {/* DAY */}

                                        <select
                                            value={
                                                sched.day
                                            }
                                            onChange={(
                                                e
                                            ) =>
                                                handleSchedule(
                                                    index,
                                                    "day",
                                                    e.target
                                                        .value
                                                )
                                            }
                                            className="bg-mauve-800 text-white p-2"
                                        >
                                            {days.map(
                                                (
                                                    day
                                                ) => (
                                                    <option
                                                        key={
                                                            day.value
                                                        }
                                                        value={
                                                            day.value
                                                        }
                                                    >
                                                        {
                                                            day.text
                                                        }
                                                    </option>
                                                )
                                            )}
                                        </select>

                                        {/* TIME */}

                                        <div className="flex gap-3 items-center">
                                            <FormInput
                                                type="time"
                                                name="startTime"
                                                value={
                                                    sched.startTime ||
                                                    ""
                                                }
                                                onChange={(
                                                    e
                                                ) =>
                                                    handleSchedule(
                                                        index,
                                                        "startTime",
                                                        e
                                                            .target
                                                            .value
                                                    )
                                                }
                                            />

                                            <FormInput
                                                type="time"
                                                name="endTime"
                                                value={
                                                    sched.endTime ||
                                                    ""
                                                }
                                                onChange={(
                                                    e
                                                ) =>
                                                    handleSchedule(
                                                        index,
                                                        "endTime",
                                                        e
                                                            .target
                                                            .value
                                                    )
                                                }
                                            />
                                        </div>

                                        {/* REMOVE */}

                                        {schedule.length >
                                            1 && (
                                            <Button
                                                type="button"
                                                onClick={() =>
                                                    removeScheduleItem(
                                                        index
                                                    )
                                                }
                                            >
                                                Remove
                                            </Button>
                                        )}
                                    </div>
                                )
                            )}
                        </div>

                        {schedule.length < 7 && (
                            <Button
                                type="button"
                                onClick={
                                    addNewScheduleItem
                                }
                            >
                                Add Schedule
                            </Button>
                        )}
                    </div>

                    {/* =========================
                        STUDENT SECTION
                    ========================= */}

                    <div className="py-5">
                        <label className="block mb-2">
                            Select Student
                        </label>

                        <div className="flex gap-5 items-center">
                            <select
                                className="bg-mauve-700 text-white p-2"
                                value={
                                    selectedStudent
                                }
                                onChange={(e) =>
                                    setSelectedStudent(
                                        e.target.value
                                    )
                                }
                                disabled={
                                    studentLoading
                                }
                            >
                                <option value="">
                                    {studentLoading
                                        ? "Loading students..."
                                        : "Select Student"}
                                </option>

                                {studentList.map(
                                    (student) => (
                                        <option
                                            key={
                                                student._id
                                            }
                                            value={
                                                student._id
                                            }
                                        >
                                            {student.name}
                                        </option>
                                    )
                                )}
                            </select>

                            {isUpdate && (
                                <Button
                                    type="button"
                                    onClick={() =>
                                        addStudentToClass(
                                            classData._id,
                                            selectedStudent
                                        )
                                    }
                                >
                                    Add Student
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* =========================
                        TEACHER SECTION
                    ========================= */}

                    <div className="py-5">
                        <label className="block mb-2">
                            Select Teacher
                        </label>

                        <div className="flex gap-5 items-center">
                            <select
                                className="bg-mauve-700 text-white p-2"
                                value={
                                    selectedTeacher
                                }
                                onChange={(e) =>
                                    setSelectedTeacher(
                                        e.target.value
                                    )
                                }
                                disabled={
                                    teacherLoading
                                }
                            >
                                <option value="">
                                    {teacherLoading
                                        ? "Loading teachers..."
                                        : "Select Teacher"}
                                </option>

                                {teacherList.map(
                                    (teacher) => (
                                        <option
                                            key={
                                                teacher._id
                                            }
                                            value={
                                                teacher._id
                                            }
                                        >
                                            {teacher.name}
                                        </option>
                                    )
                                )}
                            </select>

                            {isUpdate && (
                                <Button
                                    type="button"
                                    onClick={() =>
                                        assignTeacherToClass(
                                            classData._id,
                                            selectedTeacher
                                        )
                                    }
                                >
                                    Assign Teacher
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* =========================
                        CURRENT STUDENTS
                    ========================= */}

                    {isUpdate && (
                        <div className="py-4">
                            <h3 className="font-semibold mb-3">
                                Students in this Class
                            </h3>

                            {classStudents.length ===
                            0 ? (
                                <p>
                                    No students added yet.
                                </p>
                            ) : (
                                <div className="space-y-2">
                                    {classStudents.map(
                                        (
                                            student,
                                            index
                                        ) => {
                                            const studentData =
                                                student.student ||
                                                student;

                                            return (
                                                <div
                                                    key={
                                                        studentData._id ||
                                                        index
                                                    }
                                                    className="p-2 border rounded"
                                                >
                                                    {studentData.name ||
                                                        "Student"}
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {/* =========================
                        SUBMIT BUTTON
                    ========================= */}

                    <div className="pt-4">
                        {isUpdate ? (
                            <Button
                                type="submit"
                                primary={true}
                            >
                                {loading
                                    ? "Updating..."
                                    : "Update Class"}
                            </Button>
                        ) : (
                            <Button
                                type="submit"
                                primary={true}
                            >
                                {loading
                                    ? "Adding..."
                                    : "Add Class"}
                            </Button>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
};

export default ClassForm;







// import React, { useEffect, useState } from "react";
// import FormInput from "../../components/form/FormInput";
// import Button from "../../components/form/Button";
// import api from "../../api/config";
// import { showToast } from "../../helper/toast-utility";

// const days = [
//     { value: "Mon", text: "Monday" },
//     { value: "Tue", text: "Tuesday" },
//     { value: "Wed", text: "Wednesday" },
//     { value: "Thu", text: "Thursday" },
//     { value: "Fri", text: "Friday" },
//     { value: "Sat", text: "Saturday" },
//     { value: "Sun", text: "Sunday" },
// ];

// const initialData = {
//     name: "",
//     code: "",
//     location: {
//         lat: "",
//         lng: "",
//     },
// };

// const daysInit = {
//     day: "Mon",
//     startTime: "09:00",
//     endTime: "10:30",
// };

// const ClassForm = ({ onClose, isUpdate = false, data = null, fetchClass,}) => {
    

//     const [classData, setClassData] = useState(initialData);

//     const [studentList, setStudentList] = useState([]);
//     const [teacherList, setTeacherList] = useState([]);

//     const [selectedStudent, setSelectedStudent] = useState("");
//     const [selectedTeacher, setSelectedTeacher] = useState("");

//     const [classStudents, setClassStudents] = useState([]);

//     const [schedule, setSchedule] = useState([daysInit]);

//     const [loading, setLoading] = useState(false);
//     const [studentLoading, setStudentLoading] = useState(false);
//     const [teacherLoading, setTeacherLoading] = useState(false);


//     // =========================
//     // HANDLE INPUTS
//     // =========================

//     const handleInputs = (e) => {
//         const { name, value } = e.target;

//         if (name === "lat" || name === "lng") {
//             setClassData((prev) => ({
//                 ...prev,
//                 location: {
//                     ...prev.location,
//                     [name]: value,
//                 },
//             }));
//         } else {
//             setClassData((prev) => ({
//                 ...prev,
//                 [name]: value,
//             }));
//         }
//     }; 
    
    
//     // =========================
//     // ADD SCHEDULE
//     // =========================

//     const addNewScheduleItem = (e) => {
//         e.preventDefault();

//         if (schedule.length >= 7) {
//             showToast(
//                 "error",
//                 "Maximum 7 schedule items allowed"
//             );
//             return;
//         }

//         const availableDay = days.find(
//             (day) =>
//                 !schedule.some(
//                     (item) => item.day === day.value
//                 )
//         );

//         setSchedule((prev) => [
//             ...prev,
//             {
//                 day: availableDay?.value || "Mon",
//                 startTime: "09:00",
//                 endTime: "10:30",
//             },
//         ]);
//     };


//     // =========================
//     // REMOVE SCHEDULE
//     // =========================

//     const removeScheduleItem = (index) => {
//         if (schedule.length === 1) {
//             showToast(
//                 "error",
//                 "At least one schedule is required"
//             );
//             return;
//         }

//         setSchedule((prev) =>
//             prev.filter(
//                 (_, scheduleIndex) =>
//                     scheduleIndex !== index
//             )
//         );
//     };


//     // =========================
//     // HANDLE SCHEDULE
//     // =========================

//     const handleSchedule = (
//         index,
//         name,
//         value
//     ) => {
//         setSchedule((prev) => {
//             const updated = [...prev];

//             updated[index] = {
//                 ...updated[index],
//                 [name]: value,
//             };

//             return updated;
//         });
//     };


//     // =========================
//     // FETCH STUDENTS
//     // =========================

//     const fetchStudents = async () => {
//         try {
//             setStudentLoading(true);

//             const response = await api.get("/admin/users?role=student&isActive=true");
//             console.log(
//                 "Students:",
//                 response.data
//             );

//             setStudentList(
//                 response.data?.users || []
//             );
//         } catch (error) {
//             console.log(
//                 "Fetch students error:",
//                 error
//             );

//             showToast(
//                 "error",
//                 error.response?.data?.message ||
//                 "Failed to fetch students"
//             );
//         } finally {
//             setStudentLoading(false);
//         }
//     };


//     // =========================
//     // FETCH TEACHERS
//     // =========================

//     const fetchTeachers = async () => {
//         try {
//             setTeacherLoading(true);

//             const response = await api.get(
//                 "/admin/users?role=teacher&isActive=true"
//             );

//             console.log(
//                 "Teachers:",
//                 response.data
//             );

//             setTeacherList(
//                 response.data?.users || []
//             );
//         } catch (error) {
//             console.log(
//                 "Fetch teachers error:",
//                 error
//             );

//             showToast(
//                 "error",
//                 error.response?.data?.message ||
//                 "Failed to fetch teachers"
//             );
//         } finally {
//             setTeacherLoading(false);
//         }
//     };


//     // =========================
//     // ADD STUDENT TO CLASS
//     // =========================

//     const addStudentToClass = async (
//         classId,
//         studentId
//     ) => {
//         if (!classId) {
//             showToast(
//                 "error",
//                 "Class ID is missing"
//             );
//             return false;
//         }

//         if (!studentId) {
//             showToast(
//                 "error",
//                 "Please select a student"
//             );
//             return false;
//         }

//         try {
//             const response = await api.patch(
//                 `/admin/classes/${classId}/students/add`,
//                 {
//                     studentId,
//                 }
//             );

//             console.log(
//                 "Add student response:",
//                 response.data
//             );

//             showToast(
//                 "success",
//                 "Student added to Class!"
//             );

//             if (
//                 response.data?.class?.students
//             ) {
//                 setClassStudents(
//                     response.data.class.students
//                 );
//             }

//             if (fetchClass) {
//                 await fetchClass();
//             }

//             setSelectedStudent("");

//             return true;
//         } catch (error) {
//             console.log(
//                 "Add student error:",
//                 error
//             );

//             showToast(
//                 "error",
//                 error.response?.data?.message ||
//                 "Failed to add student"
//             );

//             return false;
//         }
//     };


//     // =========================
//     // ASSIGN TEACHER
//     // =========================

//     const assignTeacherToClass = async (
//         classId,
//         teacherId
//     ) => {
//         if (!classId) {
//             showToast(
//                 "error",
//                 "Class ID is missing"
//             );
//             return false;
//         }

//         if (!teacherId) {
//             showToast(
//                 "error",
//                 "Please select a teacher"
//             );
//             return false;
//         }

//         try {
//             const response = await api.patch(
//                 `/admin/classes/${classId}/assign-teacher`,
//                 {
//                     teacherId,
//                 }
//             );

//             console.log(
//                 "Assign teacher response:",
//                 response.data
//             );

//             showToast(
//                 "success",
//                 "Teacher assigned to Class!"
//             );

//             if (fetchClass) {
//                 await fetchClass();
//             }

//             setSelectedTeacher("");

//             return true;
//         } catch (error) {
//             console.log(
//                 "Assign teacher error:",
//                 error
//             );

//             showToast(
//                 "error",
//                 error.response?.data?.message ||
//                 "Failed to assign teacher"
//             );

//             return false;
//         }
//     };


//     // =========================
//     // VALIDATE FORM
//     // =========================

//     const validateForm = () => {
//         if (!classData.name.trim()) {
//             showToast(
//                 "error",
//                 "Class name is required"
//             );
//             return false;
//         }

//         if (!classData.code.trim()) {
//             showToast(
//                 "error",
//                 "Class code is required"
//             );
//             return false;
//         }

//         if (
//             classData.location.lat === "" ||
//             classData.location.lng === ""
//         ) {
//             showToast(
//                 "error",
//                 "Latitude and longitude are required"
//             );
//             return false;
//         }

//         if (schedule.length === 0) {
//             showToast(
//                 "error",
//                 "At least one schedule is required"
//             );
//             return false;
//         }

//         return true;
//     };


//     // =========================
//     // ADD CLASS
//     // =========================

//     const addClass = async (e) => {
//         e.preventDefault();

//         if (loading) return;

//         if (!validateForm()) return;

//         try {
//             setLoading(true);

//             const requestBody = {
//                 ...classData,
//                 location: {
//                     lat: Number(
//                         classData.location.lat
//                     ),
//                     lng: Number(
//                         classData.location.lng
//                     ),
//                 },
//                 schedule,
//             };

//             console.log(
//                 "Creating class:",
//                 requestBody
//             );

//             const response = await api.post(
//                 "/admin/classes",
//                 requestBody
//             );

//             console.log(
//                 "Create class response:",
//                 response.data
//             );

//             const createdClass =
//                 response.data?.class ||
//                 response.data?.data ||
//                 response.data?.newClass;

//             const classId =
//                 createdClass?._id;

//             if (!classId) {
//                 showToast(
//                     "error",
//                     "Class created but class ID was not returned"
//                 );
//                 return;
//             }

//             showToast(
//                 "success",
//                 "Class added successfully!"
//             );

//             // Add student
//             if (selectedStudent) {
//                 await addStudentToClass(
//                     classId,
//                     selectedStudent
//                 );
//             }

//             // Assign teacher
//             if (selectedTeacher) {
//                 await assignTeacherToClass(
//                     classId,
//                     selectedTeacher
//                 );
//             }

//             if (fetchClass) {
//                 await fetchClass();
//             }

//             // Reset
//             setClassData(initialData);
//             setSchedule([daysInit]);
//             setSelectedStudent("");
//             setSelectedTeacher("");
//             setClassStudents([]);

//             // Close modal
//             if (onClose) {
//                 onClose(false);
//             }
//         } catch (error) {
//             console.log(
//                 "Add class error:",
//                 error
//             );

//             showToast(
//                 "error",
//                 error.response?.data?.message ||
//                 "Failed to add class!"
//             );
//         } finally {
//             setLoading(false);
//         }
//     };


//     // =========================
//     // UPDATE CLASS
//     // =========================

//     const updateClass = async (e) => {
//         e.preventDefault();

//         if (loading) return;

//         if (!classData?._id) {
//             showToast(
//                 "error",
//                 "Class ID is missing"
//             );
//             return;
//         }

//         if (!validateForm()) return;

//         try {
//             setLoading(true);

//             const requestBody = {
//                 ...classData,
//                 location: {
//                     lat: Number(
//                         classData.location.lat
//                     ),
//                     lng: Number(
//                         classData.location.lng
//                     ),
//                 },
//                 schedule,
//             };

//             console.log(
//                 "Updating class:",
//                 requestBody
//             );

//             const response = await api.put(
//                 `/admin/classes/${classData._id}?isActive=true`,
//                 requestBody
//             );

//             console.log(
//                 "Update response:",
//                 response.data
//             );

//             // Add student
//             if (selectedStudent) {
//                 await addStudentToClass(
//                     classData._id,
//                     selectedStudent
//                 );
//             }

//             // Assign teacher
//             if (selectedTeacher) {
//                 await assignTeacherToClass(
//                     classData._id,
//                     selectedTeacher
//                 );
//             }

//             if (fetchClass) {
//                 await fetchClass();
//             }

//             showToast(
//                 "success",
//                 "Class updated successfully!"
//             );

//             if (onClose) {
//                 onClose(false);
//             }
//         } catch (error) {
//             console.log(
//                 "Update class error:",
//                 error
//             );

//             showToast(
//                 "error",
//                 error.response?.data?.message ||
//                 "Failed to update class"
//             );
//         } finally {
//             setLoading(false);
//         }
//     };


//     // =========================
//     // FETCH USERS
//     // =========================

//     useEffect(() => {
//         fetchStudents();
//         fetchTeachers();
//     }, []);


//     // =========================
//     // LOAD UPDATE DATA
//     // =========================

//     useEffect(() => {
//         if (isUpdate && data) {
//             console.log(
//                 "Editing class:",
//                 data
//             );

//             setClassData({
//                 ...initialData,
//                 ...data,
//                 location: {
//                     ...initialData.location,
//                     ...(data.location || {}),
//                 },
//             });

//             setSchedule(
//                 data.schedule?.length
//                     ? data.schedule
//                     : [daysInit]
//             );

//             setClassStudents(
//                 data.students || []
//             );

//             setSelectedTeacher(
//                 data.teacher?._id ||
//                 data.teacherId ||
//                 ""
//             );

//             setSelectedStudent("");
//         } else {
//             setClassData(initialData);
//             setSchedule([daysInit]);
//             setClassStudents([]);
//             setSelectedStudent("");
//             setSelectedTeacher("");
//         }
//     }, [isUpdate, data]);




//     return (
//         <>
//             <div>
//                 <h2 className="text-xl font-semibold">
//                     {isUpdate
//                         ? "Update Class"
//                         : "Add Class"}
//                 </h2>

//                 <div className="py-4">
//                     <form
//                         onSubmit={
//                             isUpdate
//                                 ? updateClass
//                                 : addClass
//                         }
//                     >

//                         {/* CLASS NAME */}

//                         <FormInput
//                             label="Name"
//                             name="name"
//                             value={
//                                 classData.name || ""
//                             }
//                             onChange={handleInputs}
//                         />


//                         {/* CLASS CODE */}

//                         <FormInput
//                             label="Code"
//                             name="code"
//                             value={
//                                 classData.code || ""
//                             }
//                             onChange={handleInputs}
//                         />


//                         {/* LATITUDE */}

//                         <FormInput
//                             label="Latitude"
//                             name="lat"
//                             type="number"
//                             value={
//                                 classData.location
//                                     ?.lat || ""
//                             }
//                             onChange={handleInputs}
//                         />


//                         {/* LONGITUDE */}

//                         <FormInput
//                             label="Longitude"
//                             name="lng"
//                             type="number"
//                             value={
//                                 classData.location
//                                     ?.lng || ""
//                             }
//                             onChange={handleInputs}
//                         />


//                         {/* SCHEDULE */}


//                         <div className="flex flex-col mt-5">

//                             <label className="mb-2 font-medium">
//                                 Class Schedule
//                             </label>
//                             <div>
//                                 <div className="max-h-28 overflow-auto">
//                                     <div className="overflow-auto">

//                                         {schedule.map(
//                                             (sched, index) => (
//                                                 <div
//                                                     key={index}
//                                                     className="flex gap-3 items-center mb-3"
//                                                 >

//                                                     {/* DAY */}

//                                                     <select
//                                                         value={
//                                                             sched.day
//                                                         }
//                                                         onChange={(e) =>
//                                                             handleSchedule(
//                                                                 index,
//                                                                 "day",
//                                                                 e.target.value
//                                                             )
//                                                         }
//                                                         className="bg-mauve-800 text-white p-2"
//                                                     >
//                                                         {days.map(
//                                                             (day) => (
//                                                                 <option
//                                                                     key={
//                                                                         day.value
//                                                                     }
//                                                                     value={
//                                                                         day.value
//                                                                     }
//                                                                 >
//                                                                     {
//                                                                         day.text
//                                                                     }
//                                                                 </option>
//                                                             )
//                                                         )}
//                                                     </select>


//                                                     {/* START TIME */}

//                                                     <FormInput
//                                                         type="time"
//                                                         name="startTime"
//                                                         value={
//                                                             sched.startTime ||
//                                                             ""
//                                                         }
//                                                         onChange={(e) =>
//                                                             handleSchedule(
//                                                                 index,
//                                                                 "startTime",
//                                                                 e.target.value
//                                                             )
//                                                         }
//                                                     />


//                                                     {/* END TIME */}

//                                                     <FormInput
//                                                         type="time"
//                                                         name="endTime"
//                                                         value={
//                                                             sched.endTime ||
//                                                             ""
//                                                         }
//                                                         onChange={(e) =>
//                                                             handleSchedule(
//                                                                 index,
//                                                                 "endTime",
//                                                                 e.target.value
//                                                             )
//                                                         }
//                                                     />


//                                                     {/* REMOVE */}

//                                                     {schedule.length >
//                                                         1 && (
//                                                             <Button
//                                                                 type="button"
//                                                                 onClick={() =>
//                                                                     removeScheduleItem(
//                                                                         index
//                                                                     )
//                                                                 }
//                                                             >
//                                                                 Remove
//                                                             </Button>
//                                                         )}
//                                                 </div>
//                                             )
//                                         )}

//                                     </div>

//                                 </div>

//                             </div>

//                         </div>

//                         {/* ADD SCHEDULE */}

//                         {schedule.length < 7 && (
//                             <Button
//                                 type="button"
//                                 onClick={
//                                     addNewScheduleItem
//                                 }
//                             >
//                                 Add Schedule
//                             </Button>
//                         )}





//                         {/* STUDENT */}

//                         <div className="py-5">

//                             <label className="block mb-2">
//                                 Select Student
//                             </label>

//                             <div className="flex gap-5 items-center">

//                                 <select
//                                     className="bg-mauve-700 text-white p-2"
//                                     value={
//                                         selectedStudent
//                                     }
//                                     onChange={(e) =>
//                                         setSelectedStudent(
//                                             e.target.value
//                                         )
//                                     }
//                                     disabled={
//                                         studentLoading
//                                     }
//                                 >
//                                     <option value="">
//                                         {studentLoading
//                                             ? "Loading students..."
//                                             : "Select Student"}
//                                     </option>

//                                     {studentList.map(
//                                         (student) => (
//                                             <option
//                                                 key={
//                                                     student._id
//                                                 }
//                                                 value={
//                                                     student._id
//                                                 }
//                                             >
//                                                 {
//                                                     student.name
//                                                 }
//                                             </option>
//                                         )
//                                     )}
//                                 </select>


//                                 {isUpdate && (
//                                     <Button
//                                         type="button"
//                                         onClick={() =>
//                                             addStudentToClass(
//                                                 classData._id,
//                                                 selectedStudent
//                                             )
//                                         }
//                                     >
//                                         Add Student
//                                     </Button>
//                                 )}

//                             </div>
//                         </div>


//                         {/* TEACHER */}

//                         <div className="py-5">

//                             <label className="block mb-2">
//                                 Select Teacher
//                             </label>

//                             <div className="flex gap-5 items-center">

//                                 <select
//                                     className="bg-mauve-700 text-white p-2"
//                                     value={
//                                         selectedTeacher
//                                     }
//                                     onChange={(e) =>
//                                         setSelectedTeacher(
//                                             e.target.value
//                                         )
//                                     }
//                                     disabled={
//                                         teacherLoading
//                                     }
//                                 >
//                                     <option value="">
//                                         {teacherLoading
//                                             ? "Loading teachers..."
//                                             : "Select Teacher"}
//                                     </option>

//                                     {teacherList.map(
//                                         (teacher) => (
//                                             <option
//                                                 key={
//                                                     teacher._id
//                                                 }
//                                                 value={
//                                                     teacher._id
//                                                 }
//                                             >
//                                                 {
//                                                     teacher.name
//                                                 }
//                                             </option>
//                                         )
//                                     )}
//                                 </select>


//                                 {isUpdate && (
//                                     <Button
//                                         type="button"
//                                         onClick={() =>
//                                             assignTeacherToClass(
//                                                 classData._id,
//                                                 selectedTeacher
//                                             )
//                                         }
//                                     >
//                                         Assign Teacher
//                                     </Button>
//                                 )}

//                             </div>
//                         </div>


//                         {/* CURRENT STUDENTS */}

//                         {isUpdate && (


//                             <div className="py-4">

//                                 <h3 className="font-semibold mb-3">
//                                     Students in this Class
//                                 </h3>
//                                 <div className="max-h-28 overflow-auto">

//                                     {classStudents.length ===
//                                         0 ? (
//                                         <p>
//                                             No students added yet.
//                                         </p>
//                                     ) : (
//                                         <div className="space-y-2">

//                                             {classStudents.map(
//                                                 (
//                                                     student,
//                                                     index
//                                                 ) => {

//                                                     const studentData =
//                                                         student.student ||
//                                                         student;

//                                                     return (
//                                                         <div
//                                                             key={
//                                                                 studentData._id ||
//                                                                 index
//                                                             }
//                                                             className="p-2 border rounded"
//                                                         >
//                                                             {
//                                                                 studentData.name ||
//                                                                 "Student"
//                                                             }
//                                                         </div>
//                                                     );
//                                                 }
//                                             )}

//                                         </div>
//                                     )}

//                                 </div>
//                             </div>
//                         )}


//                         {/* SUBMIT */}

//                         <div className="pt-4">

//                             <Button
//                                 type="submit"
//                                 primary={true}
//                             >
//                                 {loading
//                                     ? isUpdate
//                                         ? "Updating..."
//                                         : "Adding..."
//                                     : isUpdate
//                                         ? "Update Class"
//                                         : "Add Class"}
//                             </Button>

//                         </div>

//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ClassForm;