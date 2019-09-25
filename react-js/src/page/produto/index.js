import React, { Component } from 'react';
import api from './../../services/api'

class Produto extends Component {
    state = {
        produto:{}
    }

    async componentDidMount(){
        const {id}= this.props.match.params;

        const response = await api.get(`produtos/${id}`)

        this.setState({ produto: response.data })
    }

    render() {
        const {produtos}=this.state
        return (
            <div>
                <h1>{produtos.title}</h1>
            </div>
        );
    }
}

export default Produto;