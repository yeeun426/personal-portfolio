import styled from "styled-components";

export const IntroStyled = styled.div `
    height: 100vh;

    .aboutme-wrapper {
        margin: 35px 0;
    }

    .aboutme-top {
        display: flex;
        align-items: center;
        place-content: center;
        gap: 45px;
        height: 400px;
    }

    .aboutme-img {
        height: 300px;
    }

    .aboutme-txt{
        text-align: left;
        line-height: 1.35;
    }

    .portfolio-title {
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 15px;
        text-align: left;
    }

    .aboutme-myinfo {
        display: flex;
        gap: 10px;
        flex-direction: column;
        margin-top: 35px;
    }

    .aboutme-myinfo-items {
        display: flex;
    }

    .aboutme-myinfo-items :nth-child(1) {
        width: 130px;
        text-align: left;
    }

    .aboutme-myinfo-items :nth-child(2) {
        width: 70px;
        text-align: left;
    }

    .aboutme-bottom {
        text-align: -webkit-center;
    }

    .aboutme-bottom-contents {
        background: #8080800d;
        width: fit-content;
        border-radius: 100px;
        padding: 0 60px;
        box-shadow: #80808036 13px 15px 30px;

        display: flex;
    }
    
    .aboutme-skill-img {
        width: 45px;
    }

    .aboutme-skill-title {
        font-size: 21px;
        font-weight: bold;
    }

    .aboutme-skills-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 150px;
        border-radius: 50%;
        height: 170px;
        padding: 15px;
    }

    .aboutme-skills-item :nth-child(3) {
        line-height: 1.3;
    }
`