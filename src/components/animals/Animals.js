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

class Animals extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			yes: [],
			no: [],
			color: ''
		};
		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	// addList() {
	// 	document.getElementsByTagName('li').classList.add('hide');
	// 	// document.querySelector('.question').classList.add('hide');
	// 	console.log('hi');
	// }

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
		// console.log(questions);

		return Object.keys(animal).map((key) => {
			return (
				<li
					className={key}
					onClick={() => this.handleClick(animal, key, questions[key])}
					// style={{ color: this.state.color }}
					// onClick={this.boxClick}
					// onClick={this.findQuestion}
				>
					{questions[key]}
				</li>
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

	boxClick = (e) => {
		let questionClass = e.target.innerText;
		console.log(questionClass);
		if (Object.values(questions).includes(questionClass)) {
			console.log(Object.values(questions).includes(questionClass));
		}
	};
	findQuestion = (container) => {
		for (var i = 0; i < container.length; i++) {
			console.log(container[i].textContent || container[i].innerText);
		}
	};

	render() {
		// this.findQuestion();
		let animal = this.props.animal;
		console.log('random animal', this.props.animal);
		const container = document.getElementsByClassName('flex-animal question');
		const containers = document.querySelector('flex-animal question');
		// const containerArr = [ ...container ];
		let wow = document.getElementsByTagName('li');
		let wower = [ ...wow ];
		// const wow = document.querySelectorAll('li');
		console.log(wow, container, 'hi', wower);

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
								{this.findQuestion(container)}
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
