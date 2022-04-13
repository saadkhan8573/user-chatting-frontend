import styled from 'styled-components';

export const ChatDetailsStyle = styled.div`
    
    width : 100%;
    height : 100vh;
    padding: 60px 50px;
    background-color: #f1f1f1;
    margin: auto 0;
    display: flex;
    

    .details{
        width : 100%;
        height: 100%;
        padding: 20px 30px;
        overflow-y: auto;
        background-color: white;
        display: flex;
        flex-direction: column;
        form {
            width : 100%;
            margin-top : auto;
             input{
                 border : 1px solid black;
             }
        }
    }
   
`;