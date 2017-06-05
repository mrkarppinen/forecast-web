
import React from 'react';

class Footer extends React.Component {

  constructor(){
    super();
  }

  render (){
    return (
      <footer>

      <nav className="pagination">
          <div className="container">
            <a className="pagination-previous" >Previous</a>
            <a className="pagination-next" >Next page</a>
          </div>
      </nav>

      </footer>
    );
  }

}


export default Footer;
