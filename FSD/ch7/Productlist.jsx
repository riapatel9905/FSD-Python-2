import Productcard from "./Productcard"
function Productlist()
{
    const Products=[{name:"Product1",Price:"20000",rating:4.3,image:<img src="./assets/img1.png"/>},
                    {name:"Product2",Price:"30000",rating:4.4,image:<img src="./assets/img2.png"/>},
                    {name:"Product3",Price:"40000",rating:3.7,image:<img src="./assets/img3.png"/>},
                    {name:"Product4",Price:"50000",rating:4.6,image:<img src="./assets/img3.png"/>}
]
return(<>
<Productcard data={Products}/></>)
}
export default Productlist;