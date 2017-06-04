
import React from 'react';




class Nav extends React.Component {

  constructor(){
    super();
    this.state = {};
  }

  render() {
    return (
      <nav>
        <div className="container">
          <div className="nav-left">
            <a  className="nav-item is-tab is-active">1</a>
            <a className="nav-item is-tab">2</a>
            <a className="nav-item is-tab is-disabled">3</a>
          </div>
        </div>
      </nav>
    );
  }



  componentDidMount() {
  }

  componentWillUnmount() {
  }
}

export default Nav;
