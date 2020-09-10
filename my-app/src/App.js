import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      n: 0
    }
  }
  addN() {
    console.log('button被点击了')
    this.setState(state => ({
      n: state.n + 1
    }))
    this.setState(state => ({
      n: state.n - 1
    }))
  }
  shouldComponentUpdate(newProps, newState) {
    if (newState.n === this.state.n) {
      return false
    } else {
      return true
    }
  }
  render() {
    console.log('render执行了')
    return (
      <div>
        {this.state.n}
        <button onClick={() => { this.addN() }}>+1</button>
      </div>
    )
  }
}
export default App;


