import React,{useState,useEffect} from "react";
import Grid from '@mui/material/Grid';
import NavBar from "./NavBar";
import HeadlineComponent from './HeadlineComponent';
import news from "../services/news";

function HomeComponent() {
    const[headline,setHeadline] = useState([]);

    useEffect(() => {
        getHeadlines()
       }, [])

    //call news function
    const getHeadlines = async () => {
        const result = await news()
        console.log(result)
        setHeadline(result)
    }

    //render headline card list
    const headlineList = () => {
        return headline?.map((item, index) => {
            return(
                <HeadlineComponent key={index} news={item}/>
            );
        })
    }
    
    return(
        <Grid container spacing={2} direction={"column"}>
        <Grid item xs={12}>
            <NavBar/>
        </Grid>
        <Grid item container direction={"row"} spacing={2}>
            {
                headlineList()
            }
        </Grid>
    </Grid>
    );
}

export default HomeComponent;