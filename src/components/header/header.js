
import './header.css'
function Header(){
    return(
        
        
        <div className='header-wrapper mt-3'>
<div className='header-inner'>

<div className='item'>
    <img src="/images/logo.png" alt=""/>
</div>

<div className='item'>
<ul>
    <li><a href="#">STORE LOCATOR</a></li>
    <li><a href="#">SIGN IN/REGISTER</a></li>
</ul>
</div>

</div>

<nav className="navbar navbar-expand-lg navbar-light bg-light mt-4">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar w/ text</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">EVERYDAY VALUE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">MAKE IT A MEAL</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">SIGNATURE BOX</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">SHARING</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">PROMOTIONS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">SNACKS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">MIDNIGHT DEALS</a>
        </li>
        



      </ul>
      <span className="navbar-text">
      0
      </span>
    </div>
  </div>
</nav>


        </div>

        






    )
}

export default Header;