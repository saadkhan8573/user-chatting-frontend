import React from 'react'
import { ParagraphStyles } from './style'

export const Paragraph = ({ ParagraphText, size = "", weight = "", alignment = "", color = "", lineHeight = "" }) => {
    return (
        <ParagraphStyles
            size={size}
            weight={weight}
            alignment={alignment}
            color={color}
            lineHeight={lineHeight}
        >{ParagraphText}
        </ParagraphStyles>
    )
}