// Import section 
import { useState, useEffect } from "react";
import CardList from "../components/CardList";
import Form from "../components/Form";
import '../assets/css/StudentForm.css';

// Component section 
export default function StudentForm(){

    // Setting state's section 
    const [students,setStudents] = useState([]);
    const [openMenuId,setOpenMenuId] = useState(null);

    // useEffect => loading data from localStorage 
    useEffect(()=>{
        const savedData = JSON.parse(localStorage.getItem("students")) || [];
        setStudents(savedData);
    },[])

    // useState => this state will be calld by the form (child)
    const addStudent = (newStudent) =>{
        const updateList = [...students,newStudent];
        setStudents(updateList) // this part triggers the UI update!
        localStorage.setItem("students", JSON.stringify(updateList))
    };

    const deleteStudent = (id) =>{
        /* note - filter:
        - goes over the array one item at a time
        - keeps items that return true
        - removes items that return false

        why? keep everyone except the clicked card
        */ 
        const updateList = students.filter((student, index) => index !== id);
        // update the card list/localStorage
        setStudents(updateList);
        localStorage.setItem("students",JSON.stringify(updateList))
    }

    // card setting menu tiggle 
    const toggleMenu = (id) =>{
        setOpenMenuId(prev => (prev === id ? null:id))
    }

    return(
        <>
        {/* Pass the add function to Form */}
        <Form onAdd={addStudent}/>
        {/* Pass the data to CardList */}
        <CardList onMenu={toggleMenu} openMenuId={openMenuId} onDelete={deleteStudent} students={students}/>
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

** menu toggle - in react, the use of events is treated diffrentaly 
    than with a regular DOM when an object can be change directly. 
    for this usage react use 'state' to rander the vr-DOM whan change are made
    and only change the changed object. the use of tradinional eventListener 
    will couse a 'memory leak of data usage' by adding the same event 
    everytime the DOM is render. 
*/