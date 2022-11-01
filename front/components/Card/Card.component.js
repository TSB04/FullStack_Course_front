import * as React from "react"
import { Grid, Box, Typography, Card, CardMedia, CardContent  } from "@mui/material"
import MyPopover from "../../components/Popover/Popover.component"
import Theme from "../../theme/Theme"


const myStyle = {
    globalContainer: {
        display: 'inline-block',
        margin: "0 0.9% 1% 0",
        width: "44vh",
        height: "28vh",
        backgroundColor: Theme.palette.secondary.dark
    },
    media: {
        borderRadius: 5,
        height: "16vh"
    },
    desc: {
        height:"9vh",
        padding: "1.2vh",
        overflow: "clip"
    }
}
const BookCard = ({title, desc, author, genre, nbPage, bkInStck, price}) => {

    return (
        <MyPopover>
            <Card sx={myStyle.globalContainer}>
                <Grid container  direction="row" justifyContent="space-between">

                    <Grid item xs={8} height="16vh" >
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h6">
                                {title}
                            </Typography>
                            <Typography variant="h7" color="text.secondary" component="div">
                                {author}
                            </Typography>
                            <Typography variant="h8" color="text.secondary" component="div">
                                {genre}
                            </Typography>
                        </CardContent>
                    </Grid>

                    <Grid item xs={4}>
                        <CardMedia
                        component="img"
                        image="/icon2.jpeg"
                        alt="Live from space album cover"
                        style={myStyle.media}
                        />
                    </Grid>

                </Grid>

                <Grid container direction="column" justifyContent="space-between">

                    <Grid item xs={8} md={8} >
                        <CardContent sx={myStyle.desc}>
                            <Typography component="div" variant="subtitle1" marginTop={-1}>
                                {desc}
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={4} md={4} > 
                        <Grid container direction="row"   justifyContent="space-evenly">
                            <Grid >
                                <Typography component="span" variant="subtitle2">
                                Page: {nbPage}
                                </Typography>
                            </Grid>
                            <Grid >
                                <Typography component="span" variant="subtitle2">
                                    Stock: {bkInStck}
                                </Typography>
                            </Grid>
                            <Grid >
                                <Typography component="span" variant="subtitle2">
                                    $ {price}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Grid> 
            </Card>
        </MyPopover>
    )
    
}

export default BookCard