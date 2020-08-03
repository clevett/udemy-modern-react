import React from 'react'
import { connect } from 'react-redux'

class UserHeader extends React.Component {
	render() {
		const user = this.props

		if (!user) {
			return null
		} else {
			return <div className="header">{user.name}</div>
		}
	}
}
const mapStateToProps = state => {
	return { users: state.users }
}

export default connect(mapStateToProps)(UserHeader)