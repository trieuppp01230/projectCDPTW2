import React, { Component } from 'react';
import Panner from '../search/Panner';
import Menu from '../Menu';
import '../contact/Content_Classic.scss';
import {Link} from 'react-router-dom';
class Thumb_Nail extends Component {
    render() {
        return (
            <div>
                <Menu />
                    <div className="panner">
                        <Panner main="THUMBNAIL" sub="GET MANY MORE FEATURES" />
                    </div>
                    <div className="thumbnail">
                        <h1 className="title">500</h1>
                        <span>Layout blog2 not found.</span>
                        <Link to='/'>
                            <button className="home"><i class="fa fa-home"></i>Home Page</button>
                        </Link>
                    </div>
            </div>
        );
    }
}

export default Thumb_Nail;