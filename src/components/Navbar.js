import { Link } from "react-router-dom";

export default function Navbar() {
    const changeTheme = () => {
        const newColor = document.getElementById("themeColor").value;
        document.documentElement.style.setProperty("--accent-color", newColor);
      };
  return (
    <>
      <nav>
        <h1 className="logo">Movies</h1>
        <div className="nav-menu">
          <Link to='/'>Home</Link>
          <Link to='/#favourites'>Favourites</Link>
        </div>
        <div style={{float: 'right',padding:'10px'}}>
        <Link to='/profile'>
            <i className="far fa-user" style={{fontSize:'18px', marginRight:'5px'}}></i>
            <p style={{display:'inline-block'}}>name</p>
        </Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign Up</Link>
        <a href=''>Logout</a>
        {/* <a>{{user.first_name}}</a> */}
        </div>
        {/* <div class="colorContainer">
          <i class="fas fa-tint" id="tintIcon"></i>
          <p>Accent Color:</p>
          <input
            type="color"
            id="themeColor"
            name="favcolor"
            onChange={changeTheme}
          />
        </div> */}
      </nav>
    </>
  );
}
