import styled from 'styled-components'
import ButtonTemplate from './ButtonTemplate'

const PrimaryButton = styled(ButtonTemplate)`
    color: white;
    background: #231123;
    border: none;
    
    :focus {
        outline: 0;
    }

    :active {
        background: #E8DB7D;
        color: white;
    }
`;

export default PrimaryButton