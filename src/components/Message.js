import React, {Component} from 'react'

class Message extends Component{

    constructor(){
        super()
        this.state = {
            msg:"Welcome visitor"
        }
    }

    ChangeMsg() {
        this.setState({
            msg:"Thanks for subscribing"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={()=>this.ChangeMsg()}>Subscribe</button>
            </div>
        )
    }
}

export default Message