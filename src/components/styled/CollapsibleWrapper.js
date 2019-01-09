import styled from 'styled-components'
import PanelContentWrapper from './PanelContentWrapper'

const CollapsibleWrapper = styled(PanelContentWrapper)`
    height: 100%;

    &.visible {
        opacity: 1;
        max-height: 1000px;
        transition: all 0.25s ease-out;
    }

    &.hidden {
        opacity: 0.25;
        max-height: 50px;
        transition: all 0.25s ease-in;
        overflow: hidden
    }
`;

export default CollapsibleWrapper