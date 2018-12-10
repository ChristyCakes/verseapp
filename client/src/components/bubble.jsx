import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';

const Bubble = (props) => {
    return (
        <div>
        <Chip 
            label={props.label}
            color={props.color}
        
        />
        </div>
        
    )
}

export default Bubble;




// featured component from blog
{/* <div className="card col-3">
            <img className="card-img-top my-3" src={props.img} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title text-secondary">{props.title}</h5>
                <Link to={`/blog/${props.blogid}`} className="btn btn-info">Read More</Link>
            </div>
        </div> */}