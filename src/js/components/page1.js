import React from 'react';


class Page1 extends React.Component {

  constructor (props){
    super(props);

    // this.state = this.props.model;
    this.props = props;


  }


  render(){
    return (
      <div id={this.props.model.id} className={`page ${this.props.model.hidden ? 'is-hidden' : ''}`}>

        <div className="field">
          <label className="label">Field1</label>
          <p className="control">
            <input className="input" type="text" name="field1" onChange={this.props.onChange}  />
          </p>
        </div>

        <div className="field">
          <label className="label">Calendar</label>
          <p className="control">
            <input className="input" type="text" name="calendar1" onChange={this.props.onChange}  />
          </p>
        </div>


        <div className="field">
          <p className="control">
            <label className="checkbox">
              <input type="checkbox" name="checkbox1" onClick={ this.props.toggle } data-enable="2" />
                Display page3
            </label>
          </p>
        </div>

    </div>
    );
  }


}

export default Page1;
