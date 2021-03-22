import React from 'react';
import {withRouter} from 'react-router-dom';

class EditPost extends React.Component {
   
    constructor(props) {
        super(props);
        const { id, tittle, details } = this.props.location.state.post;
        this.state = {
          id,
          tittle,
          details,
        };
      }
    
    
    update = (e)=>{
        e.preventDefault();
        if(this.state.tiitle==="" || this.state.details===""){
            alert("All the fileds are mandaotry");
            return
        }
        this.props.updatePostHandler(this.state);
        this.setState({
            tittle:'',
            details:''
        });
        this.props.history.push('/');
    };

render(){    return(
        <div className="ui main">
            <h2>Edit Post</h2>
            <form className="ui form " onSubmit={this.update}>
                <div className="ui field">
                    <label>Post Tittle</label>
                    <input 
                    type="text" 
                    name="tittle" 
                    placeholder="Post tittle"
                    value={this.state.tittle} 
                    onChange={(e)=> this.setState({tittle:e.target.value})}></input>
                </div>
                <div className="ui field">
                    <label>Write your post here</label>
                    <input 
                    type="text" 
                    name="details" 
                    placeholder="Write your post here"
                    value={this.state.details} 
                    onChange={(e)=> this.setState({details:e.target.value})}></input>
                </div>
                <button className="ui button blue submit">Update Post</button>
            </form>
        </div>
    );

}
}

export default  withRouter(EditPost);