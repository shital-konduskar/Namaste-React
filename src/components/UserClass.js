import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
        };
        console.log("child constructor");
    }

    componentDidMount(){
        console.log("child component did mount");
    }

    render(){
        console.log("child render");
        return(
        <div className="user-container">
            <h3>{this.state.count}</h3>
            <button
                onClick={()=>{
                    this.setState({
                        count : this.state.count +1
                    })
                }}
            >Increase Count</button>
            <h3>Name : {this.props.name} </h3>
            <h4>LOcation : Pune</h4>
            <h4>MObile : 0987654321</h4>
        </div>
        )
    }
}

export default UserClass;