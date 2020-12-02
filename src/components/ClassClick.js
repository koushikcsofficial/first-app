import React, { Component } from 'react'

class ClassClick extends Component {
    ClickHandler(){
        console.log('Class component button clicked')
    }

    render() {
        return (
            <div>
                <button onClick={this.ClickHandler}>Click Class Component</button>
            </div>
        )
    }
}

export default ClassClick
