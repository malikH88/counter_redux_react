import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
   number: state,
});

const CounterContainer = ({ number, dispatch }) => (
   <div>
      <p>{number}</p>
      <div>
         <button onClick={() => dispatch({ type: 'ADD' })}>+1</button>
         <button onClick={() => dispatch({ type: 'REMOVE' })}>-1</button>
      </div>
      <div>
         <button onClick={() => dispatch({ type: 'ADD_10' })}>+10</button>
         <button onClick={() => dispatch({ type: 'REMOVE_10' })}>-10</button>
      </div>
      <div>
         <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
      </div>
   </div>
);

export default connect(mapStateToProps)(CounterContainer);