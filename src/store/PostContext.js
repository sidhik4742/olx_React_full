import {createContext, useState} from 'react';

export const PostContext = createContext();

const PostDetails = ({children}) => {
  const [postDetails, setPostDetails] = useState();

  return (
    <PostContext.Provider
      value={{
        setPostDetails,
        postDetails,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostDetails;
