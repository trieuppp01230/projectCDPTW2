import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Menu from '../Menu';

class Page_Content_Search extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="search">
                        <div className="form-group">
                            <div className="input-group">
                                <input placeholder="Search Keyword:" className="form-control" />
                                <div className="input-group-append">
                                    <button className="btn btn-secondary">
                                        <i className="fa fa-search" aria-hidden="true"></i>Search
                    </button>
                                </div>
                            </div>
                        </div>
                        <legend>Search for:</legend>
                        <Form.Check type="radio" aria-label="radio 1" /><span>All worlds</span>
                        <Form.Check type="radio" aria-label="radio 2" /><span>Any words</span>
                        <Form.Check type="radio" aria-label="radio 3" /><span>Exact Phrase</span>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Ordering:</Form.Label>
                            <Form.Control as="select">
                                <option>Newest First</option>
                                <option>Oldest First</option>
                                <option>Most Popular</option>
                                <option>Alphabetical</option>
                                <option>Category</option>
                            </Form.Control>
                        </Form.Group>
                        <legend>Search for:</legend>
                        <Form.Check aria-label="option 1" /><span>SP Page Builder</span>
                        <Form.Check aria-label="option 2" /><span>Categories</span>
                        <Form.Check aria-label="option 3" /><span>Contacts</span>
                        <Form.Check aria-label="option 4" /><span>News Feeds</span>
                        <Form.Check aria-label="option 5" /><span>Tags</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page_Content_Search;