import React from 'react'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

import JobsFilter from './JobsFilter'
import JobsList from './JobsList'
import Pagination from './Pagination'
import { fakeCallToAPI } from '../utils/helpers'

import faker from 'faker'

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
  }

  componentDidMount(){
    const result = fakeCallToAPI();
    //console.log(result);
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
    // call function with this.state.filter as arg
    const data = this.state.filter;
    const result = fakeCallToAPI(10, data);
    //console.log(result);
    this.setState({
      query: result
    });
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
            background={this.props.theme.white}
            pageNum={2}
          />
      </List>
      </Wrapper>
    )
  }
}

export default withTheme(JobsContainer)
