import { StyledH2, media } from '../../theme/globalStyle'

const SectionTitle = StyledH2.extend`
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.primary.light};
  ${media.desktop`
    margin: 1.5rem 0;
  `}
  ${media.tablet`
    font-size: 1.8rem;
    margin: 0.5rem 0;
  `} ${media.phone`
    font-size: 1.46rem;
    padding: 1.4rem;
  `};
`
export default SectionTitle
