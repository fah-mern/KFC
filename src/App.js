
import Home from './pages/home/home.js';

import {products} from './Data'

function App() {

  return (
       <div className='container'>
<Home products={products}/>
    </div>

  )
}

export default App;
