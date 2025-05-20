import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import AddStudent from "./components/AddStudent.jsx";
import Students from "./components/Students.jsx";
import { useState, useEffect } from "react";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudentsData();
  }, []);

  async function getStudentsData() {
    try {
      const response = await fetch("http://localhost:3000/api/v1/students", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const studentsData = await response.json();
        setStudents(studentsData);
      } else {
        const responseJson = await response.json();
        alert(`Error: ${responseJson.message}`);
      }
    } catch (error) {
      alert(`Fetch error: ${error.message}`);
    }
  }

  return (
    <div >
      <Header />
      <AddStudent setStudents={setStudents} />
      <Students students={students} setStudents={setStudents} />
      <Footer />
    </div>
  );
}

export default App;
