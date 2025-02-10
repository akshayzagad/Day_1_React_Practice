import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza({pizzaObj}) {
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price + 3} €</span>
      </div>
    </li>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numberOfPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numberOfPizzas > 0 ? (
        <ul className="pizzas">
          {/* {pizzaData.map((pizza)=><Pizza name={pizza.name} photoName={pizza.photoName} ingredients={pizza.ingredients} price={pizza.price} soldOut={pizza.soldOut} />)} */}
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ): <p>We are currently working on menu plese come back another time</p>}

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
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>React Pizza Menu</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");

  // if (!isOpen) return <p>CLOSED</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
        // <p>We're currently open!</p>
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );

  // return React.createElement("footer", null, "We're currently open!");
}

function Order({closeHour, openHour}) {
  return (
    <p>
      Order your pizza now and enjoy it at home or in our restaurant until {openHour}:00 and 
       {closeHour}:00.
    </p>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
