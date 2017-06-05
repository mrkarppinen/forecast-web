import React from 'react';

class Page3 extends React.Component {

  constructor (props){
    super(props);

    this.state = this.props.model.fields;
    this.props = props;

  }


  render (){
    return (
      <div id={this.props.model.id} className={`page ${this.props.model.hidden ? 'is-hidden' : ''}`}>

        <div className="field">
          <label>Textarea</label>
          <p className="control">
            <textarea className="textarea" onChange={this.props.onChange}></textarea>
          </p>
        </div>

      </div>
    );
  }


}


export default Page3;
