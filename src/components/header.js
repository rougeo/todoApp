import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from "@material-ui/core/styles";

import devscom from '../ressources/logo.svg'
import Container from "@material-ui/core/es/Container/Container";
import Grid from "@material-ui/core/es/Grid/Grid";

const useStyles = makeStyles(theme => ({
    menuIcon: {
        width: '10%'
    },
    title: {
        flexGrow: 1,
    },
    description: {
        margin: '5%'
    }
}));

const Menu = (props) => {
    const classes = useStyles()

    return (
        <Container disableGutters>
            <AppBar elevation={1} color={'default'} position="static">
                <Toolbar>
                    <Grid container alignItems={'space-between'}>
                        <img className={classes.menuIcon} src={devscom}/>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div className={classes.description}>
                <Typography variant={'h3'}>
                    Mon Makiti Rappel
                </Typography>
                <Typography variant={'subtitle1'}>
                    La memoire facile pour les jeunes celibataire
                </Typography>
            </div>
        </Container>
    )
}

export default Menu