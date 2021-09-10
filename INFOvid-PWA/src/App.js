import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


export class App extends Component {
  constructor(props) {
    super(props);

    this.items = [
      { label: 'Sobre', icon: 'pi pi-info' },
    ];

  }

  render() {
    const headerBrasil = (
      <img style={{ width: 360 }} alt="Card" src="https://s4.static.brasilescola.uol.com.br/img/2018/12/mapa-brasil-politico.jpg" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );

    const headerMundo = (
      <img style={{ width: 360 }} alt="Card" src="https://conhecimentocientifico.r7.com/wp-content/uploads/2020/06/paises-quais-sao-definicao-caracteristicas-e-divisao-por-continentes-1024x508.jpg" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    )
    const footer = (
      <span>
        <Button label="Acessar" icon="pi pi-chart-line" />
      </span>
    );
    return (
      < div className="App" >
        <header className="App-header">
          <h1>INFOvid</h1>
          <Menu model={this.items} popup ref={el => this.menu = el} id="popup_menu" />
          <Button icon="pi pi-ellipsis-v" onClick={(event) => this.menu.toggle(event)} aria-controls="popup_menu" aria-haspopup />
        </header>
        <main>
        <div class="card-estados">
          <Card  title="Estados brasileiros" subTitle="Confira os dados de todos os Estados brasileiros" style={{ width: '25em' }} className="ui-card-shadow" footer={footer} header={headerBrasil}>
            <p className="p-m-0" style={{ lineHeight: '1.5' }}>
              O Brasil é dividido em 26 estados e o Distrito Federal, ao todo são 27 unidades federativas.
              </p>
          </Card>
          </div>
      <div class="card-paises">
          <Card  title="Países" subTitle="Confira os dados de todos os países" style={{ width: '25em' }} className="ui-card-shadow" footer={footer} header={headerMundo}>
            <p className="p-m-0" style={{ lineHeight: '1.5' }}>
              Segundo a Organização das Nações Unidas (ONU), existem 193 países.
              </p>
          </Card>
      </div>
        </main>
      </div >
    )

  }
}

export default App;
