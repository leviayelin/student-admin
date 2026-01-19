// Import section 
import {useState, useEffect} from 'react';

// Component section 
export default function Form({onAdd,onSave,editingStudent}){

    // setting state section 
    const [formData, setFormData] = useState({
        name:"",
        age:"",
        major:"",
        email:""
    });

    useEffect(()=>{
        if(editingStudent){
            setFormData(editingStudent)
        }
    },[editingStudent]);

    
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
            if(editingStudent){
                onSave(formData);
            }else{
                onAdd(formData);
            };
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
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" onChange={handleOnChange} value={formData.name}/>
                <label htmlFor="age">Age</label>
                <input id="age" name="age" type="number" onChange={handleOnChange} value={formData.age}/>
                <label htmlFor="major">Major</label>
                <input id="major" name="major" type="text" onChange={handleOnChange} value={formData.major}/>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" onChange={handleOnChange} value={formData.email}/>
                <button className='btn mt-3' type="submit">
                    {editingStudent? "Save Changes":"Add student"}
                </button>
            </form>
        </div>
        </>
    )
}