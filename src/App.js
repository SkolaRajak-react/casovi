import React from 'react';
// import SignupComponent from './containers/SingnupForm/SignupForm'
// import LifecycleContainer from './containers/Lifecycle'
// import EventHandlerContainer from './containers/EventHandling'
import ListContainer from './containers/Liste'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: 'None',
      unmount: false
    }
  }

  render() {
  return (
    <div>
      <ListContainer />
    </div>
  );
  }
}

export default App;