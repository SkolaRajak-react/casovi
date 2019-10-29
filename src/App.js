import React from 'react';
// import SignupComponent from './containers/SingnupForm/SignupForm'
import LifecycleContainer from './containers/Lifecycle'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: 'None',
      unmount: false
    }
  }

  componentDidMount() {
    setTimeout(()=> {
      this.setState({user: 'Jovan', unmount: true})
    }, 8000)
  }

  render() {
  return (
    <div>
      {!this.state.unmount && <LifecycleContainer user={this.state.user} /> }
    </div>
  );
  }
}

export default App;
