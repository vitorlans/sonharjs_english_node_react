import React, { Component } from 'react'
import Headroom from 'react-headroom'
import { LinkWidget } from 'shared/components/LinkWidget'


export class HeaderWidget extends React.Component {
  render () {   
    return ( 
      <div>  
          <Headroom>
                <div className="w3-row w3-card-2 w3-teal app--padding header">
                        <div className="w3-col l2 m2 s2 w3-padding-8">
                            <label className="w3-xxlarge" onClick={this.openMenu}>ME</label>
                        </div>
                        <div className="w3-col l8 m8 s8 w3-center w3-padding-8">
                            <img className="w3-center header--image" src="http://twiggled.com/Theme/FreeFlow/assets/img/playbutton.svg"></img>
                        </div>
                        <div className="w3-col l2 m2 s2 w3-padding-8">
                              <label className="w3-xxlarge w3-right">PLUS</label>   
                        </div>
                 </div>
            </Headroom>
      </div>
    );
  }
}