import styled from "styled-components";
import { StyledH2, StyledH3, media } from '../theme/globalStyle'

export const SectionTitle = styled(StyledH2)`
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.primary.light};
  ${media.desktop`
    margin: 1.5rem 0;
  `};
  ${media.tablet`
    font-size: 1.8rem;
    margin: 0.5rem 0;
  `};
  ${media.phone`
    font-size: 1.46rem;
    padding: 1.4rem;
  `};
`

export const LoadingContent = styled(StyledH3)`
  grid-area: ${props => props.area};
  color: ${props => props.theme.primary.light};
  text-align: center;
  font-size: 2rem;
`
