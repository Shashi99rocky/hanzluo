import React, { Component } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import './music.less'

class Music extends Component {
  state = {}
  render() {
    return (
      <div>
        TODO
        <AudioPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
      </div>
    )
  }
}

export default Music
