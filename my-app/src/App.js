import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      n: 0,
      arr: [1, 2, 3, 4]
    }
  }
  addN() {
    console.log('button被点击了')
    this.setState(state => ({
      n: state.n + 1
    }))

  }
  render() {
    let li = this.state.arr.map(item => <li>{item}</li>)
    return (
      <ul>
        {li}
      </ul>
    )
  }
}
export default App;


