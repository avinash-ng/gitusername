import React, { useState } from 'react'
import { CardMedia, makeStyles, Card, CardContent, Typography, createMuiTheme, ThemeProvider, Grid, Icon, Theme } from '@material-ui/core'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { maxHeaderSize } from 'http';
import checkcircle from '../../assets/check-circle.png';
export interface ICardProps {
    cardImage?: string
    cardName: string
    aboutCard?: string
    maxWidth: number
};
const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: '4px',
    },
    title: {
        textAlign: 'center'
    },
    image: {
        objectFit: 'contain',
        width: '100%',
        minWidth: 345,
        height: 172,
        borderRadius: '4px',
    },
    selected: {
        position: 'absolute',
        zIndex: 5,
        marginTop: 20,
        marginLeft: 290

    },
  
}))
const theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            root: {
                fontSize: '18px',
                letterSpacing: '0.5px',
            }
        },
        MuiCardContent: {

            root: {
                '&:last-child': {
                    paddingBottom: 12
                }
            }

        }
    }
});
const RoomCollectionCard: React.FC<ICardProps> = ({ cardName, cardImage, aboutCard, maxWidth,  }) => {
    const props = {fontFamily: 'roboto'}
    const classes = useStyles(props)
    const [raised, setRaised] = useState<boolean>(false);
    const [isClicked, setisClicked] = useState<boolean>(false);
    const raiseHandler = () => {
        setRaised(!raised)
    }
    const clickHandler = () => {
        setisClicked(true)
    }
    return (
        // <Grid item md={4} lg={3}>
        <ThemeProvider theme={theme}>
            <Card onClick= {clickHandler} raised={raised} onMouseOver={raiseHandler} onMouseOut={raiseHandler} className={classes.root} style={{ maxWidth: maxWidth }}>
            {isClicked && <img src={checkcircle} className={classes.selected}/>}
                {cardImage && 
                <CardMedia
                    className={classes.image}
                    image={cardImage}
                    // {...cardImage !==undefined ? (image=={cardImage}) :' '}
                    title={cardName}
                >
               
                </CardMedia>}
                <CardContent>
                    {/* {cardImage !== undefined ? (aboutCard!==undefined ?(<Grid container direction="column" justify="flex-start" spacing={1}>
                        <Grid item>
                            <Typography variant="h6">{cardName}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">{aboutCard}</Typography>
                        </Grid>
                    </Grid>)
                        : (<Typography variant="subtitle1" className={classes.title}>{cardName}</Typography>))

                    :  (<Grid container direction="column" justify="flex-start" spacing={1}>
                    <Grid item>
                        <Typography variant="h5">{cardName}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">{aboutCard}</Typography>
                    </Grid>
                </Grid>)} */}
                 {cardImage !== undefined ? (aboutCard !== undefined ? (<Grid container direction="column" justify="flex-start" spacing={1}>
                                                            <Grid item>
                                                                <Typography  variant="h6">{cardName}</Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography variant="body1">{aboutCard}</Typography>
                                                            </Grid>
                                                        </Grid>)
                                        :<Typography variant="subtitle1" className={classes.title}>{cardName}</Typography>)
                                        : (<Grid container spacing={1} direction="column">
                                             <Grid item>
                                                <Typography variant="h5">{cardName}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body1">{aboutCard}</Typography>
                                            </Grid>
                                        </Grid>)}
                </CardContent>
            </Card>
        </ThemeProvider>
        // </Grid>
    )
}
export default RoomCollectionCard