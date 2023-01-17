import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: "Dat",
        age: 17
    };
    handleClick(event){
        console.log(this.state.name)
    }
    handleOnChangeInput(event){
        this.setState({
            name: event.target.value
        })
    }
    handleOnSubmit(event){
        event.preventDefault()
        console.log(this.state)
    }
    //JSX
    render(){
        return (

            <div>

                My name is {this.state.name} and I am {this.state.age}
                <button onClick={(event) => {this.handleClick(event)} }>click me</button>
                <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
                    <input 
                    type="text"
                    onChange={(event) => {this.handleOnChangeInput(event)}}
                     />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;