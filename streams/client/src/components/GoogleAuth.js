import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: "237737924136-irb23ifg1v37j5575t9m7c4ti8n31ph0.apps.googleusercontent.com",
				scope: 'email'
			}).then(() => {
				this.auth = window.gapi.auth2.getAuthInstance()
				this.onAuthChange(this.auth.isSignedIn.get())
				this.auth.isSignedIn.listen(this.onAuthChange)
			})
		})
	}

	onAuthChange = (isSignedIn) => isSignedIn ? this.props.signIn() : this.props.signOut()

	onSignInClick = () => this.auth.signIn(this.auth.currentUser.get().getId())
	onSignOutClick = () => this.auth.signOut()

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null
		} else if (this.props.isSignedIn) {
			return (
				<button className="ui red google button" onClick={this.onSignOutClick}>
					<i className='google icon' /> Sign Out
				</button>
			)
		} else {
			return (
				<button className='ui red google button' onClick={this.onSignInClick}>
					<i className='google icon' /> Sign In with Google
				</button>
			)
		}
	}
	

	render() {
		return <div>{this.renderAuthButton()}</div>
	}
}

const mapStateToProps = state => ( { isSignedIn: state.auth.isSignedIn } )

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)