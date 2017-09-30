import React from 'react'

import profilePic from './gopartySignLogo_192.png'

class Bio extends React.Component {
  render() {
    return (
      <p>
        <img
          src={profilePic}
          alt={`thechicago.party`}
        />
        is the place to be...All Chicago Party Music{' '}
        <a href="https://twitter.com/kylemathews">
        Follow / Like / Whatever
        </a>
      </p>
    )
  }
}

export default Bio
