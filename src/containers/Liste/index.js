import React, {PureComponent} from 'react'
import Child from '../Child'
const kursevi = ['react', 'angular', 'vue', 'reactivnost']

class ListContainer extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      names: kursevi,
      a:0,
      canDisplay: false,
      query: ''
    }
  }

  addToCourses = (a) => {
    const names = [...this.state.names, 'novi kurs']
    this.setState({names, a: ++a})
  }

  togglePera = () => {
    this.setState({canDisplay: !this.state.canDisplay})
  }

  handleSearch = (event) =>{
    this.setState({[event.target.name]: event.target.value})
  }

  renderSearchResults = () => {
    return this.state.names.filter((item, index) => {
      return item.includes(this.state.query)
    })
  }

  renderCourses = () => {
    return this.state.names.map((kurs, index)=> {
      return (
        <div key={`kurs_${index}`}>
           <b>{kurs}</b>
        </div>
      )
    })
  }

  renderSwitch = () => {
    switch(this.state.a) {
      case 0: return<p>nula</p>
      case 1: return<p>1</p>
      case 2: return<p>dva</p>
      default: return <p>nema</p> 
    }
  }

  render() {
    const username = 'neki username'
    if (this.state.a>10) {
      return (
        <div>
          Nema više
        </div>
      )
    }

    return (
      <div>
      <button onClick={this.addToCourses}>Add new Course</button>
      <button onClick={() => this.addToCourses(2)}>Add new Course++</button>
      <button onClick={this.togglePera}>Toggle Pera </button>
      <input onChange={this.handleSearch} name='query' value={this.state.query} placeholder='Search'/>
      <div>{this.state.query.length > 0 ? this.renderSearchResults() : this.renderCourses()}</div>
      {/* <div>{this.renderSwitch()}</div> */}
      {this.state.canDisplay && <h1>Pera perić</h1>}
      {/* <Child name={username} /> */}
      </div>
    )
  }
}


export default ListContainer