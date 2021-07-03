import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sdata from "./Sdata";
import Card from './card';

function ncard(val){
  return(
    <Card
    college_name={val.college_name}
    image={val.image}
    offertext={val.offertext}
    nearest_place={val.nearest_place}
    discounted_fees={val.discounted_fees}
    rating={val.rating}
    rating_remarks={val.rating_remarks}
    amenties={val.amenties}
    tags={val.tags}
    ranking={val.ranking}
    famous_nearest_places={val.famous_nearest_places}
    original_fees={val.original_fees}
    discount={val.discount}
    fees_cycle={val.fees_cycle}
    
    />
  );
}
console.log(Sdata);
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <>
  {Sdata.map(ncard)}
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
