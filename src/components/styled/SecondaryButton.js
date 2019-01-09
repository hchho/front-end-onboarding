import styled from 'styled-components'

const SecondaryButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
align-self: center;
    color: #558C8C;
    border: 1px solid #558C8C;
    background: white;
    width: 100px;
    height: 30px;
    font-size: 1em;
    margin: 5px;
    border-radius: 5px;

    :focus {
        outline: 0;
    }

    :active {
        background: #558C8C;
        color: white;
    }
`;

export default SecondaryButton