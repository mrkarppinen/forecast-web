
require('./../scss/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/form';


ReactDOM.render(
  <Form />,
  document.getElementById('container')
);


// ReactDOM.render(
//   <div>
//     <h1>{ hmm('hello, world!', 10)}</h1>
//     <h1>{ hmm('ok!', 10)}</h1>
//   </div>,
//   document.getElementsByTagName('body')[0]
// );
