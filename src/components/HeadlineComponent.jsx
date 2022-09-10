import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid,Container} from "@mui/material";
import LaunchSharpIcon from '@mui/icons-material/LaunchSharp';

function HeadlineComponent({news}) {

    return(
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{display:"flex",justifyContent:"center"}}>
        <Card sx={{ maxWidth: 345}}>
            {news.urlToImage && 
            <CardMedia
                component="img"
                alt="News image preview"
                height="160"
                image={news.urlToImage}
            />
            }
            <CardContent>
                <Typography align="center" variant="body2" gutterBottom>
                    {news.source.name}
                </Typography>
                <Typography gutterBottom variant="h5" align="center" component="div">
                    {news.title}
                </Typography>
                <Grid item container>
                    <Grid item xs={12}>
                         <Typography align="left" variant="subtitle2">{news.author}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                          <Typography align="left" variant="overline">{news.publishedAt}</Typography>
                    </Grid>
                </Grid>
                <Typography sx={{marginTop:'3%'}} variant="body2" align="justify" color="text.secondary">
                    {news.description}
                </Typography>
            </CardContent>
            <Container sx={{display:"flex",justifyContent:"center"}}>
                <CardActions >
                    <Button size="small" href={news.url} target={"_blank"} startIcon={<LaunchSharpIcon/>}>Read More</Button>
                </CardActions>
            </Container>
        </Card>
    </Grid>
    );
}

export default HeadlineComponent;