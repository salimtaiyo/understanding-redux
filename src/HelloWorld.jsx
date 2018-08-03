import React, { Component } from 'react'

export class HelloWorld extends Component {
  render() {
    return (
      <div>
        {this.props.tech}
      </div>
    )
  }
}

export default HelloWorld
