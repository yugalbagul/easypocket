import React, { PropTypes } from 'react';
import './Tooltip.scss';

class Overlay extends React.Component {
  render() {
    console.log(this.props.children);
    return (
      <div className="tooltip">Tags
        <div className="tooltiptext">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Overlay;
