import React from 'react'

/*function Greet(){
    return <h1>Hello Koushik</h1>
}
*/

/*const Greet = props =>{
    return <h1>Hello {props.name}</h1>
}
*/

//Example of destructure

const Greet = ({name})=>{
return <h1>Hello {name}</h1>
}

export default Greet