import React,{useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link, BrowserRouter} from 'react-router-dom';
import Header from './Header';
import api from "../api/posts";
import AddPost from './AddPost';
import PostList from './PostList';
import Liked from './Liked';
import Disliked from './Disliked';
import { uuid } from "uuidv4";
import EditPost from './EditPost';
function App() {
  const [posts,setPosts]= useState([]);
  const [searchTerm,setSearchTerm]=useState("");
  const [searchResults,setSearchResults]=useState([]);
  
   //RetrieveContacts
   const retrievePosts = async () => {
    const response = await api.get("/posts");
    return response.data;
  }; 

  const updatePostHandler = async (post) => {
    const response = await api.put(`/Posts/${post.id}`, post);
    const { id, tittle, details } = response.data;
    setPosts(
      posts.map((post) => {
        return post.id === id ? { ...response.data } : post;
      })
    );
  };

  const addPostHandler = async (post) => {
    
    const request = {
      id: uuid(),
      ...post,
    };

    const response = await api.post("/posts", request);
    setPosts([...posts, response.data]);
  };
  const removePostHandler = async (id) => {
    await api.delete(`/posts/${id}`);
    const newPostList = posts.filter((post) => {
      return post.id !== id;
    });

    setPosts(newPostList);
  };
  const searchHandler =(searchTerm)=>{
    setSearchTerm(searchTerm);
    if(searchTerm!==""){
      const newPostlist  = posts.filter((post)=>{
      return Object.values(post).join(" ").toLowerCase().includes(searchTerm.toLowerCase()); 
      })
      setSearchResults(newPostlist);

    } else {
      setSearchResults(posts);
    }
  };

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);
    const getAllCOntacts = async () => {
      const allContacts = await retrievePosts();
      if (allContacts) setPosts(allContacts);
    };

    getAllCOntacts();
  }, []);

  
  return (
    <div >
    <Header/>
    <div className="create">
    <Router>
    
    <Switch>

    <Route path="/add" component={()=><AddPost addPostHandler={addPostHandler}/>}/>
    <Route path="/edit" component={()=><EditPost updatePostHandler={updatePostHandler}/>}/>
    <Route path="/" exact render={(props)=>(
      <PostList {...props} posts={searchTerm<1? posts:searchResults}
        term={searchTerm}
        searchKeyword={searchHandler}
        getContactId={removePostHandler}
      />
    )}/> 
    <Route path="/liked" component={Liked} />
    <Route path="/disliked" component={Disliked}/>

    </Switch>
    
    
    
    </Router>
    
    
    </div>
    </div>
  );
}

export default App;
