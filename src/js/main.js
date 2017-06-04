
require('./../scss/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav';



ReactDOM.render(
  <form>

     <Nav />

     <section>
       <div className="container">

         <div id="page1" className="page">

           <div class="field">
             <label class="label">Field1</label>
             <p class="control">
               <input class="input" type="text" name="field1" />
             </p>
           </div>

           <div class="field">
             <label class="label">Calendar</label>
             <p class="control">
               <input class="input" type="text" name="calendar1" />
             </p>
           </div>


           <div class="field">
             <p class="control">
               <label class="checkbox">
                 <input type="checkbox" name="checkbox1" />
                   Display page3
               </label>
             </p>
           </div>

       </div>


       <div id="page2" class="page" >


         <div class="field">
           <label class="label">Display select</label>
           <p class="control">
             <label class="radio">
               <input type="radio" name="radio1" />
               Yes
             </label>
             <label class="radio">
               <input type="radio" name="radio1" />
               No
             </label>
           </p>
         </div>


         <div class="field">
           <label class="label">Select</label>
           <p class="control">
             <span class="select" name="select1">
               <select>
                 <option>Option1</option>
                 <option>Option2</option>
               </select>
             </span>
           </p>
         </div>

       </div>


       <div id="page3">
         <div class="field">
           <label>Textarea</label>
           <p class="control">
             <textarea class="textarea"></textarea>
           </p>
         </div>
       </div>

       </div>
     </section>

     <footer>
     </footer>


 </form>,
  document.getElementById('container')
);


// ReactDOM.render(
//   <div>
//     <h1>{ hmm('hello, world!', 10)}</h1>
//     <h1>{ hmm('ok!', 10)}</h1>
//   </div>,
//   document.getElementsByTagName('body')[0]
// );
