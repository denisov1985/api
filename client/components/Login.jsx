import React from 'react';
import { Link } from 'react-router-dom'
import TextField from '../material/TextField/index.jsx';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    render() {

        console.log(this.props.data);
        let button = (<button onClick={() => {this.props.onLogin(this.state)}} className="btn btn-rose">Login<div className="ripple-container"></div></button>);
        if (this.props.data.isFetching) {
            button = <button disabled="disabled" className="btn btn-rose">Login<div className="ripple-container"></div></button>;
        }

        let emailHasError = false;
        let passwordHasError = false;
        let passwordMessage = '';
        let emailMessage = '';
        if (typeof this.props.data.error !== 'undefined') {
            const error = this.props.data.error;
            if (error.field === 'email') {
                emailHasError = true;
                emailMessage = error.message;
            }
            if (error.field === 'password') {
                passwordHasError = true;
                passwordMessage = error.message;
            }
        }

        return (

            <div>
                <nav className="navbar navbar-primary navbar-transparent navbar-absolute">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#navigation-example-2">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                            <a className="navbar-brand" href=" ../dashboard.html ">Welcome</a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <Link to='/register'>
                                        <i className="material-icons">person_add</i> Register
                                    </Link>
                                </li>
                                <li className=" active ">
                                    <a href="login.html">
                                        <i className="material-icons">fingerprint</i> Login
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="wrapper wrapper-full-page">
                    <div className="full-page login-page" filter-color="black">
                        <div className="content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                                        <form method="#" action="#">
                                            <div className="card card-login">
                                                <div className="card-header text-center" data-background-color="rose">
                                                    <h4 className="card-title">Login</h4>
                                                    <div className="social-line">
                                                        <a href="#btn" className="btn btn-just-icon btn-simple">
                                                            <i className="fa fa-facebook-square"/>
                                                        </a>
                                                        <a href="#pablo" className="btn btn-just-icon btn-simple">
                                                            <i className="fa fa-twitter"/>
                                                        </a>
                                                        <a href="#eugen" className="btn btn-just-icon btn-simple">
                                                            <i className="fa fa-google-plus"/>
                                                         </a>
                                                    </div>
                                                </div>
                                                <p className="category text-center" style={{color: 'red'}}>
                                                    {emailMessage}
                                                    {passwordMessage}
                                                </p>
                                                <div className="card-content">

                                                    <div className="input-group">
                  <span className="input-group-addon">
                    <i className="material-icons">email</i>
                  </span>
                                                        <TextField name="email" parent={this}  hasError={emailHasError} label="Email" />

                                                    </div>
                                                    <div className="input-group">
                  <span className="input-group-addon">
                    <i className="material-icons">lock_outline</i>
                  </span>
                                                        <TextField  name="password" parent={this} hasError={passwordHasError} label="Password" type={'password'} />

                                                    </div>
                                                </div>
                                                <div className="footer text-center">
                                                    {button}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="footer">
                            <div className="container">
                                <nav className="pull-left">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Company
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Portofolio
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Blog
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <p className="copyright pull-right">
                                    © 2018
                                    <a href="http://denysov.net"> Denysov D V </a>, made with love for a better web
                                </p>
                            </div>
                        </footer>
                        <div className="full-page-background" style={{backgroundImage: 'url(../../img/lock.jpeg)'}}/>
                    </div>
                </div>
            </div>
            );
    }
}

Login.defaultProps = {
    data: {
        isFetching: false,
        error: {}
    }
};

export default Login;