import React, {Component} from 'react';
import { Router } from 'react-router-dom';
import api from './../../services/api';

import './style.css';

class Main extends Component {
  state = {
    produtos: [],
    produtosInfos: {},
    page: 1,
  };
  componentDidMount () {
    this.carregandoProdutos ();
  }
  carregandoProdutos = async (page = 1) => {
    const response = await api.get (`/produtos/page/${page}`);
    const {docs, ...produtosInfos} = response.data;
    console.log (this.state.produtos);
    this.setState ({produtos: docs, produtosInfos, page});
    console.log (this.state.produtos);
  };
  prevPage = () => {
    const {page} = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.carregandoProdutos (pageNumber);
  };
  nextPage = () => {
    const {page, produtosInfos} = this.state;

    if (page === produtosInfos.pages) return;

    const pageNumber = page + 1;

    this.carregandoProdutos (pageNumber);
  };
  render () {
    const {produtos, page, produtosInfos} = this.state;
    return (
      <div>
        <div className="jumbotron mx-3">
          Contagem de produtos: {this.state.produtos.length}
        </div>
        <div className="container-fluid">
          <div className="row">
            {produtos.map (produtos => (
              <div className="col-4" key={produtos._id}>
                <div className="card m-3">
                  <img
                    src={produtos.img}
                    className="card-img-top"
                    alt="Sem Imagem"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{produtos.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {produtos.url}
                    </h6>
                    <p className="card-text">
                      {produtos.description}
                    </p>
                    <Router to={`produtos/${produtos._id}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="actions">
            <button
              className="btn btn-outline-danger"
              disabled={page === 1}
              onClick={this.prevPage}
            >
              Anterior
            </button>
            <button
              className="btn btn-outline-danger"
              disabled={page === produtosInfos.page}
              onClick={this.nextPage}
            >
              Proximo
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
