import React, { Component } from 'react';
//import '/Footer.css';

class Footer extends Component {
  render() {
      return(
    <footer className="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Footer Content</h5>
          <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Contact Me</h5>
          <ul>
            <li><a class="grey-text text-lighten-3" href="https://github.com/revanite07">Github</a></li>
            <li><a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/kelan-moffatt-863015173/">LinkedIn</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">Email</a></li>
            
          </ul>
        </div>
      </div>
    </div>
  </footer>
      )
  }
}
export default Footer;