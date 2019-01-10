import styled from 'styled-components'
import ButtonTemplate from './ButtonTemplate'

const PrimaryOpposingButton = styled(ButtonTemplate)`
    color: #231123;
    border: 1px solid #231123;
    background: white;

    :focus {
        outline: 0;
    }

    :active {
        background: #231123;
        color: white;
    }
`;

export default PrimaryOpposingButton