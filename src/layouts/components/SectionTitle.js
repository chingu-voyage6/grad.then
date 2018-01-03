import { StyledH2, media } from '../../theme/globalStyle'

const SectionTitle = StyledH2.extend`
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.primary.light};
  ${media.tablet`
    font-size: 1.8rem;
  `} ${media.phone`
    font-size: 1.46rem;
  `};
`
export default SectionTitle
