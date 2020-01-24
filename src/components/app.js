import React, { Component } from 'react';

import Button from './button';

// import Background from '../../static/images/mountain.jpg'; 


export default class App extends Component {

  

  render() {
    return (
      <div className='app'
        // style={{  
        //   backgroundImage: "url(" + Background + ")",
        //   backgroundPosition: 'center',
        //   backgroundSize: 'cover', 
        //   backgroundRepeat: 'no-repeat'
        // }}
      >
        <div className="title">
          Counting Bot
        </div>
        <div className="gages">
            <Button />
        </div>
        
      </div>
    );
  }
}
