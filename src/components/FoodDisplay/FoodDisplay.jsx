import { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import PropTypes from 'prop-types'; // Import PropTypes

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category === 'All' || category === item.category) {
                        return (
                            <FoodItem 
                                key={index} 
                                id={item._id} 
                                name={item.name} 
                                description={item.description} 
                                price={item.price} 
                                image={item.image} 
                            />
                        );
                    }
                    return null; // Return null if no condition matches
                })}
            </div>
        </div>
    );
};

// Add PropTypes validation
FoodDisplay.propTypes = {
    category: PropTypes.string.isRequired, // Adjust based on your requirement
};

export default FoodDisplay;
