import './App.css';
import './index.js';
import ReactDOM from 'react-dom';
import React from 'react';



function Header(props) {
  return (
    <header>
	  <h1>Main Heading Is ? {props.name}</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>
        We serve the most {props.adjective} food around.
      </p>
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map(dish => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}


function Footer(props){
	return(
		<footer>
			<ul>
			 <li>Footer 1</li>
			<li>Footer 2</li>
			<li>Footer {props.year}</li>
			</ul>
		</footer>
	)
}

const dishes = [
	"Musa",
	"Tivo",
	"Kevin",
	"Steve"
];

const dishObjects = dishes.map((dish, i) => ({
  id: i,
  title: dish
}));

class Test extends React.Component{
  render() {
    return (
      <div className="Test">
  	  <Header name="Musa"/>
  	  <Main dishes={dishObjects} />
  	  <Footer year={new Date().getFullYear()}/>
      </div>
    );
  }
}


export default Test;
