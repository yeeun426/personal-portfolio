import styled from "styled-components";

export const MainStyled = styled.div `
    background: linear-gradient(110deg, #5468d6, #aa6ab6);
    width : 100vw;
    height: 100vh;
    color: white;
    font-family: S-CoreDream-3Light;
    font-weight: bold;
    line-height: 1.2;
    text-shadow: 2px 2px 1px black;
    font-size: 19px;

    .main-container {
        padding: 35px 15% 0;    
    }

    .main-menu {
        width: fit-content;
        text-align: center;
        padding: 3%;
        border-radius: 45%;
        box-shadow: pink 0px 0px 37px;
        background: #b4b4b4;
        position: absolute;

        animation: motion 0.3s linear 0s infinite alternate;
        margin-top: 0;
    }

    @keyframes motion {
        0% {margin-top: 0px;}
        100% {margin-top: 10px;}
    }

    .main-txt-left {
        position: absolute;
        left: 5%;
        padding: 0% 9%;
        font-size: 79px;
        top: 28%;
    }

    .main-txt-right {
        position: absolute;
        right: 4%;
        bottom: 20%;
        padding: 0% 9%;
        font-size: 79px;
    }

    .main-project {
        top: 3%;
        right: 38%;
    }

    .main-project::before {
        content: '';
        border: 15px solid #e91e6300;
        border-top: 45px solid #b4b4b4;
        bottom: -35%;
        right: 47%;
        position: absolute;
        transform: rotate(16deg);
    }

    .main-certificate {
        right: 26%;
        top: 13%;
    }

    .main-certificate::before {
        content: '';
        border: 15px solid #e91e6300;
        border-right: 45px solid #b4b4b4;
        bottom: -8%;
        left: -15%;
        position: absolute;
        transform: rotate(-49deg);
    }

    .main-experience {
        right: 20%;
        top: 35%;
    }

    .main-experience::before {
        content: '';
        border: 15px solid #e91e6300;
        border-right: 45px solid #b4b4b4;
        top: 46%;
        left: -27%;
        position: absolute;
        transform: rotate(-4deg);
    }
    
    .main-myimg {
        bottom: 0;
        position: absolute;
        left: 35%;

        img{
            width: 90%;
        }
    }
`