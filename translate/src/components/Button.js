import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class Button extends React.Component {
	renderSubmitButton(value) {
		return value === 'english' ? 'Submit': 'Voorleggen'
	}

	renderButton(color) {
		return (
			<button className={`ui buttom ${color}`}>
				<LanguageContext.Consumer>
					{value => this.renderSubmitButton(value)}
				</LanguageContext.Consumer>
			</button>
		)
	}

	render() {
		return (
		<ColorContext.Consumer>
			{color => this.renderButton(color)}
		</ColorContext.Consumer>
		)
	}
}

export default Button