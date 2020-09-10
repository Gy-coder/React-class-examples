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

  }
  render() {
    let message
    console.log(this.state.n)
    if (this.state.n % 2 === 0) {
      message = (
        <div>偶数</div>
      )
    } else {
      message = (
        <span>奇数</span>
      )
    }
    return (
      <div>
        {message}
        <button onClick={() => { this.addN() }}>+1</button>
      </div>
    )
  }
}
export default App;


