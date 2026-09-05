import React, { useEffect, useState } from "react";
import api from "../../api/config";
import { Link } from "react-router";

const Classes = () => {
  const [classesList, setClassesList] = useState([]);

  const fetchClasses = async () => {
    try {
      const response = await api.get("/teacher/classes");
      console.log("API RESPONSE:", response.data);
      setClassesList(
        response.data.classes || []
      );
    } catch (error) {
      console.log(
        "Fetch classes error:", error);
      console.log(
        "Backend error:", error.response?.data);
    }
  };

  


  useEffect(() => {
    fetchClasses();
  }, []);


  return (
    <div className="py-5">
      <h2 className="text-2xl font-semibold">
        My Classes
      </h2>
      <div className="py-5 grid grid-cols-4 gap-5">
        {classesList.length > 0 ? (
          classesList.map(({ name, code, students, _id }) => (
            <div
              key={_id}
              className="bg-mauve-700 border border-mauve-500 p-5 rounded-md"
            >
              <h2>
                Class: {name}
              </h2>
              <p>
                Code: {code}
              </p>
              <p>
                Total Student:{" "}
                {students.length}
              </p>
              <Link
                to={`/teacher/class/${_id}`}
                className="inline-block bg-mauve-900 px-4 py-2 rounded-md mt-4"
              >
                View
              </Link>
              {/* <Link
                to={`/teacher/class/${_id}`}
                className="inline-block bg-mauve-900 px-4 py-2 rounded-md mt-4"
              >
                Edit
              </Link> */}
            </div>

          ))
        ) : (
          <p>
            No classes found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Classes;