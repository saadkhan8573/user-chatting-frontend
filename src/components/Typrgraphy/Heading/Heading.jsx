import React from 'react'
import { HeadingStyles } from './style'

export const Heading = ({ HeadingText, size, weight, alignment, color, lineHeight,transform }) => {
  return (
    <HeadingStyles
      size={size}
      weight={weight}
      alignment={alignment}
      color={color}
      lineHeight={lineHeight}
      transform={transform}
    >{HeadingText}
    </HeadingStyles>
  )
}