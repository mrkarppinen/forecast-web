import React from 'react';
import Nav from './nav';
import Footer from './footer';
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
import Summary from './summary'

import FormModel from '../model/form'



class Form extends React.Component {

  constructor (){

    super();
    this.state = {form:new FormModel()};
    this.handleInput = this.handleInput.bind(this);
    this.changePage = this.changePage.bind(this);
    this.toggleState = this.toggleState.bind(this);

  }

  render(){
    return (

      <form>

         <Nav form={this.state.form} change={this.changePage}  />

         <section>

           <div className="container" >

            <Page1 model={this.state.form.pages[0]} onChange={this.handleInput(this.state.form.pages[0].id, 0)} toggle={this.toggleState} />
            <Page2 model={this.state.form.pages[1]} onChange={this.handleInput(this.state.form.pages[1].id, 1)} />
            <Page3 model={this.state.form.pages[2]} onChange={this.handleInput(this.state.form.pages[2].id, 2)} />

            <Summary model={this.state.form.pages[3]}  form={this.state.form} />

           </div>

         </section>

         <Footer />

     </form>


    );
  }

  handleInput(id, index){

    return (event) => {
      let target = event.target;
      this.state.form.pages[index].fields[target.name] = target.value;
      this.setState({
        form: this.state.form
      })
    };

  }

  changePage(event){
    this.state.form.changePage(Number(event.target.getAttribute('data-index')));
    this.setState({
      form: this.state.form
    })

  }


  toggleState(event){
    let index = Number(event.target.getAttribute('data-enable'));
    this.state.form.pages[index].disabled = !this.state.form.pages[index].disabled;
    this.setState({
      form: this.state.form
    })
  }


}

export default Form;
