import React, { PureComponent } from 'react'
import './styles.css'
import UsernameComponent from './components/Username/UsernameComponent'

class SignupForm extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      username: 'Jovan',
      password: '',
      isButtonVisible: true,
    }
  }

  handleClick = (event) => {
    this.setState({isButtonVisible: false})
  }

  handleInput = event => {
     this.setState({[event.traget.name]: event.target.value})
  }

  render() {
    const {username, isButtonVisible} = this.state
    return (
     <div className='container'>
       <UsernameComponent username={username} dugmence={isButtonVisible} />
       <input name='username' placeholder='Username' onChange={this.handleInput} />
       <input name='password' placeholder='Password' onChange={this.handleInput} />
       <button onClick={this.handleClick}>Click me</button>
     </div>
    )
  }
}

export default SignupForm