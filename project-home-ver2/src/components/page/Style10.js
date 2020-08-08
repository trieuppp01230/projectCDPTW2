import React, { Component } from 'react';
import Style9 from "./Style9";
import "./Style10.scss";
class Style10 extends Component {
    render() {
        return (
            <div className="style10">
                <div className="container">
                         <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <Style9 icon="fa fa-list-alt" title="Responsive"/>  
                         </div>
                         <div className="col-md-3 col-sm-6">
                            <Style9  icon="fa fa-list-alt" title="Clean Code" />  
                         </div>
                         <div className="col-md-3 col-sm-6">
                            <Style9  icon="fa fa-bar-chart" title="Graphic Design"/>  
                         </div>
                         <div className="col-md-3 col-sm-6">
                            <Style9 icon="fa fa-wpexplorer" title="Support"/>  
                         </div>                     
                    </div>                    
                </div>
            </div>
        );
    }
}

export default Style10;