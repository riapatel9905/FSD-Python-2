function Map()
{
    const students =[{rollno:1,name:"ABC",std:5}]
    return(
        <>{
            students.filter((s)=>s.std===5).map((s,i)=>
            <div key ={s.rollno}>
            <h2>Student Name: {s.name}</h2>
            <h3>Std: {s.std+1}</h3></div>)
        }</>
    )
}
export default Map;