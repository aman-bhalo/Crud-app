import React from 'react';
import user from '../images/user.png';
import {Link} from 'react-router-dom';

const CardPost =(props)=>{
    const {id,tittle,details,Liked,Disliked}=props.post;

    let Liked1=Liked;
    let Disliked1=Disliked;

    const handleCLickLike=()=>{
   
      if(Liked1==="true"){
        Liked1="false";
      }
      if(Liked1==="false"){
        Liked1="true";
      }

      Disliked1="false"
      console.log(Liked1);
      console.log(Disliked1);
    }
    const handleCLickDislike=()=>{
      if(Disliked1=="true"){
        Disliked1="false";
      }
      if(Disliked1==="false"){
        Disliked1="true";
      }

      Liked1="false"
      console.log(Liked1);
      console.log(Disliked1);
    }
    console.log(id );
    return( 
        <div class="ui card teal fluid">
        <div class="content">
          <div class="right floated meta"> <i
        className="trash alternate outline icon "
        style={{ color: "red", marginTop: "7px" }}  
        onClick={() => props.clickHander(id)}   
      ></i></div>
      <Link to={{ pathname: `/edit`, state: { post: props.post } }}>
      <div class="right floated meta"> <i
        className="edit alternate outline icon"
        style={{ color: "blue", marginTop: "7px" }} 
        
      ></i></div>
      </Link>
          <img className="ui avatar image" src={user} alt="user"/>
        </div>
        
        <div class="content">
        <div className="ui header large">{tittle}</div>
          <span class="right floated">
        <div>{details}</div>
            <i class="heart outline like icon"></i>
            17 likes
          </span>
          <i class="arrow down icon "></i>
          12 dislikes
        </div>
        <div class="extra content">
          <div class="ui large two buttons transparent left icon input">
            <div className="ui button " onClick={handleCLickLike}><i class="arrow down icon "></i></div>
            <div className="ui button " onClick={handleCLickDislike}><i class="heart outline like icon "></i></div>
            
          </div>
        </div>
      </div>);
}

export default CardPost;