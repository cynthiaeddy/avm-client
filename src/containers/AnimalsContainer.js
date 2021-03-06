import React from 'react';
import { connect } from 'react-redux';
import { fetchAnimals } from '../actions/animalsAction';
import Animals from '../components/animals/Animals';

class AnimalsContainer extends React.Component {
	componentDidMount() {
		this.props.fetchAnimals();
	}

	render() {
		// console.log(this.props.animals);

		return (
			<div>
				<Animals animals={this.props.animals} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { animals: state.animals };
};

export default connect(mapStateToProps, { fetchAnimals })(AnimalsContainer);
