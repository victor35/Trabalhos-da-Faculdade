import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Menu } from 'primereact/menu';
import React, { useRef, useState } from 'react';

export default function ListarClientes() {

    const menu = useRef(null);
    let items = [
        { label: 'Servicos', items: [{ label: 'Cadastrar Servicos', icon: 'pi pi-fw pi-plus', url: '/servicos' }, { label: 'Listar Servicos', icon: 'pi pi-fw pi-table', url: '/listarservicos' }] },
        { label: 'Clientes', items: [{ label: 'Cadastrar Clientes', icon: 'pi pi-fw pi-plus', url: '/clientes' }, { label: 'Listar Clientes', icon: 'pi pi-fw pi-table', url: '/listarclientes' }] },
        { label: 'Usuário', items: [{ label: 'Sair',icon: 'pi pi-fw pi-id-card', url: '/' }] }

    ];

    const [date, setDate] = useState('');
    const [date1, setDate1] = useState('');

    const clientes =
        [
            { "id": "01/03/2021", "code": "02/03/2021", "name": "Bamboo Watch", "description": "Product Description", "image": "bamboo-watch.jpg", "price": 65, "category": "Accessories", "quantity": 24, "inventoryStatus": "INSTOCK", "rating": 5 },
            { "id": "01/03/2021", "code": "02/03/2021", "name": "Black Watch", "description": "Product Description", "image": "black-watch.jpg", "price": 72, "category": "Accessories", "quantity": 61, "inventoryStatus": "INSTOCK", "rating": 4 },
            { "id": "01/03/2021", "code": "02/03/2021", "name": "Blue Band", "description": "Product Description", "image": "blue-band.jpg", "price": 79, "category": "Fitness", "quantity": 2, "inventoryStatus": "LOWSTOCK", "rating": 3 },
            { "id": "01/03/2021", "code": "02/03/2021", "name": "Blue T-Shirt", "description": "Product Description", "image": "blue-t-shirt.jpg", "price": 29, "category": "Clothing", "quantity": 25, "inventoryStatus": "INSTOCK", "rating": 5 },
            { "id": "01/03/2021", "code": "02/03/2021", "name": "Bracelet", "description": "Product Description", "image": "bracelet.jpg", "price": 15, "category": "Accessories", "quantity": 73, "inventoryStatus": "INSTOCK", "rating": 4 },
            { "id": "01/03/2021", "code": "02/03/2021", "name": "Brown Purse", "description": "Product Description", "image": "brown-purse.jpg", "price": 120, "category": "Accessories", "quantity": 0, "inventoryStatus": "OUTOFSTOCK", "rating": 4 },
            { "id": "01/03/2021", "code": "02/03/2021", "name": "Chakra Bracelet", "description": "Product Description", "image": "chakra-bracelet.jpg", "price": 32, "category": "Accessories", "quantity": 5, "inventoryStatus": "LOWSTOCK", "rating": 3 },
            { "id": "01/03/2021", "code": "02/03/2021", "name": "Galaxy Earrings", "description": "Product Description", "image": "galaxy-earrings.jpg", "price": 34, "category": "Accessories", "quantity": 23, "inventoryStatus": "INSTOCK", "rating": 5 },
            { "id": "01/03/2021", "code": "02/03/2021", "name": "Game Controller", "description": "Product Description", "image": "game-controller.jpg", "price": 99, "category": "Electronics", "quantity": 2, "inventoryStatus": "LOWSTOCK", "rating": 4 },
            { "id": "01/03/2021", "code": "02/03/2021", "name": "Gaming Set", "description": "Product Description", "image": "gaming-set.jpg", "price": 299, "category": "Electronics", "quantity": 63, "inventoryStatus": "INSTOCK", "rating": 3 }
        ]
    return (
        <div>
            {/* header */}
            <div className="header" style={{ height: "100px", width: "100%", background: "black", bottom: "10px" }}>
                <h1 style={{ color: "white", marginLeft: "45%" }}>Clientes</h1>
            </div>
            <Menu model={items} popup ref={menu} />
            <Button style={{ position: "relative", bottom: "80px", backgroundColor: "black", borderColor: "black" }} icon="pi pi-bars" onClick={(event) => menu.current.toggle(event)} />

            {/* content */}

            <div className="card">
                <DataTable value={clientes}>
                    <Column field="name" header="Nome"></Column>
                    <Column field="description" header="CPF"></Column>
                    <Column field="code" header="Data de Nascimento"></Column>
                    <Column field="image" header="Email"></Column>
                    <Column field="category" header="Servicos Solicitados"></Column>
                    <Column field="rating" header="Telefone"></Column>
                </DataTable>
            </div>

        </div >
    );
}