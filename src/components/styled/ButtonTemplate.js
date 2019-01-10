import styled from 'styled-components'

const ButtonTemplate = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    overflow-x: auto;
    height: 30px;
    font-size: 1em;
    margin: 5px;
    border-radius: 5px;

    :focus {
        outline: 0;
    }
`;

export default ButtonTemplate