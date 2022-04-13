import styled from "styled-components";

export const HeadingStyles = styled.h3`
        font-family: Poppins;
        font-size: ${({size}) => (size || "25px")};
        font-style: normal;
        font-weight: ${({weight}) => (weight || 600)};
        line-height: ${({lineHeight}) => (lineHeight || "40px")};
        letter-spacing: 0em;
        text-align: ${({alignment}) => (alignment || "left")};
        color : ${({color}) => (color || "black")};
        text-transform : ${({transform}) => (transform || "black")};
`;