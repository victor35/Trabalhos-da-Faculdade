import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import api from './services/api'

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


function App() {
  const [items, setItems] = useState([
    { label: 'Sobre', icon: 'pi pi-info' },
  ]);
  const [dados, setDados] = useState([{}]);
  const [numeroMortes, setNumeroMortes] = useState(0);
  const [numeroCasos, setNumeroCasos] = useState(0);

  useEffect(() => {

    async function getData() {
      const response = await api.get('/data');

      let somaMortes = 0
      let somaCasos = 0
      response.data.map((el) => {
        somaMortes += el.deaths
        somaCasos += el.cases
      })

      setNumeroMortes(somaMortes)
      setNumeroCasos(somaCasos)

      await setDados(response.data);

    }
    getData();
  }, []);

  const headerBrasil = (
    <img style={{ height: '280px'}} alt="Card" src="https://s4.static.brasilescola.uol.com.br/img/2018/12/mapa-brasil-politico.jpg" />
  );

  const headerMundo = (
    <img style={{ height: '280px' }} alt="Card" src="https://super.abril.com.br/wp-content/uploads/2018/07/50a3d79c9827687ae7000111mundi1.jpeg" />
  )
  const footer = (
    <div style={{justifySelf: 'flex-end', alignSelf: 'flex-end'}}>
      <Button label="Acessar" icon="pi pi-chart-line" />
    </div>
  );

  return (
    < div className="App" >
      <header className="App-header">
        <h1>INFOvid</h1>
        <Menu model={items} popup />
        <Button icon="pi pi-ellipsis-v" aria-controls="popup_menu" aria-haspopup />
      </header>
      <main>
        <div className="card-estados">
          <Card title="Estados brasileiros" subTitle="Confira os dados de todos os Estados brasileiros" style={{marginTop: '20px',  display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '620px', width: '25em' }} className="ui-card-shadow" footer={footer} header={headerBrasil}>
            <p className="p-m-0" style={{ lineHeight: '1.5' }}>
              O Brasil é dividido em 26 estados e o Distrito Federal, ao todo são 27 unidades federativas.
              </p>
              <p className="m-m-2" style={{ lineHeight: '1.5' }}>
              <strong>Casos</strong>: {numeroCasos}<br></br>
              <strong>Mortes</strong>: {numeroMortes}
              </p>
          </Card>
        </div>
        <div className="card-paises">
          <Card title="Países" subTitle="Confira os dados de todos os países" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '620px', width: '25em' }} className="ui-card-shadow" footer={footer} header={headerMundo}>
            <p className="p-m-0" style={{ lineHeight: '1.5' }}>
              Segundo a Organização das Nações Unidas (ONU), {dados[`0`].state} existem 193 países.
              </p>
              <p className="m-m-2" style={{ lineHeight: '1.5' }}>
              <strong>Casos</strong>: 0<br></br>
              <strong>Mortes</strong>: 0
              </p>
          </Card>
        </div>
      </main>
    </div >

  )
}

export default App;
