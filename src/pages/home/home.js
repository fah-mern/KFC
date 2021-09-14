import Card from "../../components/card/card";
import Header from "../../components/header/header";
import Slider from "../../components/slider/slider";
import {useState} from 'react'

function Home(props){

const [products, setproducts] = useState(props.products)
    return(
        <div>
        <Header/>
        <Slider/>
        
<div className='row'>{
    products.map(p=><Card product={p} key={p.id}/>)
}

</div>
        
        </div>
    )
}

export default Home;