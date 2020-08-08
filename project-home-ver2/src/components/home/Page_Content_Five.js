import React, { Component } from 'react';

class Page_Content_Five extends Component {
  // componentDidMount() {
  //   $(document).ready(function(){

  //     $(".nav_menu_list_item_link").click(function(){
  //         var value = $(this).attr('data-filter');
          
  //         if(value == "all")
  //         {
  //             $('.filter').show('1000');
  //         }
  //         else
  //         {
  //             $(".filter").not('.'+value).hide('3000');
  //             $('.filter').filter('.'+value).show('3000');
              
  //         }
  //         if ($(".nav_menu_list_item_link").removeClass("active")) {
  //         $(this).removeClass("active");
  //         }
  //         $(this).addClass("active");
          
  //     });
  // });
  // }
  
    render() {
        return (
            <div className="container">
            <div className="title">
              <h2>Portfolio</h2>
            </div>
            <div className="nav_menu">
              <ul className="nav_menu_list">
                <li className="nav_menu_list_item"><a href="#" className="nav_menu_list_item_link link-default active" data-filter="all">All</a>
                </li>
                <li className="nav_menu_list_item"><a href="#" className="nav_menu_list_item_link link-default" data-filter="design">Design</a></li>
                <li className="nav_menu_list_item"><a href="#" className="nav_menu_list_item_link link-default" data-filter="lookbook">LookBook</a></li>
              </ul>
            </div>
            <div className="category">
              <div className="row category_list">
                <div className="col-lg-3 col-md-3 col-sm-4 col-6 category_item filter lookbook">
                  <a href className="link">
                    <img src="images/img1.jpg" alt="" className="category_item_img img-responsive" />
                    <h5 className="category_item_name">Flat T-Shirt Company</h5>
                    <p className="category_item_detail detail">LookBook</p>
                  </a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-6 category_item filter design">
                  <a href className="link">
                    <img src="images/img2.jpg" alt="" className="category_item_img" />
                    <h5 className="category_item_name">Flat T-Shirt Company</h5>
                    <p className="category_item_detail detail">Design</p>
                  </a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-6 category_item filter lookbook">
                  <a href className="link">
                    <img src="images/img1.jpg" alt="" className="category_item_img" />
                    <h5 className="category_item_name">Flat T-Shirt Company</h5>
                    <p className="category_item_detail detail">LookBook</p>
                  </a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-6 category_item filter lookbook">
                  <a href className="link">
                    <img src="images/img2.jpg" alt="" className="category_item_img" />
                    <h5 className="category_item_name">Flat T-Shirt Company</h5>
                    <p className="category_item_detail detail">LookBook</p>
                  </a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-6 category_item filter lookbook ">
                  <a href className="link">
                    <img src="images/img1.jpg" alt="" className="category_item_img" />
                    <h5 className="category_item_name">Flat T-Shirt Company</h5>
                    <p className="category_item_detail detail">LookBook</p>
                  </a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-6 category_item filter lookbook">
                  <a href className="link">
                    <img src="images/img2.jpg" alt="" className="category_item_img" />
                    <h5 className="category_item_name">Flat T-Shirt Company</h5>
                    <p className="category_item_detail detail">LookBook</p>
                  </a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-6 category_item filter design">
                  <a href className="link">
                    <img src="images/img1.jpg" alt="" className="category_item_img" />
                    <h5 className="category_item_name">Flat T-Shirt Company</h5>
                    <p className="category_item_detail detail">Desigh</p>
                  </a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-6 category_item filter lookbook">
                  <a href className="link">
                    <img src="images/img2.jpg" alt="" className="category_item_img" />
                    <h5 className="category_item_name">Flat T-Shirt Company</h5>
                    <p className="category_item_detail detail">LookBook</p>
                  </a>
              </div>
            </div>
          </div>
          </div>
        );
    }
}

export default Page_Content_Five;