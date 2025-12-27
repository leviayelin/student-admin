// Import section 
import {useState} from 'react';

// Component section 
export default function Form({onAdd}){

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
    const handleOnChange = (e) =>{
        // use destroctive mathod 
        const {name, value} = e.target
        setFormData({...formData,[name]:value})
    }
    
    const handleSubmit = (e) =>{
        // prevent refresh after submit 
        e.preventDefault();

        //creating local storage empty array if not exited 
        if(formData.name && formData.email){
            // Instead of saving to localStorage here, send it to the parent!
            onAdd(formData)
            // clear input field after submit 
            setFormData({name:"",age:"",major:"",email:""});
        }else{
            alert("Please provide at least name and email.");
            return;
        }
    };

    return(
        <>
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:
                    <input id="name" name="name" type="text" onChange={handleOnChange} value={formData.name} placeholder="Student name"/>
                </label>
                <label htmlFor="age">Age:
                    <input id="age" name="age" type="number" onChange={handleOnChange} value={formData.age} placeholder="Student age"/>
                </label>
                <label htmlFor="major">Major:
                    <input id="major" name="major" type="text" onChange={handleOnChange} value={formData.major} placeholder="Student major"/>
                </label>
                <label htmlFor="email">Email:
                    <input id="email" name="email" type="email" onChange={handleOnChange} value={formData.email} placeholder="Student email"/>
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
        </>
    )
}