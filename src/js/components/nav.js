
import React from 'react';




class Nav extends React.Component {

  constructor(props){
    super(props);
    this.state = { form: props.form };
    this.props = props;
  }

  render() {
    return (
      <nav>
        <div className="container">
          <div className="nav-left">
            { this.state.form.pages.map( (page, i) => { return ( <a key={page.id} data-index={i} className={`nav-item is-tab ${ !page.hidden ? 'is-active' : '' } ${ page.disabled ? 'is-disabled' : '' } `} onClick={this.props.change }>{page.id}</a> ); })}
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
