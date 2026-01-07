// Import section
import Card from "./Card"; 

// Component section 
export default function CardList({students}){
    return(
        <div className="card-list">
            {students.length > 0 ?students.map((info,id)=>(
                <Card
                key={id} 
                id={id}
                name={info.name}
                age={info.age}
                major={info.major}
                email={info.email}
                />)):(
            <p>there's no data!</p>
            )}
        </div>
    );
};