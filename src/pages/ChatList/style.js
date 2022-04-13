import styled from 'styled-components';

export const ChatListStyle = styled.div`
    width : 100%;
    height : 100vh;
    padding: 60px 50px;
    background-color: #f1f1f1;
    margin: auto 0;

    .list{
        width : 30%;
        height: 100%;
        overflow-y: auto;
        background-color: white;

        .chat{
            padding: 10px 20px;
            cursor: pointer;
            border-bottom: 1px solid gray;
            display: flex;
            align-items: center;
            column-gap : 15px;

            .icon{
                background-color: gray;
                width : 50px;
                height: 50px;
                border-radius: 500px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size : 30px;
                color: white;
            }
        }
    }
`;