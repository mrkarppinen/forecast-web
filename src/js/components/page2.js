import React from 'react';

class Page2 extends React.Component {

  constructor (props){
    super(props);

    this.state = {model: this.props.model};
    this.props = props;

  }


  render (){
    return (
      <div id={this.props.model.id} className={`page ${this.state.model.hidden ? 'is-hidden' : ''}`}>


        <div className="field">
          <label className="label">Display select</label>
          <p className="control">
            <label className="radio">
              <input type="radio" name="radio1" onChange={this.props.onChange} value="yes" />
              Yes
            </label>
            <label className="radio">
              <input type="radio" name="radio1" onChange={this.props.onChange} value="no" />
              No
            </label>
          </p>
        </div>


        <div className="field">
          <label className="label">Select</label>
          <p className="control">
            <span className="select" name="select1">
              <select>
                <option>Option1</option>
                <option>Option2</option>
              </select>
            </span>
          </p>
        </div>

      </div>
    );
  }


}


export default Page2;
