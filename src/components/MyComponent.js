import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: "Thanh",
        age: 17
    };

    //JSX
    render(){
        return (

            <div>

                My name is {this.state.name} and I am {this.state.age} years old
            </div>
        );
    }
}

export default MyComponent;