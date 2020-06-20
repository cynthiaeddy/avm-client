import React, { useEffect } from 'react';
import './Animal.css';

let questions = {
	alive: 'Is it alive?',
	extinct: 'Is is extinct?',
	mammal: 'Is it a mammal?',
	amphibian: 'Is it an amphibian?',
	arms: 'Does it have arms?',
	legs: 'Does it have legs?',
	fly: 'Does it fly?',
	livesInWater: 'Does it live in water?',
	fur: 'Does it have fur?',
	famous: 'Is it famous?',
	male: 'Is it male?',
	female: 'Is it female?',
	actor: 'Is it an actor?',
	athelete: 'Is it an athelete?',
	musician: 'Is it a musician?',
	politician: 'Is it a politician?',
	singer: 'Is it a singer?',
	awardWinner: 'Is it an award winner?',
	ageAbove40: 'Is it more than 40 years old?'
};

class Animals extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			yes: [],
			no: []
		};
		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(animal, key, question) {
		if (animal[key]) {
			this.setState((state) => {
				return { yes: [ ...state.yes, question ] };
			});
		} else {
			this.setState((state) => {
				return { no: [ ...state.no, question ] };
			});
		}
	}

	generateQuestions = (animal) => {
		return Object.keys(animal).map((key) => {
			return <li onClick={() => this.handleClick(animal, key, questions[key])}>{questions[key]}</li>;
		});
	};

	generateQuestionsYes = () => {
		return this.state.yes.map((question) => {
			return <li>{question}</li>;
		});
	};

	generateQuestionsNo = () => {
		return this.state.no.map((question) => {
			return <li>{question}</li>;
		});
	};

	// <li className="actor" onClick={randomAnimal.actor === true ? this.addListYes : this.addListNo}>Is it an actor?</li>

	render() {
		let animal = this.props.animal;
		// let randomAnimal = animals[Math.floor(Math.random() * animals.length)];
		console.log('random animal', this.props.animal);
		// const newOne = randomAnimal;

		// if (!randomAnimal) return null;
		return (
			<div>
				<div className="flex-instructions animal-hed">
					<p>
						<span>Animal</span>
						<br />
						Is it bigger than a breadbox?{' '}
					</p>
					{/* <strong>{String(randomAnimal.breadbox)}</strong> */}
				</div>

				<div className="animal-container">
					<div className="flex-animal yes">
						<h1>
							<ul>
								<span>yes</span>

								{this.generateQuestionsYes()}
							</ul>
						</h1>
					</div>

					<div className="flex-animal question">
						<h1>
							<ul>
								{/* <h3>{String(randomAnimal.breadbox)}</h3> */}
								{this.generateQuestions(animal)}
							</ul>
						</h1>
					</div>

					<div className="flex-animal no">
						<h1>
							<ul>
								<span>no</span>
								{this.generateQuestionsNo()}
							</ul>
						</h1>
					</div>
				</div>
			</div>
		);
	}
}
export default Animals;
