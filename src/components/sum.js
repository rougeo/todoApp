import React from 'react'
import Container from "@material-ui/core/es/Container/Container";
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";

const Sum = (props) => (
    <Container>
        <Paper>
            <Typography variant={'h4'}>
                {props.total} GNF
            </Typography>
        </Paper>
    </Container>
)

export default Sum