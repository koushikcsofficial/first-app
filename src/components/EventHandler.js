import React, { Component } from 'react'

class EventHandler extends Component {

    constructor(props){
        super(props)
        this.state = {
            headline: "Hi, Koushik"
        }

        this.clickEvent = this.clickEvent.bind(this)
    }

    clickEvent(){
        this.setState({
            headline:"You have been logged out"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.headline}</h1>
                <button onClick={this.clickEvent}>Log out</button>
            </div>
        )
    }
}

export default EventHandler
