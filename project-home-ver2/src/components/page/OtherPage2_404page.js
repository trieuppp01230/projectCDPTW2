import React from 'react';
import "./404page.scss";

function OtherPage2_404page() {
    return (
        <div className="container">
            <div className="error-found">
                <h3 className="error-title">
                    404
            <span className="error-notpage"> Oops... Page Not Found!</span>
                </h3>
                <div className="error-content">
                    Sorry the Page Could not be Found here. Try using the button below to go to main page of the site
               </div>
                <div className="error-search">
                        <div className="row">
                            <div className=" hept">
                                <form>
                                    <input className="search" type="text" placeholder="Search" name="search" />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default OtherPage2_404page