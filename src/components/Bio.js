import React from 'react'
import styled from 'styled-components'

import profilePic from './gopartySignLogo_192.png'



class Bio extends React.Component {
  render() {
    return (
      <p>
        <Title>The Chicago Party</Title>
        <img
          src={profilePic}
          alt={`thechicago.party`}
        />
        {/* is the place to be...All Chicago Party Music{' '}
        <a href="https://twitter.com/kylemathews">
        Follow / Like / Whatever
        </a> */}
      </p>
    )
  }
}

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;

export default Bio
