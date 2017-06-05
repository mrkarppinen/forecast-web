

class FormModel {

  constructor (){

        this.pages =  [
          {id: 'page1', fields: {field1: '', calendar: ''}, active: true, disabled: false, hidden: false},
          {id: 'page2', fields: {radio1: ''}, active: false,disabled: false, hidden: true},
          {id: 'page3', fields: {textarea1: ''}, active: false,disabled: true, hidden: true},
          {id: 'summary', active: false,disabled: false, hidden: true}
        ];

        this.currentPage = 0;
  }

  changePage(i){
      this.pages[this.currentPage].hidden = true;
      this.pages[i].hidden = false;
      this.currentPage = i;
  }


}


export default FormModel;
