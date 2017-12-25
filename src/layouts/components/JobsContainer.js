import React from 'react'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

import JobsFilter from './JobsFilter'
import JobsList from './JobsList'
import Pagination from './Pagination'
import { fakeCallToAPI } from '../utils/helpers'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 1rem;
  grid-template-areas:
    '. filt filt filt lst lst lst lst lst lst lst .';
  margin-top: 2.5rem;
`

const List = styled.div`
  grid-area: lst;
  margin: 0;
  padding: 0.3rem;
`

class JobsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filter:['any','any','any','any'],
      query: [{
        title:'',
        type: '',
        role: '',
        location: '',
        description: ''
      }]
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitQuery = this.submitQuery.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount(){
    const result = fakeCallToAPI();
    this.setState({
      query: result
    });
  }

  handleChange(num, data) {
    let arr = this.state.filter.slice();
    arr[num-1] = data;

    this.setState({
      filter: arr
     });
  }

  submitQuery(){
    const data = this.state.filter;
    const result = fakeCallToAPI(10, data);
    this.setState({
      query: result
    });
  }

  changePage(num){
    //for now it immitates querying different pages
    if (num === -1) { //get previous page
      this.submitQuery();
    }
    else if (num === 0) { // get next page
      this.submitQuery();
    }
    else { //get page #num
      this.submitQuery();
    }
  }

  render() {
    const arr = this.state.query;
    return (
      <Wrapper>
        <JobsFilter
          titles={this.state.filter}
          onChange={this.handleChange}
          onSubmit={this.submitQuery}
        />
        <List>
        {
          arr.map((elem, index) => (
            <JobsList key={index}
              area='lst'
              title={elem.title}
              text={elem}
            />
          ))
        }
        <Pagination
            onChange={this.changePage}
            background={this.props.theme.white}
            pageNum={2}
          />
      </List>
      </Wrapper>
    )
  }
}

export default withTheme(JobsContainer)
