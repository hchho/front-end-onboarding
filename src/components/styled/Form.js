import styled from 'styled-components'

const Form = styled.form`
    color: #666;

    select {
        background-color: white;
        height: 24px;
        width: 300px;
    }

    select:focus {
        outline: 0;
    }

    .inactive {
        color: lightgrey;
    }

    div.form-group {
        display: flex;
        flex-direction: row;
        margin: 5px;
    }

    div.form-group label {
        display: flex;
        width: 10em;
    }
`;

export default Form