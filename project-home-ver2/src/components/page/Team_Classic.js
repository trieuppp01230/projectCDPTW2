import React, { Component } from 'react';
import Box_Classic from "./Box_Classic";
import Panner from '../search/Panner';
import Menu from '../Menu';
import "./Team_Classic.scss"
import '../contact/Content_Classic.scss';
import Top_Menu from '../shop/Top_Menu';
import Sp_paralaxx from '../page/TeamParallax/Sp_parallax';
import Full_Creative from "../page/TeamCreative/Full_Creative";
import MenuDank_59 from "./MenuDank_59";
import OtherPage2_404page from "./OtherPage2_404page";
class Team_Classic extends Component {
    render() {
        return (
            <div className="team-classic">
                <Top_Menu />
                <Menu />
                <div className="panner">
                    <Panner main="TEAM CLASSIC" sub="GET MANY MORE FEATURES" />
                </div>
                <div className="container">
                    <div className="content-infor">
                        <span>Meet Our Creative Team</span>
                        <div className="content">
                            <h2 className="title">
                            Meet Our Expert Team and get Support and Discounts
                            </h2>
                            <div className="yellow"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <Box_Classic img="images/classic/11.png" title="Matthew" sub="Founder and CEO" />
                        </div>
                        <div className="col-md-3">
                            <Box_Classic img="images/classic/12.png" title="Margaret" sub="UI Designer" />
                        </div>
                        <div className="col-md-3">
                            <Box_Classic img="images/classic/13.png" title="Benjamin" sub="Marketing" />
                        </div>
                        <div className="col-md-3">
                            <Box_Classic img="images/classic/14.png" title="Jennifer" sub="Support" />
                        </div>
                    </div>
                </div>
                <Sp_paralaxx />
                <Full_Creative />
                <MenuDank_59 />
                <OtherPage2_404page />
            </div>
        );
    }
}

export default Team_Classic;