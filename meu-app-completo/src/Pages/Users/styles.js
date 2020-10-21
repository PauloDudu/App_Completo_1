import styled from 'styled-components';

export const Body = styled.div`
    background: #C8C8C8;
    height: 100%;

`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 40px;

`;

export const FormContainer = styled.form`

    margin: 0;

    div {
        margin: 40px auto;
        padding: 20px;
        background: #ECE6D6;
        width: 60vw;
        border-radius: 5px;
        display: flex;
    }

    input {
        margin: 10px;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 6vh;
        margin: auto;
    }
`;

export const UserContainer = styled.div`

    strong {
        background: transparent;
        color: #260505;
        margin: 3px 1px;
    }



`;

export const User = styled.div`
    background: #ECE6D6;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 20px auto;
    border-radius: 12px;
    width: 40vw;

    button {
        width: 10vw;
        height: 5vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px auto;
        transition: .3s;

        &:hover {
            opacity: .7;        
        }
    }
`;