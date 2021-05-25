import React, {useContext} from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';

import './Home.css';
import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';

import {AuthContext} from '../store/context';

function Home() {
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <div className="homeParentDiv">
      <Header user={user} />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
