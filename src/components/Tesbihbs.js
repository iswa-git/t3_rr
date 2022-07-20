import React, { useState } from 'react'


const Tesbihbs = ( { text }  ) => {

    const [counter, setCounter] = useState('0');

    const incrementClick = () => {
        //console.log ("Increment counter");
        let numcounter = Number (counter)
        numcounter++;
        setCounter(numcounter);
    }

    const resetCounter = () => {
        setCounter ('0');
    }

    return (        
        <>
            <div className="col-12 col-md-6 col-lg-4 col-xlg-3">
                <div className=" card border-primary mb-3">
                    <div className="card-header counter-text"> { text } </div>
                    <div className="card-body text-primary">
                        <button onClick={ () => { resetCounter()}} className="btn btn-danger clear-counter btn-sm">
                            <i className="fs-4 mb-3 bi bi-repeat"></i>
                        </button>
                        <div onClick={ () => { incrementClick()} } className="mycounter counter-btn">{ counter }</div>
                    </div>
                </div>
            </div>
        </>       
    );
}
 
export default Tesbihbs;