// Import section 
import {useState} from 'react';


// Component section 
export default function Form(){

    // setting state section 
    const [formData, setFormData] = useState({
        name:"",
        age:"",
        major:"",
        email:""
    });

    
    // Event handle section 
    /*side note -  
    handleChange keeps the input value in React state so the UI
     and your data stay in sync —
     this is called a "controlled component."
    */
    const handleChange = (e) =>{
        // use destroctive mathod 
        const {name, value} = e.target
        setFormData({...formData,[name]:value})
    }
    
    const handleSubmit = (e) =>{
        // prevent refresh after submit 
        e.preventDefault();
        
        // getting local storage 
        let studentData = JSON.parse(localStorage.getItem("students"));
        
        let valid = formData.name && formData.email;

        if(valid){
            studentData = !studentData?[]:studentData;            
            let data = formData
            studentData.push(data)
            console.log('form submited!',studentData);
        }else{
            alert("Please provide at least name and email.");
            return;
        }
        
        /* creating local storage empty array
         if not exited */
        if(studentData){
            console.log("data exite!")
        }else{
            console.log("data not exite!")
        }

        localStorage.setItem("students",JSON.stringify(studentData));
        // clear input field after submit 
        setFormData({
            name:"",
            age:"",
            major:"",
            email:""
        });
    };

    return(
        <>
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:
                    <input id="name" name="name" type="text" onChange={handleChange} value={formData.name} placeholder="Student name"/>
                </label>
                <label htmlFor="age">Age:
                    <input id="age" name="age" type="number" onChange={handleChange} value={formData.age} placeholder="Student age"/>
                </label>
                <label htmlFor="major">Major:
                    <input id="major" name="major" type="text" onChange={handleChange} value={formData.major} placeholder="Student major"/>
                </label>
                <label htmlFor="email">Email:
                    <input id="email" name="email" type="email" onChange={handleChange} value={formData.email} placeholder="Student email"/>
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
        </>
    )
}