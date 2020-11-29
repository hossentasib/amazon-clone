import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase.config';


const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
    return (
        <div className='header'>
            {/* Header Logo */}
            <Link to='/'>
            <img 
                className='header_logo'
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt=""
            />
            </Link>
            {/* Search Box */}
            <div className='header_search'>
                <input type="text" className='header_searchInPut'/>
                <SearchIcon className='header_searchIcon'/>
            </div>
            {/* 3 Links */}
            <div className='header_nav'>
                {/* 1 Links */}
                <Link to={!user && '/login'} className='header_link'> 
                    <div onClick={handleAuthenticaton} 
                    className='header_option'>
                        <span className='haeder_option_line_one'>Hello {!user ? 'Guest' : user.email}!</span>
                        <span className='haeder_option_line_two'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                {/* 2 Links */}
                <Link to='/' className='header_link'>
                    <div className='header_option'>
                        <span className='haeder_option_line_one'>Returns</span>
                        <span className='haeder_option_line_two'>& Oders</span>
                    </div>
                </Link>
                {/* 3 Links */}
                <Link to='/' className='header_link'>
                    <div className='header_option'>
                        <span className='haeder_option_line_one'>Your</span>
                        <span className='haeder_option_line_two'>Prime</span>
                    </div>
                </Link>
                {/* 3 Links */}
                <Link to='/checkout' className='header_link'>
                    <div className='header_optionBasket'>
                        {/* Shoppping Busket ICon */}
                        <ShoppingBasketIcon />
                        {/* Number of Item in the basket */}
                        <span className='haeder_option_line_two header_basketCount'>{basket?.length}</span>
                    </div>      
                </Link>
            </div>
        </div>
    );
};

export default Header;