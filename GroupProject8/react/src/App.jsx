import React from 'react';
import CustomNavbar from './navbar.jsx';
import CustomCard from './card.jsx';
import CustomButton from './button.jsx';
import CustomForm from './form.jsx';
import CustomModal from './Modal.jsx';
import './index.css';
import { useState } from 'react';

const App = () => {

  const [show, setShow ] = useState(false)
  return (
    <div>
      <CustomNavbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CustomCard />
          </div>
          <div className="col-md-6">
            <CustomForm />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <CustomButton  />
          </div>
        </div>
        <button onClick={()=>setShow(true)}>Show Modal</button>
        <CustomModal show={show} setModalOn={()=>setShow(false)}/>
      </div>
    </div>
  );
};

export default App;