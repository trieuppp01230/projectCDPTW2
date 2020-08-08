import React, { Component } from 'react';

class Md7_Home_Box extends Component {
    render() {
        return (
            <div className="box-porfolio">
                <h4 className="title">LOREM IPSUM DOLOR SIT<div className="border"></div></h4>
                <div className="img"><img src={this.props.img} alt="" className="category_item_img img-responsive" /></div>
            </div>
        );
    }
}

export default Md7_Home_Box;