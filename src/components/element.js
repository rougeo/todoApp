import React from 'react'
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import Card from "@material-ui/core/es/Card/Card";
import Divider from "@material-ui/core/es/Divider/Divider";

const styles = {
    border: {
    },
    card: {
        padding: '10px',
        margin: '10px',
    },
    name: {
        fontWeight: 'bold'
    },
};


const Element = (props) => {

    console.log(props)

    return (
        <Card style={styles.card}>
            <Grid style={styles.border} container justify={'center'}>
                    <Grid item sm={4}>
                        <Typography style={styles.name} variant={'h6'}>
                            {props.element.name}
                        </Typography>
                    </Grid >

                    <Grid item sm={4}>
                        <Typography variant={'h6'}>
                            {props.element.quantity}
                        </Typography>
                    </Grid>

                    <Grid item sm={4}>
                        <Typography variant={'h6'}>
                            {props.element.price}
                        </Typography>
                    </Grid>
            </Grid>
        </Card>
    )
}

export default Element