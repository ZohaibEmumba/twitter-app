import React from 'react'
import CreateTweet from '../createtweet/CreateTweet'
import { HomePage , PostHome} from './style'

const FixedHome = () => {
  return (
    <HomePage>
        <PostHome>Home</PostHome>
        <CreateTweet />
    </HomePage>
  )
}

export default FixedHome