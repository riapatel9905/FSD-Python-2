function Events1()
{
    const handleclick=()=>
    {
        console.log("You clicked once");
    }
    const handledoubleclick=()=>
    {
        console.log("You clicked twice")
    }
    const handlechange=(e)=>
    {
        document.getElementById("text").innerHTML=e.target.value;
        console.log(e.target.value);
    }
    const handlesubmit=(e)=>
    {
        e.preventDefault();
        var u =document.getElementById('un').value;
        console.log(`welcome ${u}`)
    }
    return(<>
    <h1>Handle change and submit events</h1>
    <form onSubmit={handlesubmit}>
        <input type="text" id="un" onChange={handlechange}/>
        <input type="submit"/>
        </form>
        <h3 id="text"></h3>
        <button onDoubleClick={handledoubleclick} onClick={handleclick}>Click Here</button></>)
}
export default Events1;