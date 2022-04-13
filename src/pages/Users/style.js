import styled from "styled-components";

export const UsersStyle = styled.div`
    padding: 30px 40px;
    display:grid;
    grid-template-columns: repeat(4,1fr);
    gap : 20px;

    .users{
        background-color: white;
        box-shadow : 0px 5px 10px #000000;
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap : 20px;
        cursor: pointer;

        .avatar{
            width : 70px;
            height : 70px;
            background-color: gray;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 25px;
            font-weight: bold;
            color : white;
        }
    }
`;