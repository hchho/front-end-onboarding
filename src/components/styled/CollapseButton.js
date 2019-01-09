import styled from 'styled-components'

const CollapseButton = styled.button`
    background-color: none;
    :after {
        float: right;
    }

    &.collapsible:after {
        content: '\\02795'; /* Unicode character for "plus" sign (+) */
        font-size: 13px;
        color: black;
    }
  
    &.active:after {
        content: '\\2796'; /* Unicode character for "minus" sign (-) */
    }
`;

export default CollapseButton