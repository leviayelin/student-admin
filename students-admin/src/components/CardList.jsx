// Import section
import Card from "./Card"; 

// Component section 
export default function CardList(){
    return(
        <>
        <div className="card-List">
            <Card 
            name="BEN"
            age="33"
            major="ART"
            email="example@dogama.com"
            />
        </div>
        </>
    );
};