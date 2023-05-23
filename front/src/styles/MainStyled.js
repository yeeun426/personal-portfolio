import styled from "styled-components";

export const MainStyled = styled.div `
    background-color: black;
    width : 100vw;
    height: 100vh;
    color: white;
    
    .main-container {
        padding-top: 35px;
    }

    .main-intro {
        background: #b4b4b4;
        width: fit-content;
        text-align: center;
        padding: 5%;
        border-radius: 45%;
        margin: auto;
        box-shadow: yellow 0px 0px 37px;
        position: relative;

        animation: motion 0.3s linear 0s infinite alternate;
        margin-top: 0;
    }

    .main-intro::before {
        content: '';
        border-top: 45px solid #b4b4b4;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        bottom: -20%;
        left: 50%;
        position: absolute;
    }

    @keyframes motion {
        0% {margin-top: 0px;}
        100% {margin-top: 10px;}
    }
    
`