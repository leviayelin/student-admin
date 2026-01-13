// Import section
import {useState} from 'react'

// Components section
export default function Card({id,name,age,major,email,onDelete}){

    /*
        continue on the setting edit/delete section
    */
    return(
        <div id={id} className="card shadow-sm student-card">
            <div className="settings">
                <i className="uil uil-ellipsis-h">➕</i>
                <ul className="student-edit-manu">
                    <li><span className="card-edit">edit</span></li>
                    <li><span className="card-del" onClick={()=>onDelete(id)}>delete</span></li>
                </ul>
            </div>
            <div className="card-body">
                <h5 className="card-title text-center mb-3">Student Card</h5>
                <p className="card-text"><strong>Name:</strong> {name}</p>
                <p className="card-text"><strong>Age:</strong> {age}</p>
                <p className="card-text"><strong>Major:</strong> {major}</p>
                <p className="card-text"><strong>Email:</strong> {email}</p>
            </div>
        </div>
    );
}