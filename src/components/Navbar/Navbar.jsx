import { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from './../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from './../context/StoreContext';
import PropTypes from 'prop-types';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery.trim()}`);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className='navbar'>
      <Link to='/'> <img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>menu</a>
        <Link to='/book-table' onClick={() => setMenu('book-table')} className={menu === 'book-table' ? 'active' : ''}>book a table</Link> {/* Updated this line */}
        <a href='#footer' onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>contact us</a>
      </ul>

      <div className="navbar-right">
        <div className="navbar-search">
          <input 
            type="text" 
            placeholder="Search for items..." 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <button onClick={handleSearch}>
            <img src={assets.search_icon} alt="search" />
          </button>
        </div>

        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

// Define PropTypes
Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default Navbar;
