import React, { Component } from 'react';
import Panner from '../search/Panner';
import Menu from '../Menu';
import '../contact/Content_Classic.scss';
import "../home/Porfolio.scss";

class Mosaic_Project extends Component {
    render() {
        return (
            <div className="mosaic-project">
                <Menu />
                <div className="panner">
                    <Panner main="PORTFOLIO" sub="PORTFOLIO ITEM" />
                </div>
                <div className="container">
                    <div className="image"><img src="images/pof1.jpg" alt=""/></div>
                    <div className="pof-infor">
                        <ul className="port-project-info">
                            <li>Project by: John Doe</li>
                            <li>date: 18 August 2017</li>
                            <li>Skills: PSD / HTML5 / CSS3</li>
                            <li>Client:Benjamin</li>
                            <li>Website: <a className="text-gyellow" href="#">www.example.com</a></li>
                        </ul>
                    </div>
                    <div className="pof-desc">
                        <h3 className="title">Project description</h3>
                        <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit. Suspendisse et justo Praesent mattis commodo augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet ligula Etiam sit amet dolor Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Nullam tellus diam volutpat laoreet vel bibendum.</p>
                        <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit. Suspendisse et justo Praesent mattis commodo augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet ligula Etiam sit amet dolor Vestibulum ante ipsum primis in faucibus</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mosaic_Project;