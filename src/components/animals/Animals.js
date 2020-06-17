import React from 'react';
// import Animal from '../stash/Animal';
import './Animal.css';
let yes = document.querySelector('.animal-child.yes');
let no = document.querySelector('.animal-child.no');

class Animals extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			alive: true,
			extinct: false
		};
	}
	// isClicked() {
	// 	if (this.state) {
	// 		yes.classList.add('show');
	// 	} else {
	// 		no.classList.add('show');
	// 	}
	// }

	render() {
		let animals = this.props.animals.animals;
		let randomAnimal = animals[Math.floor(Math.random() * animals.length)];
		console.log('random animal', randomAnimal);
		console.log(this.state.alive);

		if (!randomAnimal) return null;

		return (
			<div>
				<div>
					<div className="flex-instructions">
						<h4 className="animal-header">Animal</h4>
					</div>
					<div className="animal-container">
						<div className="flex-animal yes">
							True
							<h1>
								<ul>
									<li className="extinct">Is it extinct?</li>
									<li className="mammal">Is it a mammal?</li>
									<li className="amphibian">Is it an amphibian?</li>
									<li className="arms">Does it have arms?</li>
									<li className="legs">Does it have legs?</li>
									<li className="fly">Does it fly?</li>
									<li className="livesInWater">Does it live in water?</li>
									<li className="fur">Does it have fur?</li>
									<li className="famous">Is it famous?</li>
									<li className="male">Is it male?</li>
									<li className="actor">Is it an actor?</li>
									<li className="athelete">Is it an athelete?</li>
									<li className="musician">Is it a musician?</li>
									<li className="politician">Is it a politician?</li>
									<li className="singer">Is it a singer?</li>
									<li className="awardWinner">Is it an award winner?</li>
									<li className="ageAbove40">Is it more than 40 years old?</li>
								</ul>
							</h1>
						</div>
						<div className="flex-animal question">
							<h1>
								Is it bigger than a breadbox?
								{/* <hr /> */}
								<ul>
									<li className="alive">Is it alive?</li>
									<li className="extinct">Is it extinct?</li>
									<li className="mammal">Is it a mammal?</li>
									<li className="amphibian">Is it an amphibian?</li>
									<li className="arms">Does it have arms?</li>
									<li className="legs">Does it have legs?</li>
									<li className="fly">Does it fly?</li>
									<li className="livesInWater">Does it live in water?</li>
									<li className="fur">Does it have fur?</li>
									<li className="famous">Is it famous?</li>
									<li className="male">Is it male?</li>
									<li className="actor">Is it an actor?</li>
									<li className="athelete">Is it an athelete?</li>
									<li className="musician">Is it a musician?</li>
									<li className="politician">Is it a politician?</li>
									<li className="singer">Is it a singer?</li>
									<li className="awardWinner">Is it an award winner?</li>
									<li className="ageAbove40">Is it more than 40 years old?</li>
								</ul>
							</h1>
							{console.log(randomAnimal)}
						</div>
						<div className="flex-animal no">
							Not True
							<h1>
								<li className="alive">Is it alive?</li>
								<li className="extinct">Is it extinct?</li>
								<li className="mammal">Is it a mammal?</li>
								<li className="amphibian">Is it an amphibian?</li>
								<li className="arms">Does it have arms?</li>
								<li className="legs">Does it have legs?</li>
								<li className="fly">Does it fly?</li>
								<li className="livesInWater">Does it live in water?</li>
								<li className="fur">Does it have fur?</li>
								<li className="famous">Is it famous?</li>
								<li className="male">Is it male?</li>
								<li className="actor">Is it an actor?</li>
								<li className="athelete">Is it an athelete?</li>
								<li className="musician">Is it a musician?</li>
								<li className="politician">Is it a politician?</li>
								<li className="singer">Is it a singer?</li>
								<li className="awardWinner">Is it an award winner?</li>
								<li className="ageAbove40">Is it more than 40 years old?</li>
							</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Animals;
// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }
