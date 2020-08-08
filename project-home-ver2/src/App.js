import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import './App.scss';

//WRAPPER
import Home from './components/Home';
import Footer from './components/Footer';
import Page_Content_Nine from './components/Page_Content_Nine';
import Page_Content_Ten from './components/Page_Content_Ten';

// PAGE
import About_Style_1 from './components/page/About_Style_1';
import About_Style_2 from './components/page/About_Style_2';
import About_Style_3 from './components/page/About_Style_3';
import Service_Style_1 from './components/page/Service_Style_1';
import Service_Style_2 from './components/page/Service_Style_2';
import Team_Classic from './components/page/Team_Classic';
    // import Team_Parallax from './components/page/Team_Parallax';
    // import Team_Creative from './components/page/Team_Creative';
import FAQ_Style_1 from './components/page/FAQ_Style_1';
import FAQ_Style_2 from './components/page/FAQ_Style_2';
import Contact_Classic from './components/page/Contact_Classic';
import Contact_Classic_Full from './components/page/Contact_Classic_Full';


//REATURE
import Header_Light from './components/feauter/Header_Light';
import Header_Dark from './components/feauter/Header_Dark';
import Header_Modern from './components/feauter/Header_Modern';
import Menu_Transparent from './components/feauter/Menu_Transparent';


//PORFOLIO
import Pof_Two_Column from './components/porfolio/Pof_Two_Column';
import Pof_Three_Column from './components/porfolio/Pof_Three_Column';
import Pof_Four_Column from './components/porfolio/Pof_Four_Column';
import Masonry from './components/porfolio/Masonry';
import Mosaic from './components/porfolio/Mosaic';
import Mosaic_Project from './components/porfolio/Mosaic_Project';
import No_Space from './components/porfolio/No_Space';
import Modern from './components/porfolio/Modern';
import Boxed from './components/porfolio/Boxed';


//SHORTCODES



//BLOG
import Classic_Full_Width from './components/blog/Classic_Full_Width';
import Classic_Left_Side_Bar from './components/blog/Classic_Left_Side_Bar';
import Classic_Right_Side_Bar from './components/blog/Classic_Right_Side_Bar';
import Blog_One_Column from './components/blog/Blog_One_Column';
import Blog_Two_Column from './components/blog/Blog_Two_Column';
import Blog_Three_Column from './components/blog/Blog_Three_Column';
import Blog_Four_Column from './components/blog/Blog_Four_Column';
import Blog_Default_Full from './components/blog/Blog_Default_Full';
import AuThor_Page from './components/blog/AuThor_Page';
import Single from './components/blog/Single';
import Thumb_Nail from './components/blog/Thumb_Nail';


//SHOP
import Shop_FullWidth from './components/Shop_FullWidth';
import Left_Side_Bar from './components/shop/Left_Side_Bar';
import Right_Side_Bar from './components/shop/Right_Side_Bar';
import Gird_Two from './components/shop/Gird_Two';
import Gird_Three from './components/shop/Gird_Three';
import Gird_Four from './components/shop/Gird_Four';


//SEARCH
import Search from './components/Search';  
 

//SHOPING CARD
import Shopping_Card_V1 from './components/shopping_card/Shopping_Card_V1';
import Shopping_Card_V2 from './components/shopping_card/Shopping_Card_V2';

// import Md1_Home from "./components/Module-Home/Md1_Home/Md1_Home";
// import Md2_Home from "./components/Module-Home/Md2_Home/Md2_Home";
// import Md3_Home from "./components/Module-Home/Md3_Home/Md3_Home";
// import Md4_Home from "./components/Module-Home/Md4_Home/Md4_Home";
// import Md5_Home from "./components/Module-Home/Md5_Home/Md5_Home";
// import Md6_Home from "./components/Module-Home/Md6_Home/Md6_Home";
// import Md7_Home from "./components/Module-Home/Md7_Home/Md7_Home";
// import Md8_Home from "./components/Module-Home/Md8_Home/Md8_Home";
// import Md9_Home from "./components/Module-Home/Md9_Home/Md9_Home";
// import Md10_Home from "./components/Module-Home/Md10_Home/Md10_Home";




class App extends Component {
    
    render() {
        return (
            <Router>
                    <Switch>
                        {/* MENU HOME */}
                        <Route path="/" exact component={Home} />
                        {/* END HOME */}

                        {/* MENU PAGES */}
                            {/* Page About */}
                            <Route path="/about-style-1" component={About_Style_1} />
                            <Route path="/about-style-2" component={About_Style_2} />
                            <Route path="/about-style-3" component={About_Style_3} />
                            {/* End About */}


                            {/* Page Service */}
                            <Route path="/service-style-1" component={Service_Style_1} />
                            <Route path="/service-style-2" component={Service_Style_2} />
                            {/* End Service */}

                            {/* Page Team */}
                            <Route path="/team-classic" component={Team_Classic} />
                            {/* <Route path="/team-parallax" component={Team_Parallax} />
                            <Route path="/team-creative" component={Team_Creative} /> */}
                            {/* End Team */}

                            {/* Page FAQ */}
                            <Route path="/FAQ-style-1" component={FAQ_Style_1} />
                            <Route path="/FAQ-style-2" component={FAQ_Style_2} />
                            {/* End FAQ */}

                            {/* Page Contact */}
                            <Route path="/contact_classic" component={Contact_Classic} />
                            <Route path="/contact_full_width_map" component={Contact_Classic_Full} />
                            {/* End Contact */}
                        {/* END MENU PAGES */}

                        {/* MENU FEAUTER */}
                            {/* Feauter Header */}
                            <Route path="/header-light" component={Header_Light} />
                            <Route path="/header-dark" component={Header_Dark} />
                            <Route path="/header-modern" component={Header_Modern} />
                            {/* End Header */}

                            {/* Feauer Menu Style */}
                            <Route path="/menu-transparent" component={Menu_Transparent} />
                            {/* End Menu Style */}

                            {/* Feauer Footer Style */}
                            {/* End Footer Style */}
                        {/* END MENU FEAUTER */}

                        {/* MENU PORFOLIO */}
                            {/* Porfolio Column 1 */}
                            <Route path="/porfo-two-column" component={Pof_Two_Column} />
                            <Route path="/porfo-three-column" component={Pof_Three_Column} />
                            <Route path="/porfo-four-column" component={Pof_Four_Column} />
                            {/* End Porfolio Column 1 */}

                            {/* Porfolio Column 2 */}
                            <Route path="/porfo-masonry" component={Masonry} />
                            <Route path="/porfo-mosaic" component={Mosaic} />
                            <Route path="/porfo-mosaic-project" component={Mosaic_Project} />
                            {/* End Porfolio Column 2 */}

                            {/* Porfolio Column 3 */}
                            <Route path="/porfo-no-space" component={No_Space} />
                            <Route path="/porfo-modern" component={Modern} />
                            <Route path="/porfo-fullwidth" component={Boxed} />
                            {/* End Porfolio Column 3 */} 

                            {/* Porfolio Column 4 */}
                            <Route path="/single-project" component={Mosaic_Project} />
                            {/* End Porfolio Column 4 */}
                        {/* END PORFOLIO */}

                         {/* MENU BLOG */}
                            {/* Blog Classic */}
                                <Route path="/classic-full-width" component={Classic_Full_Width} />
                                <Route path="/classic-left-side-bar" component={Classic_Left_Side_Bar} />
                                <Route path="/classic-right-side-bar" component={Classic_Right_Side_Bar} />
                            {/* End Blog Classic */}

                            {/* Blog Gird */}
                                <Route path="/blog-grid-one-column" component={Blog_One_Column} />
                                <Route path="/blog-grid-two-column" component={Blog_Two_Column} />
                                <Route path="/blog-grid-three-column" component={Blog_Three_Column} />
                                <Route path="/blog-grid-four-column" component={Blog_Four_Column} />
                            {/* End Blog Gird */}

                            {/* Blog Default */}
                                <Route path="/blog-default-full-width" component={Blog_Default_Full} />
                                <Route path="/default-left-side-bar" component={Classic_Left_Side_Bar} />
                                <Route path="/default-right-side-bar" component={Classic_Right_Side_Bar} />
                                <Route path="/default-author-page" component={AuThor_Page} />
                                <Route path="/default-single" component={Single} />
                             {/* End Blog Default */}

                            {/* Blog Thumbnail */}
                             <Route path="/thumbnail-full-width" component={Thumb_Nail} />
                             <Route path="/thumbnail-left-sidebar" component={Thumb_Nail} />
                             <Route path="/thumbnail-right-sidebar" component={Thumb_Nail} />
                             {/* End Blog Thumbnail */}
                        {/* END MENU BLOG */}
                        
                        {/* MENU SHOP */}
                            {/* Shop Gird */}
                            <Route path="/gird-two-column" component={Gird_Two} />
                            <Route path="/gird-three-column" component={Gird_Three} />
                            <Route path="/gird-four-column" component={Gird_Four} />
                            {/* End Shop Gird */}

                            {/* Shop Default */}
                            <Route path="/shop-default" component={Shop_FullWidth} />
                            <Route path="/shop-left-side-bar" component={Left_Side_Bar} />
                            <Route path="/shop-right-side-bar" component={Right_Side_Bar} />
                            {/* End Sho Default */}
                        {/* END MEUNU SHOP */}

                        {/* MENU SEARCH */}
                        <Route path="/search" component={Search} />
                        {/* END SEARCH */}
                         
                        {/* MENU SHOPPING CARD */}
                        <Route path="/shopping_card" component={Shopping_Card_V1} />
                        <Route path="/shopping_card_shop" component={Shopping_Card_V2} />
                        {/* END MENU SHOPPING CARD */}
                    </Switch>
                    <div className="content_nine">
                        <Page_Content_Nine />
                    </div>
                    <div className="footer">
                        <Footer />
                    </div>
                    <div className="content_ten">
                        <Page_Content_Ten />
                    </div>
            </Router>
        );
    }
}

export default App;