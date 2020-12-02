import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increment(){
        /*this.setState({
            count:this.state.count+1
        },
        ()=>{
            console.log("Callback value: ",this.state.count)
        })
        */
       this.setState((previousState)=>({
            count: previousState.count+1
       }))

        console.log("sync count value from console is: ", this.state.count)
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <h1>Counter- {this.state.count}</h1>
                <button onClick={()=>this.incrementFive()}>Increase value</button>
            </div>
        )
    }
}

export default Counter
