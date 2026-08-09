import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor(){
        super();
        this.state={

            count:0
        }
        
    }

    componentDidMount(){
        console.log("toheed rehman")
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=> this.setState({count:this.state.count+1})}>click me to update value</button>
            </div>
        );
    }
}

export default LifeCycle;
