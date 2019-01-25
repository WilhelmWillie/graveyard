import React, { Component } from 'react'

import Header from '../components/Header'

import Head from 'next/head'

class Landing extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Graveyard</title>
        </Head>

        <Header />
      </div>
    );
  }
}

export default Landing
