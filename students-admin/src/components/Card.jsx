// Components section
export default function Card({name,age,major,email}){
    return(
            <div className="student-card">
                <h2>Student Card</h2>
                <div className="info">
                    <p>name : {name}</p>
                    <p>age : {age}</p>
                    <p>major : {major}</p>
                    <p>email : {email}</p>
                </div>
            </div>
    )
}