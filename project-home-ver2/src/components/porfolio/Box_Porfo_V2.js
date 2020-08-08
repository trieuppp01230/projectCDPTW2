import React, { Component } from 'react';
import "./Box_Porfo_V2.scss"
class Box_Porfo_V2 extends Component {
    render() {
        return (
            <div className="box-porfo">
            <div className="img">
              <img src={this.props.img} alt=""/>
              <div className="por-dark">
                <button className="bt zoom"><span>Zoom</span></button>
                <button className="bt view"><span>View</span></button>
              </div>
            </div>
          
            <div className="desc">
              <span className="title">Lorem ipsum dolor sit</span>
              <span className="tag">Web Design, Graphic</span>
            </div>
          </div>
        );
    }
}

export default Box_Porfo_V2;