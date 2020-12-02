import React,{Component} from 'react'

class Welcome extends Component{
    /*render() {

        return <h1>This is a class component, {this.props.name}</h1>
    }
    */
   //Example of destructure
   render(){
       const {name} = this.props
        return <h1>This is a class component, {name}</h1>
   }
}

export default Welcome