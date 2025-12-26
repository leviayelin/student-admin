// Import section 
import {useState} from 'react';


// Component section 
export default function Form(){

    // getting local storage 
    let studentData = localStorage.getItem("students");
    
    // Event handle section 
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('form submited!')
        /* creating local storage empty array
         if not exited */
        if(studentData){
            console.log("data exite!")
        }else{
            console.log("data not exite!")
        }
    };

    return(
        <>
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:
                    <input id="name" type="text" placeholder="Student name"/>
                </label>
                <label htmlFor="age">Age:
                    <input id="age" type="number" placeholder="Student age"/>
                </label>
                <label htmlFor="major">Major:
                    <input id="major" type="text" placeholder="Student major"/>
                </label>
                <label htmlFor="email">Email:
                    <input id="email" type="email" placeholder="Student email"/>
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
        </>
    )
}