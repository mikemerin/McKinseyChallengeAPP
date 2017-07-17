import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import Times from '../components/Times'
import Slots from '../components/Slots'


export default class Calendar extends Component {

  constructor() {
    super()

    this.state = {
      height: 0
    }
  }

  // makes sure re-rendering fixes height to the times
  componentDidMount() {
    this.setState({
      height: window.document.getElementById('times').clientHeight
    })
  }

  render() {
    return (
      <Grid id="container">
        <Grid.Column className='right' width={2} textAlign="right">
          <Times />
        </Grid.Column>
        <Grid.Column className='left' width={12} color="grey">
          <Slots input={this.props.input} height={this.state.height} />
        </Grid.Column>
      </Grid>
    )
  }

}
