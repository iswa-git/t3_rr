import React, { Component } from "react";
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./counter.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, reset } from "./redux/slices/counterSlice";

const App = () => {
  const counters = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <div className ="row">
      {Object.keys(counters).map((key) => (
        <div key={key}>
          {counters[key]}

         

          <div className="col-12 col-md-6 col-lg-4 col-xlg-3">
                <div className=" card border-primary mb-3">
                    <div className="card-header counter-text"> { key } </div>
                    <div className="card-body text-primary">
                    
                    <button
            onClick={() => {
              dispatch(reset(key));
            }}
          >
            Reset<i className="fs-4 mb-3 bi bi-repeat"></i>

          </button>
                            
          
          <Button
            onClick={() => {
              dispatch(increment(key));
            }}
          >
            +
          </Button>
                    </div>
                </div>
            </div>
        </div>
      ))}
      </div>
    </div>
  );
};
export default App;
