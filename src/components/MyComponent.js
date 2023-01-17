import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: "Thanh",
        age: 17
    };
    handleClick(event){
        console.log(">> click me")
        console.log(event.target)
    }
    handleOnMouseOver(event){
        console.log("On Mouse Over")
    }
    //JSX
    render(){
        return (

            <div>

                My name is {this.state.name} and I am {this.state.age} years old
                <button onClick={this.handleClick}>click me</button>
                <button onMouseOver={this.handleOnMouseOver}>hover me</button>

            </div>
        );
    }
}

export default MyComponent;