import React, {useContext, useEffect, useState} from 'react';

import {PostContext} from '../../store/PostContext';
import {FirebaseContext} from '../../store/context';

import './View.css';
function View() {
  const { postDetails} = useContext(PostContext);
  const {firebase} = useContext(FirebaseContext);

  const [userDetails, setUserDetails] = useState();
  const userId =postDetails.userId
  useEffect(() => {
    firebase
      .firestore()
      .collection('user')
      .where('id', '==', userId)
      .get()
      .then((result) => {
        result.forEach((doc, index) => {
          console.log(doc.data());
          setUserDetails(doc.data());
        });
      });
    return () => {};
  }, [firebase,userId]);

  console.log(postDetails);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={
            postDetails
              ? postDetails.url
              : 'https://apollo-singapore.akamaized.net/v1/files/1zjwyr7gd2pr3-IN/image'
          }
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails ? postDetails.price : '123456'} </p>
          <span>
            {' '}
            {postDetails
              ? postDetails.name
              : 'Hyundai i10 Magna, 2008, Petrol'}{' '}
          </span>
          <p>{postDetails ? postDetails.category : 'Two Wheeler'}</p>
          <span>{postDetails ? postDetails.createdAt : 'Tue May 04 2021'}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails ? userDetails.name : 'No name'}</p>
          <p>{userDetails ? userDetails.phone : '1234567890'}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
