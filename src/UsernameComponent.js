import React, {memo} from 'react'

const UsernameComponent = props => {
 return (
  <div>
    {!props.dugmence && <h1>{props.username}</h1>}
  </div>
 )
}

export default memo(UsernameComponent)