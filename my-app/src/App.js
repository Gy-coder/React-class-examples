import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: undefined
    }
    this.divRef = React.createRef()
  }
  addN() {
    console.log('button被点击了')
    this.setState(state => ({
      n: state.n + 1
    }))
  }
  componentDidMount() {
    const node = this.divRef.current;
    const { width } = node.getBoundingClientRect()
    // this.setState(state => ({
    //   width: state.width
    // }))
    this.setState({ width })
  }
  render() {
    return (
      <div ref={this.divRef}>Hello , {this.state.width + 'px'}</div>
    )
  }
}
export default App;


