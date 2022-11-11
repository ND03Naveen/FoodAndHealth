import * as React from 'react';
import { Grid } from '@mui/material';
import mi1 from './assets/mi1.jpg';
export default function BlogContent() {
    return (
        <Grid container columnSpacing={{lg:20}} rowSpacing={2}>
            <Grid item xs={12} lg={8} >
                <Grid container>
                    <img src={mi1} alt="Image not found"  height="435"/>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={4} ><div >Thumbnails</div></Grid>
        </Grid>
    )
}