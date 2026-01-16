// Import section
import {useState} from 'react'

// Components section
export default function Card({id,name,age,major,email,onMenu,openMenuId,onDelete}){

    const isOpen = openMenuId === id;

    return(
        <div id={id} className="card shadow-sm student-card">
            <div className="settings">
                <i onClick={()=>onMenu(id)} className="uil uil-ellipsis-h">➕</i>
                {isOpen &&(
                    <ul className={`student-edit-menu ${isOpen?"show":""}`}>
                        <li><span className="card-edit">edit</span></li>
                        <li><span className="card-del" onClick={()=>onDelete(id)}>delete</span></li>
                    </ul>
                )}
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