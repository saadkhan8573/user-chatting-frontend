import styled from "styled-components";

export const ParagraphStyles = styled.p`
    font-family: Poppins;
    font-size: ${({size}) => (size || "15px")};
    font-style: normal;
    font-weight: ${({weight}) => (weight || 400)};
    line-height: ${({lineHeight}) => (lineHeight || "34px")};
    letter-spacing: 0em;
    text-align: ${({alignment}) => (alignment || "left")};
    color : ${({color}) => (color || "black")};
`;