import './style';
import { Component } from 'preact';
import { CSSTransition } from 'react-transition-group';

export default class App extends Component {
	render() {
		return (
			<CSSTransition
				in={true}
				timeout={5000}
				classNames="test"
			>
				{(status) => (
					<div class={`rect test-${status}`} />
				)}
			</CSSTransition>
		);
	}
}
