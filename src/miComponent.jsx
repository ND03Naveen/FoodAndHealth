import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import mi1 from './assets/mi1.jpg';
import mi2 from './assets/mi2.jpg';
import mi3 from './assets/mi3.jpg';
const MiComponent = () => {
    return (
        <Carousel autoPlay={true} style={{width:"80%",height:"100%"}} showArrows={true} showStatus={false} transitionTime={1} swipeable={true} showThumbs={false}>
            <div style={{width:"100%",height:"100%"}}>
                <img src={mi1} alt="not found"  style={{height:"100%"}} />
            </div>
            <div style={{width:"100%",height:"100%"}}>
                <img src={mi2} alt="not found" style={{height:"100%"}} />
            </div>
            <div style={{width:"100%",height:"100%"}}>
                <img src={mi3} alt="not found" style={{height:"100%"}} />
            </div>
        </Carousel>
    );
}

export default MiComponent;