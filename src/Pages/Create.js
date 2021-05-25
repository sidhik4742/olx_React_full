import {useState, useContext, Fragment} from 'react';
import {FirebaseContext, AuthContext} from '../store/context';
import {useHistory} from 'react-router-dom';
import './Create.css';
import Header from '../Components/Header/Header';

const Create = () => {
  const history = useHistory();
  const {firebase} = useContext(FirebaseContext);
  const {user} = useContext(AuthContext);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState(null);
  const [url, setURL] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    const {ref} = await firebase
      .storage()
      .ref(`/images/${file.name}`)
      .put(file);
    ref.getDownloadURL().then(async (url) => {
      setURL(url);
      console.log('success to uploaded image');
      const date = new Date();
      await firebase.firestore().collection('olx').add({
        name,
        price,
        url,
        category,
        userId: user.uid,
        createdAt: date.toDateString(),
      });
      history.push('/');
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  console.log(file);

  return (
    <Fragment>
      <Header user={user.displayName} />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              id="fname"
              onChange={(e) => setName(e.target.value)}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              id="fname"
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              className="input"
              type="number"
              value={price}
              id="fname"
              onChange={(e) => setPrice(e.target.value)}
              name="Price"
            />
            <br />
          </form>
          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={file ? URL.createObjectURL(file) : null}
          ></img>
          <form onSubmit={handleUpload}>
            <br />
            <input type="file" onChange={handleChange} />
            <br />
            <button className="uploadBtn" disabled={!file}>
              upload and Submit
            </button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
