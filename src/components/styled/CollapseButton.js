import styled from 'styled-components'

const CollapseButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    height: 30px;
    width: 30px;
    text-align: center;
    font-size: 1em;
    color: white;

    :after {
        float: right;
    }

    :focus {
        outline: 0;
    }

    :hover {
        color: #E8DB7D
    }

    :active {
        color: #558C8C
    }
`;

export default CollapseButton