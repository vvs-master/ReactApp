import Counter from "./Counter";
export default function ExerciseBeginnerLevel({data, storageId}){
    let compleatedStartCount = 0;
    if(localStorage.getItem(storageId + '-beginner')){
        compleatedStartCount = localStorage.getItem(storageId + '-beginner');
    } else {
        localStorage.setItem(storageId + '-beginner', 0)
    }
    
return(
    <div>
        <h2>Exercise Beginner</h2>
        <p>{data.beginnerOptionTitle}</p>
        <p>{data.beginnerDescription}</p>
        <ul>
            {data.beginnerExercises.map((ex,i)=>(
                <li key={i}>{ex.count} {ex.name}</li>
            ))}
        </ul>
        <ul>
            {data.beginnerGenders.map((ex,i)=>(
                <li key={i}>{ex.gender} {ex.weight} {ex.unit}</li>
            ))}
        </ul>
        <Counter compleatedStartCount={compleatedStartCount} storageId={storageId} level={'-beginner'}/>
    </div>
)
}