import React from 'react'
import "./style.scss"

class Form extends React.Component {
    render() {
        return (
            <div class="container">
               <form>
              <h2 class="text-center">Form</h2>

                  <div class="row text-center">
                     <div class="col-md-4">
                     <h4>Name</h4>
                     <input></input>
                     </div>
                     
                     <div class="col-md-4">
                         <h4>Phone nr</h4>
                         <input></input>
                     </div>
                     
                     <div class="col-md-4">
                     <h4>Email</h4>
                     <input></input>
                     </div>
                  </div>
              </form>
              
            </div>
        );
    }
}

export default Form;