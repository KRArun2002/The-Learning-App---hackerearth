import React, { Component } from 'react'

import ParticlesBg from 'particles-bg'

class Example extends Component {
  render () {
    return (
        <>
      <div>...</div>
      <ParticlesBg color="#ff0000" num={200} type="circle" bg={true} />
      </>
    )
  }
}

export default Example;