import React, {Component} from 'react'
import Container from "@material-ui/core/es/Container/Container";
import TextField from "@material-ui/core/es/TextField/TextField";
import Button from "@material-ui/core/es/Button/Button";


const styles = {
    button: {
        margin: 10
    },
    form: {
        margin: '20px 0',
    },
    input: {
        margin: '0 20px'
    }
};


class InputForm extends Component {

    state = {
        name: '',
        quantity: 0,
        price: 0
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }

    handleQuantityChange = (e) => {
        this.setState({quantity: e.target.value})
    }

    handlePriceChange = (e) => {
        this.setState({price: e.target.value})
    }

    handleInput = () => {

        if (this.state.quantity === 0 || this.state.name === '' || this.state.price === 0)
            return

        this.props.addElement(
            this.state.name,
            this.state.quantity,
            this.state.price
        )

        this.setState({
            name: '',
            price: 0,
            quantity: 0
        })

    }

    render() {
        return (
            <Container style={styles.form}>
                <form noValidate autoComplete="off">
                    <TextField
                        style={styles.input}
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        required
                        id="standard-required"
                        label="Nom du condiment"
                        defaultValue="Manioc belebele"
                    />
                    <TextField
                        style={styles.input}
                        value={this.state.quantity}
                        onChange={this.handleQuantityChange}
                        required
                        id="standard-number"
                        label="Quantite"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        style={styles.input}
                        value={this.state.price}
                        onChange={this.handlePriceChange}
                        required
                        id="standard-number"
                        label="Prix"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button onClick={this.handleInput} style={styles.button}>
                        Ajouter
                    </Button>
                </form>
            </Container>
        )
    }
}

export default InputForm