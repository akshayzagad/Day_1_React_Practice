import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return <div className='container'>
        <Header />
        <Menu />
        <Footer />
    </div>;
} 

function Pizza(props) {    
    return <div className='pizza'>
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
        <div>
        <h2>{props.pizzaObj.name}</h2>
         <p>{props.pizzaObj.ingredients}</p>
         <span>{props.pizzaObj.price + 3} €</span>
         </div>
         </div>;
}

function Menu() {
    return <main className='menu'>
        <h2>Our Menu</h2>
        
        <div>
            {/* {pizzaData.map((pizza)=><Pizza name={pizza.name} photoName={pizza.photoName} ingredients={pizza.ingredients} price={pizza.price} soldOut={pizza.soldOut} />)} */}
            {
                pizzaData.map((pizza)=>(
                <Pizza pizzaObj = {pizza}  key={pizza.name}/>
            ))}
        </div>

            {/* <Pizza 
            name={pizzaData[1].name}
            ingredients={pizzaData[1].ingredients}
            price={pizzaData[1].price}
            photoName={pizzaData[1].photoName}
            soldOut={pizzaData[1].soldOut}
            />
             <Pizza 
            name={pizzaData[3].name}
            ingredients={pizzaData[3].ingredients}
            price={pizzaData[3].price}
            photoName={pizzaData[3].photoName}
            soldOut={pizzaData[3].soldOut}
            /> */}
        
    </main>;
}

function Header() {
    return <header className='header'>
        <h1>React Pizza Menu</h1>
    </header>;
}


function Footer() {
    let openHour = 12;
    let closeHour = 21;
    let currentHour = new Date().getHours();
    let openStatus = currentHour < openHour || currentHour >= closeHour ? "closed" : "open";

    return (
        <footer className='footer'>
            <p>{new Date().toLocaleDateString()} We are currently {openStatus}</p>
        </footer>
    );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App /></React.StrictMode>);