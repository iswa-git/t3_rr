import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./counter.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, reset } from "./redux/slices/counterSlice";

const App = () => {
  const counters = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div><h2 className='centertext'>تسابيح</h2>
      <div className ="row">
      {Object.keys(counters).map((key) => (
        <div key={key} className="col-12 col-md-6 col-lg-4 col-xlg-3">
                <div className=" card border-primary mb-3">
                    <div className="card-header counter-text"> { key } </div>
                    <div className="card-body text-primary">
                    
                      <button className="btn btn-danger clear-counter btn-sm"
                        onClick={() => {
                          dispatch(reset(key));
                        }}
                      > <i className="fs-4 mb-3 bi bi-repeat"></i>
                      </button>
                              
                      <button className="mycounter counter-btn"
                        onClick={() => {
                          dispatch(increment(key));
                        }}
                      >
                         {counters[key]}
                      </button>

                </div>
            </div>
        </div>
      ))}
      </div>
    </div>
  );
};
export default App;
