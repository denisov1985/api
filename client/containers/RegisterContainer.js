import React from 'react'
import { connect } from 'react-redux'
import Register from '../components/Register.jsx';

class RegisterContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return (<Register/>)
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {}
}

export default connect(mapStateToProps)(RegisterContainer)