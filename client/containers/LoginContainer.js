import React from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login.jsx';
import Api from '../actions/api'

class LoginContainer extends React.Component {
    render() {
        return (<Login onLogin={this.onLogin.bind(this)} data={this.props.login} />)
    }

    componentWillReceiveProps = (nextProps) => {
        console.log(nextProps);
    }

    onLogin = (data) => {
        console.log('login');
        this.props.actions.doLogin(data);
    }
}

const mapStateToProps = (state) => {
    console.log(JSON.stringify(state));
    return state.login;
}

function mapDispatchToProps(dispatch) {
    return({
        actions: {
            doLogin: (data) => {dispatch(Api.find(data))}
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)