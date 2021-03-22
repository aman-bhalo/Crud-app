import React,{useRef} from 'react';
import PostCard from './PostCard';
import {Link} from 'react-router-dom';

const PostList = (props) => {
  const input= useRef("");
  const deletePostHandler = (id) => {
    props.getContactId(id);
  };
  const renderPosts = props.posts.map((post)=>{

  return(

         <PostCard post={post}
        clickHander={deletePostHandler}
        ></PostCard>
  
  );
});
const getSearchTerm=()=>{
  props.searchKeyword(input.current.value);
}
   return(
     <div>
    <div className=" ui clearing segment  fluid">
    <Link to="/liked"> <button className="ui round button teal right floated">Liked</button></Link>
    <h2 className="center">Your Feed
    <Link to="/add"> <button className="ui  button teal right floated">Add Post</button></Link>
    
    
    </h2>
    
    <div className="ui search">
      <div className="ui icon input">
        <input ref={input} type="text" placeholder="Search Post" className="prompt right"value={prompt.term} onChange={getSearchTerm} />
        <i className="search icon" />
      </div>
    </div>
    
</div>
<div className="ui celled list">{renderPosts}</div> 
</div>
   );
    
}

export default PostList;