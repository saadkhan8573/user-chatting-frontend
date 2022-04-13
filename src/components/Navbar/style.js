import styled from 'styled-components';

const media = {
    mobile: '@media(max-width : 998px)'
}

export const Wrapper = styled.div`
    width: 100%;
    height: 90px;
    background: #2B3037;
    padding : 0 80px;
    display: flex;
    justify-content: space-between;

    .logo {
        display: flex;
        align-items: center;
        column-gap : 5px;
        text-decoration: none;

        img{
            width : 75px;
            object-fit: cover;
        }

        span{
            font-family: Roboto;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;
            color: white;
        }
    }

    .navItems{
        display: flex;
        align-items: center;
        column-gap : 50px;

        li{
            list-style-type: none;

            a{
                text-decoration: none;
                color : white;
                font-family: Poppins;
                font-size: 18px;
                font-style: normal;
                font-weight: 500;
                line-height: 33px;
                letter-spacing: 0em;
            }
        }
    }

    ${media.mobile} {
        padding : 0px;
        

       .navItems{
            display: none;
        }

        .mobile-navItems{
            position: absolute;
            top : 0;
            left: 0;
            background-color: white;
            width : 100%;
            transform: translateY(${({translate}) => translate});
            margin-right: 100px;
            transition: all 1s ease-out;
            padding: 10px 0;
            z-index : 50;

            li{
            list-style-type: none;
            padding: 3px 10px;
            transition: all 1s ease-out;

            a{
                transition: all 1s ease-out;
                text-decoration: none;
                color : black;
                font-family: Poppins;
                font-size: 18px;
                font-style: normal;
                font-weight: 500;
                line-height: 33px;
                letter-spacing: 0em;
            }
        }
        }
    }

    .hamburger{
        display : none;

        ${media.mobile} {
            margin-right: 15px;
            display: block;
            display: flex;
            align-items: center;
            z-index: 100;
            font-size: 22px;
            color: ${({hamburgerColor}) => hamburgerColor};
        }
    }
    
`;