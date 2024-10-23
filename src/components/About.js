import React from 'react';
import User from './User';
import UserClass from './UserClass';

class About extends React.Component{
    constructor(){
        super();
        console.log("parent constructor");
    }

    componentDidMount(){
        console.log("parent component did mount");
    }

    render(){
        console.log("parent render");
        return(
            <div>
                <h2>About Us Page</h2>
                <h3>This is react series</h3>
                <UserClass name="Shital" location="Pune" />
            </div>
        )
    }
}


export default About;