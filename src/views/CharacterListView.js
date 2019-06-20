import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
import { getChars } from '../actions';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    console.log('mounted', this.state);
    this.props.getChars();
  }

  render() {
    console.log(this.props);
    if (this.props.isfetching) {
      // return something here to indicate that you are fetching data
      return <h1>Loading Characters</h1>;
    }
    return (
      <div className='CharactersList_wrapper'>
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    isFetching: state.charsReducer.isFetching
  };
};

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getChars
  }
)(CharacterListView);
