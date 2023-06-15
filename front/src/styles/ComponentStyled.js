import styled from "styled-components";

export const HeaderStyled = styled.div `
    grid-template: auto / repeat(3, 1fr);
    display: grid;
    grid-column: 1 / auto;
    gap: 10px;
    margin: 0px 100px;
    align-items: center;

    .header-left {
        display: flex;
        align-items: center;
        gap: 10px;

        img {
            width: 30px;
            border: 1px solid #c1bfbf;
            padding: 10px;
            border-radius: 50px;
        }
    }

    .header-logo {
        width: 95px;
        justify-self: center;
    }

    .header-right{
        display: flex;
        gap: 50px;
        font-size: 17px;
    }
    
`