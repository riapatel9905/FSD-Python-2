import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Shome from "./Shome"
import Sproject from "./Sproject"
import Snopage from "./Snopage"
import img1 from "../assets/sun.png"
import img2 from "../assets/sun1.png"
import img3 from "../assets/sun3.png"
function Student() {
    const s=[{name: "Project1",desc: "Eg1",image:img1},{name: "Project2",desc: "Eg2",image:img2},
    {name: "Project3",desc: "Eg3",image:img3}]
    return(
        <div>
            <Router>
                <ul><li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li></ul>
                <Routes>
                    <Route path ="/" element={<Shome/>}/>
                    <Route path="/projects" element={<Sproject data={s}/>}/>
                    <Route path ="*" element={<Snopage/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default Student;