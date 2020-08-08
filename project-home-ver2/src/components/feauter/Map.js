import React, {Component} from "react";
// import '../Component/Map.scss';

class Map extends Component{
        constructor(props){
            super(props);
            this.state = {
                src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171ff3c3f640be1%3A0x9621835894aeb90e!2zNSBLaW0gxJDhu5NuZywgQ8awIE0nZ2FyLCDEkOG6r2sgTOG6r2ssIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1595929685036!5m2!1svi!2s",
                height: "400px",
                width: "100%"
            }
        }
        render(){
            return(
                <div>
                    <iframe src={this.state.src} height={this.state.height} width={this.state.width}/>
                </div>
            );
        }
      
}
export default Map;