import styled from "styled-components";

export const MainStyled = styled.div `

    .main-wrapper {
        background-image: url(images/background.png);
        background-repeat: no-repeat;
        background-size: cover;
        padding: 5%;
        background-position: center;
    }

`

export const AboutMeStyled = styled.div `
    border-radius: 30px;
    width: 800px;
    margin: auto;
    background: white;

    .intro-wrapper-top {
        height: 50px;
        background: #d483d0;
        display: flex;
        align-items: center;
        justify-content: right;
        gap: 10px;
        padding: 0 15px;

        img {
            width: 30px;
        }
    }

    .iwp-img-popup{
        background: white;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        box-sizing: border-box;
        display: flex;
        place-content: center;
        align-items: center;

        img {
            width: 20px;
        }
    }

    .intro-wrapper {
        padding: 30px 50px;
        display: flex;
        place-content: center;
        align-items: center;
        gap: 10%;
        text-align: right;
    }

    .iwl-title {
        font-size: 60px;
    }

    .iwl-title-name {
        font-weight: bold;
    }

    .intro-wrapper-right {
        img {
            height: 350px;
        }
    }

    .iwl-txt {
        text-align: left;
    }

    .iwl-btns {
        display: flex;
        align-self: center;
        gap: 35px;
    }

    .intro-wrapper-left {
        display: flex;
        gap: 20px;
        flex-direction: column;

        button {
            font-size: 15px;
            padding: 10px;
            border-radius: 15px;
            box-shadow: 2px 2px 4px #00000029;
        }

        .iwl-btn-contact {
            border: 3px solid #d483d0;
            color: #d483d0;
        }

        .iwl-btn-learn {
            background: #d483d0;
            color: white;
        }
    }
`