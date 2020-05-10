import React from 'react'
import Container from "@material-ui/core/es/Container/Container";
import Element from "./element";

const styles = {
    button: {
        margin: 10
    },
};


const Elements = (props) => {

    return (
        <Container style={{
            border: '1px solid red'
        }}>
            {
                props.elements.map((el, idx) => {
                    return <Element key={idx} element={el}/>
                })
            }
        </Container>
    )
}

export default Elements