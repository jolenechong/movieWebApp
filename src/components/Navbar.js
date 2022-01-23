import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <>
      <nav>
        <div className="nav-menu">
          <Link to='/'><h1 className="logo">Movies</h1></Link>

        </div>
        {/* <div style={{float: 'right',padding:'10px'}}>
        <Link to='/profile'>
            <i className="far fa-user" style={{fontSize:'18px', marginRight:'5px'}}></i>
        </Link>
        </div> */}

      </nav>
    </>
  );
}
