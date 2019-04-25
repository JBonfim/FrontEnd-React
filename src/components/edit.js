
import React, { Component } from 'react';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeProdutoName = this.onChangeProdutoName.bind(this);
        this.onChangeQteProd = this.onChangeQteProd.bind(this);
        this.onChangeValor = this.onChangeValor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            nome: '',
            quantidade: '',
            valor:''
        }
    }
    
    componentDidMount() {
        fetch('http://localhost:8080/api/produtos/'+this.props.match.params.id)
        .then(res => res.json())
        .then((data) => {
            this.setState({ 
                nome: data.nome, 
                quantidade: data.quantidade,
                valor: data.valor });
        })
        .catch(console.log)
      }

    
      onChangeProdutoName(e) {
        this.setState({
          nome: e.target.value
        });
      }
      onChangeQteProd(e) {
        this.setState({
          quantidade: e.target.value
        })  
      }
      onChangeValor(e) {
        this.setState({
          valor: e.target.value
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
        const obj = {
            id:this.props.match.params.id,
            nome: this.state.nome,
            quantidade: this.state.quantidade,
            valor: this.state.valor
          };
          fetch('http://localhost:8080/api/produto', {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(obj)
            }).then(function(response) {
               
                return response.json();
            }).then(function(data) {
                console.log(data)
               
            });
        
        this.props.history.push('/index');
      }
     
      render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Editar Produto</h3>
                <div className="card">
                    <div className="card-body">
                    <form  onSubmit={this.onSubmit} >
                            <div className="form-row">
                              <div className="col-md-4 mb-3">
                                <label for="validationCustom01">Nome</label>
                                <input type="text" className="form-control" id="validationCustom01" placeholder="Nome do Produto" 
                                value={this.state.nome}
                                onChange={this.onChangeProdutoName}
                                />
                                
                              </div>
                              <div className="col-md-4 mb-3">
                                <label for="validationCustom02">Quantidade</label>
                                <input type="text" className="form-control" id="validationCustom02" placeholder="quantidade" 
                                value={this.state.quantidade}
                                onChange={this.onChangeQteProd} />
                              </div>
                              <div className="col-md-4 mb-3">
                                <label for="validationCustomUsername">Valor</label>
                                <div className="input-group">
                                  <input type="text" className="form-control" id="validationCustomUsername" placeholder="Valor" aria-describedby="inputGroupPrepend"
                                  value={this.state.valor}
                                  onChange={this.onChangeValor} />
                                  
                                </div>
                              </div>
                          </div>
                        <button className="btn btn-primary" type="submit">Editar Produto</button>
                      </form>
                    </div>
                </div>
            </div>
        )
      }
    }