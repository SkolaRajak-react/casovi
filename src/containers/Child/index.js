import React from 'react'

const GrandChild = props => <h1>Hello from Grandchild {props.unuk}</h1>

const Child = props => <h1><GrandChild unuk={props.name}/></h1>

export default Child