import styled from 'styled-components'
import PanelContentWrapper from './PanelContentWrapper'

const CollapsibleWrapper = styled(PanelContentWrapper)`
    height: 100%;

    &.visible {
        opacity: 1;
        max-height: 1500px;
        transition: all 0.25s ease-out;
    }

    &.hidden, &.preview {
        opacity: 0.25;
        transition: all 0.25s ease-in;
        overflow: hidden
    }
    
    &.hidden {
        max-height: 0px;
    }

    &.preview {
        max-height: 50px;
    }
`;

export default CollapsibleWrapper