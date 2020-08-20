import React from 'react';
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
let wow = document.getElementsByTagName('li');
let wower = [ ...wow ];

// let questions = [
// 	{ alive: 'Is it alive?', dataName: 'alive' },
// 	{ extinct: 'Is is extinct?' },
// 	{ mammal: 'Is it a mammal?' },
// 	{ amphibian: 'Is it an amphibian?' },
// 	{ arms: 'Does it have arms?' },
// 	{ legs: 'Does it have legs?' },
// 	{ fly: 'Does it fly?' },
// 	{ livesInWater: 'Does it live in water?' },
// 	{ fur: 'Does it have fur?' },
// 	{ famous: 'Is it famous?' },
// 	{ male: 'Is it male?' },
// 	{ female: 'Is it female?' },
// 	{ actor: 'Is it an actor?' },
// 	{ athelete: 'Is it an athelete?' },
// 	{ musician: 'Is it a musician?' },
// 	{ politician: 'Is it a politician?' },
// 	{ singer: 'Is it a singer?' },
// 	{ awardWinner: 'Is it an award winner?' },
// 	{ ageAbove40: 'Is it more than 40 years old?' }
// ];
let questionClass;

class Animals extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			yes: [],
			no: [],
			color: 'red',
			question: [],
			clicked: []
		};
		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
		// this.getColor = this.getColor.bind(this);
	}

	// addList() {
	// 	document.getElementsByTagName('li').classList.add('hide');
	// 	// document.querySelector('.question').classList.add('hide');
	// 	console.log('hi');
	// }

	handleClick(animal, key, question) {
		if (question) {
			this.setState((state) => {
				return { clicked: [ ...state.clicked, question ] };
			});
		}
		// console.log(
		// 	'question',
		// 	question,
		// 	'question[key]',
		// 	question[key],
		// 	'animal[key]',
		// 	animal[key],
		// 	'animal',
		// 	animal,
		// 	'key',
		// 	key
		// );
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
			// console.log(key);
			return (
				<li
					className={key}
					// data-name={}
					onClick={() => this.handleClick(animal, key, questions[key])}
					// style={{ color: this.state.color }}
					// onClick={this.getColor()}
					// onClick={this.getColor(questions[key])}
					// {questions[key].classList.add('colors')}
				>
					{questions[key]}
					{/* {
						questions[key].forEach(question => {
							question.classList.add('colors')
						})} */}
				</li>
				// console.log({key});
			);
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

	getColor = (color) => {
		return this.state.clicked.filter((question) => {
			console.log(question, typeof question);
			// return question.fontcolor('red');
			return ({ question, color } = this.state);
			// return <div style={h1} />;
			// return <div />;

			// return question.classList.add('colors');
		});

		// wower.forEach((wows) => {
		// 	console.log(wows);
		// });

		// console.log(question);
		// this.setState({s
		// 	color: 'transparent'
		// });
	};

	render() {
		console.log(typeof questions, 'typeof questions', 'questions', questions);
		let animal = this.props.animal;
		console.log('random animal', this.props.animal);
		const container = document.getElementsByClassName('flex-animal question');
		let wow = document.getElementsByTagName('li');
		let meow = document.querySelector('.flex-animal.question .alive');
		let meowed = document.querySelector('.flex-animal.question');
		let meowing = document.querySelector('.flex-animal.question li .class');

		// let meows = [ ...meow ];
		let wower = [ ...wow ];
		console.log(meow, meowed, meowing);
		// const wow = document.querySelectorAll('li');
		console.log('wow', wow, 'container', container, 'hi', 'wower', wower);

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
								{/* <h3>{String(animal.breadbox)}</h3> */}
								{this.generateQuestions(animal)}
								{this.getColor()}
								{/* {this.getClassNames(wow)} */}

								{/* {this.boxClick} */}
								{/* {this.getClassNames(wow)} */}
								{/* <div style={{ color: this.state.color }} onClick={this.boxClick} /> */}
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
