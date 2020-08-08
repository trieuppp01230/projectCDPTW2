import React, { Component } from 'react';
import './Blog.scss';

class Classic_Side_Bar extends Component {
    render() {
        return (
            <div className="box-image">
                <div className="img">
                    <img src={this.props.img} alt=""/>
                </div>
                <div className="box-desc">
                    <h2 className="title">{this.props.title}</h2>
                    <div className="article-info">
                        <span className="category"><i className="name fa fa-user"></i> Windstripe</span>
                        <span className="category"><i className="name fa fa-folder"></i>Blak</span>
                        <p>Lorem ipsum dolor sit amet sit justo et consectetuer dolor adipiscing sit amet justo.</p>
                        <button className="readmore">Read more</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Classic_Side_Bar;