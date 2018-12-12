import React, { Component } from 'react';

import { compose } from 'react-apollo'

import debounce from 'lodash/debounce' // 1
import { composeData, styles } from './components/assets/query';

import RootHome from './components/pages'

class App extends Component {
  state ={
    searchQuery: ""
  }
  onChange = e => {
    const value = e.target.value;
    this.handleFilter(value)
  }

  handleFilter = debounce((val) => {
    this.props.onSearch(val)
  }, 250)


  render() {
    const { loading } = this.props.data;
    const { items } = this.props.data.listIceCreams;
    return (
        <RootHome 
        loading={loading} 
        items={items}
        handleFilter={this.handleFilter}
        onChange={this.onChange}
        styles={styles}
        { ...this.props }
        />
    );
  }
}

export default compose(composeData)(App);
