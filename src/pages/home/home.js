import Card from "../../components/card/card";
import Header from "../../components/header/header";
import Slider from "../../components/slider/slider";

function Home(){
    return(
        <div>
        <Header/>
        <Slider/>
        
<div className='row'>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
</div>
        
        </div>
    )
}

export default Home;