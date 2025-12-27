// Import section 
import { useState, useEffect } from "react";
import CardList from "../components/CardList";
import Form from "../components/Form";
import '../assets/css/StudentForm.css';

// Component section 
export default function StudentForm(){

    // Setting state's section 
    const [students,setStudents] = useState([]);

    // useEffect => loading data from localStorage 
    useEffect(()=>{
        const savedData = JSON.parse(localStorage.getItem("students")) || [];
        setStudents(savedData);
    },[])

    // useState => this state will be calld by the form 
    const addStudent = (newStudent) =>{
        const updateList = [...students,newStudent];
        setStudents(updateList) // this part triggers the UI update!
        localStorage.setItem("students", JSON.stringify(updateList))
    };

    return(
        <>
        {/* Pass the add function to Form */}
        <Form onAdd={addStudent}/>
        {/* Pass the data to CardList */}
        <CardList students={students}/>
        </>
    );
};

/*side notes:
---------------------
** connection between components - 
- Form saves to localStorage, CardList has no way of knowing a change happened because it only checks localStorage once when it first loads (the empty [] in useEffect).
- To fix this, thos components need to Lift the State Up to their common parent.

** understand fixed from before code:
- Your student data lives in one place (StudentForm.jsx)
- Instant UI Updates: When setStudents is called in the parent, React automatically re-renders the CardList with the new data.
- smart logic, before they just display data or send input, each on there on. now they
connected by rendering and update becouse of the parent place and structor.
*/