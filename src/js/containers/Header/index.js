import React from 'react';
import logo from '../../../images/pocket-icon.png';
import { connet } from 'react-redux';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="main-header">
        <div className="flx logo-container flx-jst-space-between">
          <div className="logo-image"> <img src={logo} height={36} width={36} alt="LOGO" /> </div>
          <div className="flx-self-center">Easy Pocket</div>
        </div>
      </div>
    );
  }
}

export default Header;
