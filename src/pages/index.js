import React from 'react'
import Link from 'gatsby-link'
import faker from 'faker'
import styled from 'styled-components'

import { StyledH1, StyledP, ColorPalette as CP } from '../theme/globalStyle'
import { ICONS } from '../theme/constants.js'
import Icon from '../layouts/components/Icon.js'
import Divider from '../layouts/components/Divider'
import { ButtonBig, ButtonSmall } from '../layouts/components/Button'
import { Pagination } from '../layouts/components/Pagination'
import Hero from '../layouts/components/Hero'

// for illustration of icons usage
const IconContainer = styled.div`
  width: 600px;
  padding: 0.5em;
  margin-top: 1em;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 1em;
  align-items: center;
  border: 2px solid ${CP.primary.dark};
`

const IndexPage = ({ data }) => (
  <div>
    <Hero type="main" title={data.site.siteMetadata.title} />
    <StyledH1>Hi people</StyledH1>
    <StyledP>{faker.lorem.paragraph()}</StyledP>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>

    {/* examples of icons usage */}
    <IconContainer>
      <Icon icon={ICONS.BRIEFCASE} size={100} color={CP.primary.dark} />
      <Icon
        icon={ICONS.BOOKS}
        size={100}
        color={CP.primary.dark}
        viewbox={`0 0 36 32`}
      />
      <Icon
        icon={ICONS.GROUP}
        size={100}
        color={CP.primary.dark}
        viewbox={`0 0 30 28`}
      />
      <Icon icon={ICONS.RULER} size={100} color={CP.primary.dark} />
      <Icon icon={ICONS.BLOG} size={100} color={CP.primary.dark} />
    </IconContainer>

    <IconContainer>
      <Icon
        icon={ICONS.BEAR_LIGHT}
        size={100}
        color={CP.primary.dark}
        viewbox={`0 0 512 496`}
      />
      <Icon
        icon={ICONS.BEAR_DARK}
        size={100}
        color={CP.primary.dark}
        viewbox={`0 0 512 496`}
      />
      <ButtonSmall>small</ButtonSmall>
      <ButtonBig>big</ButtonBig>
    </IconContainer>
    <Divider justify={'center'}>
      <h3>Hello world!</h3>
    </Divider>
    <Divider justify={'space-around'}>
      <Icon icon={ICONS.RULER} size={50} color={'white'} />
      <Icon icon={ICONS.BLOG} size={50} color={'white'} />
      <Icon icon={ICONS.RULER} size={50} color={'white'} />
    </Divider>
    <div style={{ display: 'flex', justifyContent: 'center', padding: '4px' }}>
      <Pagination pageNum={5} />
    </div>
  </div>
)

export const query = graphql`
  query HeroQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
