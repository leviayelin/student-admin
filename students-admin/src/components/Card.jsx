// Import section
import {useEffect,useRef} from 'react';

// Components section
export default function Card({id,name,age,major,email,onMenu,openMenuId,onDelete,onEdit}){

    const isOpen = openMenuId === id;
    const cardRef = useRef(null);

    // useEffect Hook, attach/remove eventListener correctly, 
    // without cussing memory usage leak 
    useEffect(()=>{
        const handleClickOutSide = (e) =>{
            if(!isOpen) return

            if(cardRef.current && !cardRef.current.contains(e.target)){
                onMenu(null);// close menu
            }
        };

        document.addEventListener("mousedown",handleClickOutSide);

        return()=>{
            document.removeEventListener("mousedown", handleClickOutSide);
        }
    },[isOpen, onMenu])

    return(
        <div id={id} ref={cardRef} className="card shadow-sm student-card">
            <div className="settings">
                <span onClick={()=>onMenu(id)}>🟰</span>
                {isOpen &&(
                    <ul className={`student-edit-menu ${isOpen?"show":""}`}>
                        <li className="card-edit" onClick={()=>onEdit(id)}>edit</li>
                        <li className="card-del" onClick={()=>onDelete(id)}>delete</li>
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