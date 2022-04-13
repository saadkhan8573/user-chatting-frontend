import React from 'react'
import { ButtonStyle } from './style'

export const Button = ({ type, text }) => {
    return (
        <ButtonStyle type={type || "ButtonStyle"}>{text}</ButtonStyle>
    )
}