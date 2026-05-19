import img1 from './assets/hero.png'
import "./myapp.css"
function Comp1(){
    var n ="ABC";
    var c= {color:"red",fontsize:"30px"}
    return(<><h1 style={{color:"blue",fontsize:"50px"}}>Hi {n}</h1> 
    <h2 style={c}>hello</h2>
    <img src={img1} className='i1'></img>
    <img src="/favicon.svg" className='i1'></img>
    <input type="email"/>
    </>)
}
export default Comp1; //function name
