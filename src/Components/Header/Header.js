import React, {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FirebaseContext} from '../../store/context';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
function Header(props) {
  const {firebase} = useContext(FirebaseContext);
  const history = useHistory();
  console.log(props.user ? props.user.displayName : null);
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <Link to="/">
            <OlxLogo></OlxLogo>
          </Link>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {props.user ? (
            <span>Welcome {props.user.displayName}</span>
          ) : (
            <Link to="/login">
              <span>Login</span>
              <hr />
            </Link>
          )}
        </div>
        <Link to="/create">
          <div className="sellMenu">
            <SellButton></SellButton>
            <div className="sellMenuContent">
              <SellButtonPlus></SellButtonPlus>
              <span>SELL</span>
            </div>
          </div>
        </Link>
        {props.user && (
          <div className="logout">
            <span
              style={{cursor: 'pointer'}}
              onClick={() => {
                firebase.auth().signOut();
                history.push('/login');
              }}
            >
              Logout
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
