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
    return (
      <div>
        {this.state.n % 2 === 0 ? <div>偶数</div> : null}
        <button onClick={() => { this.addN() }}>+1</button>
      </div>
    )
  }
}
export default App;


