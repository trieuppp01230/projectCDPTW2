import React, { Component } from 'react';
import Panner from './search/Panner';
import Page_Content_Search from './search/Page_Content_Search';
import './search/Search.scss';
import Menu from './Menu';
class Search extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <div>
            <Menu />
                <div className="panner">
                    <Panner main="SEARCH PAGE" sub="GET MANY MORE FEATURES"/>
                </div>
                <Page_Content_Search />
            </div>
        );
    }
}

export default Search;