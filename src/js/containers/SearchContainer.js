import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { selectAllTags } from '../ducks/tagsDuck';
import MyOverlay from '../components/Tooltip';

const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function sortTagsAlphab(arrayToSort) {
  const returnObject = { '#': [] };
  arrayToSort.map((tag) => {
    const firstLetter = tag[0].toUpperCase();
    if (alphabets.indexOf(firstLetter) === -1) {
      returnObject['#'].push(tag);
    } else if (returnObject[firstLetter]) {
      returnObject[firstLetter].push(tag);
    } else {
      returnObject[firstLetter] = [tag];
    }
  });
  return returnObject;
}

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  state = { show: false };

toggle = () => {
  let show = this.state.show;
  const placements = ['left', 'top', 'right', 'bottom'];
  let placement = this.state.placement;

  placement = placements[placements.indexOf(placement) + 1];

  if (!show) {
    show = true;
    placement = placements[0];
  } else if (!placement) {
    show = false;
  }

  return this.setState({ show, placement });
}

// {Object.keys(sortedTags).map(letter => (
//   <div>
//     {letter} : <span>{sortedTags[letter].map(tag => tag)}</span>
//   </div>
// ))}
  renderTags = () => {
    const { props: { tagsList } } = this;
    if (tagsList && tagsList.length) {
      const sortedTags = sortTagsAlphab(tagsList);
      console.log(sortedTags);
      return (
        <MyOverlay>
          <div className="flx tags-container">
            {alphabets.map(letter => (sortedTags[letter] &&
              <div className="flx flx-dir-col letter-section">
                <div className="flx"><span style={{ borderBottom: '1px solid #d1d1d1' }}>{letter}</span></div>
                <div className="flx flx-dir-col tags">
                  { sortedTags[letter].map(tag => <div className="flx">{tag}</div>)}
                </div>
              </div>
            ))}
          </div>
        </MyOverlay>
      );
    }
    return <MyOverlay emptyText={'No Tags'} />;
  }

  render() {
    const { props: { tagsList } } = this;
    // if (tagsList && tagsList.length) {
    //   return this.renderTags();
    // }
    return (
      <div className="flx flx-jst-center">
        <div className="flx">
          <div style={{ position: 'fixed', paddingTop: '30px' }}>
            {this.renderTags()}
          </div>
        </div>
      </div>
    );
  }
}

function matchStateToProps(state) {
  return ({
    tagsList: selectAllTags(state),
  });
}

export default connect(matchStateToProps)(SearchContainer);
