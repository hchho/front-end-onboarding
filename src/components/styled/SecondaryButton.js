import styled from 'styled-components'
import ButtonTemplate from './ButtonTemplate'

const SecondaryButton = styled(ButtonTemplate)`
    color: #558C8C;
    border: 1px solid #558C8C;
    background: white;

    :focus {
        outline: 0;
    }

    :active {
        background: #558C8C;
        color: white;
    }
`;

export default SecondaryButton