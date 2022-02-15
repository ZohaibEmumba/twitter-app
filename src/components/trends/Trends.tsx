import React from 'react'
import { FaSistrix } from 'react-icons/fa'
import { TrendIcon, TrendsSearch, TrendsSection } from './style'

const Trends = () => {
  return (
    <TrendsSection>
    <TrendsSearch>
      <input
        type="text"
        className="trend__control"
        placeholder="Search Twitter"
      />
      <TrendIcon>
        <FaSistrix className="search" />
      </TrendIcon>
    </TrendsSearch>
    
  </TrendsSection>
  )
}

export default Trends