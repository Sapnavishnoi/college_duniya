import React from 'react';
import ReactDOM from 'react-dom';
import "/home/mobillor/Downloads/college_duniya/my_app/my_app/src/card.css";

// var data = Sdata;

function Card(props) {
    console.log(props);
    return (
   
    <>
    
    <div className="card">
        <div className="container">
    <div className="promoted">PROMOTED</div>
          <img src={props.image} alt="pic" className="imgclg"/>
          <p className="text-block">{props.rating}</p>
          <p className="text-block">{props.rating_remarks}</p>
          <p className="tags">{props.tags[0]}</p>
          <p className="ranking">#{props.ranking}</p>
        </div> 
        <div className="info">
        <p className="clg">{props.college_name}<span>&#9733;
            </span><span>&#9733;
            </span><span>&#9733;
            </span></p> 
    <p className="nearest">{props.nearest_place[0]} | {props.nearest_place[1]}</p>
    <p className="famous_nearest_places"> {props.famous_nearest_places}</p>
    <p className="original_fees"><span>&#8377;</span>{props.original_fees}</p>
    <p className="discount">{props.discount}</p>
        <p className="discounted_fees"><span>&#8377;</span>{props.discounted_fees}</p>
        <p className="fees_cycle">{props.fees_cycle}</p>
        <p className="val">{props.offertext}</p>
        <p className="amenties">{props.amenties[0]} {props.amenties[1]}</p>
        </div>

    </div>
       
    </>
    

         )
    }

export default Card;