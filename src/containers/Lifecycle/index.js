import React, {Component } from 'react'

class LifecycleContainer extends Component {
 
  constructor(props) {
    console.log('Constructor call')
    super(props)
    this.state = {
      user: 'korisnik',
      oldValue: ''
    }
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('getDerivedStateFromProps')
    return {
      derivedUser: nextProps.user
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Snapshot before Update')
    return {
      snapshopUser: prevState.user,
      snapshotDerived: prevState.derivedUser,
      snapshotProps: prevProps.user
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot)
    console.log('ComponentDidUpdate')
    if(this.state.oldValue !== snapshot.snapshopUser) {
      this.setState({oldValue: snapshot.snapshopUser})
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('ShouldComponentUpdate')
    if(nextProps.user !== this.props.user) {
      return true
    } 
    return false
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount')
  }


  componentDidMount() {
    console.log('ComponentDidMount')
  }


  renderData = () => {
    return (
      <React.Fragment>
        <p>User is state-a: {this.state.user}</p>
        <p>Derived state: {this.state.derivedUser} </p>
        <p>Props: {this.props.user}</p>
      </React.Fragment>
    )
  }

  render() {
    console.log('Render Called')
    return (
      <>
        <h1>Hello World</h1>
        {this.renderData()}
      </>
    )
  }
}

export default LifecycleContainer