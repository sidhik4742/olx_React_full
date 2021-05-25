import React, { useContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {FirebaseContext} from '../../store/context';
import {PostContext} from '../../store/PostContext';
import Heart from '../../assets/Heart'
import './Post.css';

//TODO
//PUT Rest of the posts
function Posts() {
  const history = useHistory();

  let posts;
  const {firebase} = useContext(FirebaseContext);
  const [postArr, setPost] = useState([]);

  const {setPostDetails} = useContext(PostContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection('olx')
      .get()
      .then((snapshot) => {
        const allPosts = snapshot.docs.map((post) => ({
          ...post.data(),
          id: post.id,
        }));
        console.log(allPosts);
        setPost(allPosts);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [firebase]);
  // The object has a name property

  const viewPstHandler = (id) => {
    let selectedPost = postArr.filter((post) => post.id === id);
    console.log(selectedPost);
    setPostDetails(selectedPost[0]);
    history.push('/view');
  };

  if (postArr) {
    posts = postArr.map((obj, index) => (
      <div key={index} className="card" onClick={() => viewPstHandler(obj.id)}>
        <div className="favorite">
        <Heart></Heart>
        </div>
        <div className="image">
          <img src={obj.url} alt="" />
        </div>
        <div className="content">
          <p className="rate">&#x20B9; {obj.price}</p>
          <span className="kilometer">{obj.category}</span>
          <p className="name"> {obj.name}</p>
        </div>
        <div className="date">
          <span>{obj.createdAt}</span>
        </div>
      </div>
    ));
  }

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">{posts}</div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">{posts}</div>
      </div>
    </div>
  );
}

export default Posts;
