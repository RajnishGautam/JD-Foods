// import React from 'react';
import PropTypes from 'prop-types'; // Import prop-types
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>
        Embark on a culinary journey where every dish tells a story. Explore our menu and discover flavors that inspire and delight!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => (prev === item.menu_name ? 'All' : item.menu_name))} key={index} className="explore-menu-list-item">
              <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  );
}

// Prop validation
ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default ExploreMenu;
