function Events()
{
    const myclick=(n)=>
    {
        alert(`Hello ${n} `) 
    }
    return(
        // <><button onClick={myclick}>Click me</button></>
        <><button onClick={()=>myclick('A')}>Click me</button></>
    )
}
export default Events;