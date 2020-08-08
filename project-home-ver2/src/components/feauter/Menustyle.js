import React, {Component} from "react";
import './Menustyle.scss';

class Menustyle extends Component{
    render(){
        return(
            <div className="sppb-addon">
                <div className="sppb-optin">
                    <div className="sppb-optin1">
                        <h2 className="sppb-addon-title">Subscribe to our Newsletter </h2>
                        <p className="nd">Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus</p>
                    </div>
                    <div className="sppb-optin-form">
                        <form className="fom">
                            <input className ="email" placeholder="email"></input>
                        </form>
                        <button className="btn"> SUBSCRICE </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Menustyle;