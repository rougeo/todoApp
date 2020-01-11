import React, { Component } from 'react'
import Container from "@material-ui/core/es/Container/Container";
import InputForm from "../components/inputForm";
import Elements from "../components/elements";
import Header from "../components/header";
import Sum from "../components/sum";
import Divider from "@material-ui/core/es/Divider/Divider";


class Todo extends Component {
    state = {
        list: [],
        sum: 0
    }

    addElement = (name, quantity, price) => {
        this.setState({
            list: [...this.state.list, {name, quantity, price}]
        }, () => {
            this.update()
        })
    }

    update = () => {
        const sum = this.state.list.reduce((acc, curr) => {

            console.log(curr)
            console.log(acc + (curr.price * curr.quantity))

            return acc + (curr.price * curr.quantity)
        }, 0)

        this.setState({sum}, () => {
            console.log(this.state)
        })
    }

    render() {

        return (
            <Container disableGutters>
                <Header/>
                <InputForm addElement={this.addElement} />
                <Elements elements={this.state.list}/>
                <Divider style={{margin: '10px'}} />
                <Sum total={this.state.sum}/>
            </Container>
        )
    }
}

export default Todo