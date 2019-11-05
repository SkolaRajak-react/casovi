import React, {PureComponent} from 'react'

class EventHandlerContainer extends PureComponent {

  handleClick = (event) => {
    console.log(event)
  }

  handleInput = (name) => (event) => {
    console.log(name)
    console.log(event.target.value)
  }

  render() {
    return(
      <div>
      <button onClick={this.handleClick}>
        Click me!
      </button>
      <input onChange={this.handleInput('username')} />
      <input onChange={this.handleInput('password')} />
     </div>
    )
  }
}

export default EventHandlerContainer