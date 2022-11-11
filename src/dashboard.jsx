import * as React from 'react';
import cardDetails from './cardDetails';
import CardComponent from "./cardComponent";
import { Grid } from '@mui/material';
import { Link } from "react-router-dom";
export default function Dashboard() {
    function handleClick(){

    }
    return (
        <React.Fragment>
            {cardDetails.map((val, idx) =>
                <Grid item className='cardItem' key={idx} onClick={handleClick}>
                    <Link to="/blogContent" style={{textDecoration:"none"}}>
                    <CardComponent  img={val.img} heading={val.heading} subHeading={val.subHeading}></CardComponent>
                    </Link>
                </Grid>)
            }
        </React.Fragment>
    )
}