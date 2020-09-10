import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      n: 0
    }
  }
  addN = () => {
    this.setState({ n: this.state.n + 1 })
    this.setState({ n: this.state.n + 1 })
  }
  addN2 = () => {
    this.setState((state) => { return { n: state.n + 1 } })
    this.setState((state) => ({ n: state.n + 1 }))
  }
  addN3 = () => {
    this.setState(
      { n: this.state.n + 1 }, () => {
        console.log(1)
      }
    )
    this.setState(
      { n: this.state.n + 1 }, () => {
        console.log(2)
      }
    )
  }
  render() {
    return (
      <div className="App">
        hi
        <button onClick={() => this.addN3()}>+1</button>

        <B name={this.state.n} />
      </div>
    );
  }
}

class B extends React.Component {
  UNSAFE_componentWillReceiveProps(newProps, newContext) {
    console.log('旧的props')
    console.log(this.props)
    console.log('prop执行了')
    console.log('新的props')
    console.log(newProps)
  }
  render() {
    return (
      <div>my name is B This is {this.props.name}
      </div>
    )
  }
}


// class App extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div>
//         I am App
//         <B name="B的外部数据" />
//       </div>
//     )
//   }
// }


// class B extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div>
//         I am B
//         <p>This is my props {this.props.name}</p>
//       </div>
//     )
//   }
// }
export default App;
