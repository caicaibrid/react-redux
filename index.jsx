import React from  "react";
import ReactDom from "react-dom";
import {createStore} from "redux";

const Counter = ({value,onIncrement,onDecrement})=>{
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    )
};
const reducer = (state=0,action) =>{
    switch (action.type){
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            if(state-1<0){
                return state;
            }
            return state-1;
        default:
            return state;
    }
};

const store = createStore(reducer);

const render = ()=>{
  ReactDom.render(<Counter value={store.getState()} onIncrement={()=>store.dispatch({type:"INCREMENT"})} onDecrement={()=>store.dispatch({type:"DECREMENT"})}/>,document.getElementById("app"))
};

render();

store.subscribe(render);
