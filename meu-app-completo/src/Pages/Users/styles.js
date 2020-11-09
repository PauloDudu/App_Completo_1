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

    margin: 20px 100px;
    flex-direction: column;

    input {
        margin: 10px;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 6vh;
        margin-left: auto;
    }
`;

export const UserContainer = styled.div`

    div.divInfo {
        display: flex;
        justify-content: center;
        align-items: center;

        h6 {
            margin-top: 8px;
        }
    }

    strong {
        background: transparent;
        color: #260505;
        margin: 3px 3px;
    }
    
    h6  {
        margin-right: 5px;
    }

    div.buttonContainer {
        display: flex;
        align-items: center;
        justify-content: end;
        margin-left: auto;
    }



`;

export const User = styled.div`
    background: #ECE6D6;
    display: flex;
    align-items: center;
    margin: 20px auto;
    border-radius: 12px;
    width: 70vw;
    padding: 20px;

    button {
        width: 8vw;
        height: 4vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px 2px;
        transition: .3s;
        padding: 12px;

        &:hover {
            opacity: .7;        
        }
    }
`;