// Components section
export default function Card({name,age,major,email}){
    return(
        <div className="card shadow-sm student-card">
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