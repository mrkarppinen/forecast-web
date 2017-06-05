import React from 'react';


class Summary extends React.Component {

  constructor(props){
    super(props);
    this.props = props;
  }


  render(){
    return (
    <div id={this.props.model.id} className={`page ${this.props.model.hidden ? 'is-hidden' : ''}`}>

      { this.props.form.pages.map((page, i) => {

          return <p key={i} >{JSON.stringify(page.fields)}</p>;

       })  }


    </div>
    );
  }



}

export default Summary;
