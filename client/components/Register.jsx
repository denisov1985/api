import React from 'react';
import { Link } from 'react-router-dom'
class Register extends React.Component {
    render() {
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
                            <a className="navbar-brand" href="# ">Welcome</a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li className='active'>
                                    <a href="">
                                        <i className="material-icons">person_add</i> Register
                                    </a>
                                </li>
                                <li >
                                    <Link to='/'>
                                        <i className="material-icons">fingerprint</i> Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="wrapper wrapper-full-page">
                    <div className="full-page register-page" filter-color="black">
                        <div className="content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-10 col-md-offset-1">
                                        <div className="card card-signup">
                                            <h2 className="card-title text-center">Register</h2>
                                            <div className="row">
                                                <div className="col-md-5 col-md-offset-1">
                                                    <div className="card-content">
                                                        <div className="info info-horizontal">
                                                            <div className="icon icon-rose">
                                                                <i className="material-icons">timeline</i>
                                                            </div>
                                                            <div className="description">
                                                                <h4 className="info-title">Marketing</h4>
                                                                <p className="description">
                                                                    We've created the marketing campaign of the website. It was a very interesting collaboration.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="info info-horizontal">
                                                            <div className="icon icon-primary">
                                                                <i className="material-icons">code</i>
                                                            </div>
                                                            <div className="description">
                                                                <h4 className="info-title">Fully Coded in HTML5</h4>
                                                                <p className="description">
                                                                    We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="info info-horizontal">
                                                            <div className="icon icon-info">
                                                                <i className="material-icons">group</i>
                                                            </div>
                                                            <div className="description">
                                                                <h4 className="info-title">Built Audience</h4>
                                                                <p className="description">
                                                                    There is also a Fully Customizable CMS Admin Dashboard for this product.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <div className="social text-center">
                                                        <button className="btn btn-just-icon btn-round btn-twitter">
                                                            <i className="fa fa-twitter" />
                                                        </button>
                                                        <button className="btn btn-just-icon btn-round btn-dribbble">
                                                            <i className="fa fa-dribbble" />
                                                        </button>
                                                        <button className="btn btn-just-icon btn-round btn-facebook">
                                                            <i className="fa fa-facebook"> </i>
                                                        </button>
                                                        <h4> or be classical </h4>
                                                    </div>
                                                    <form className="form">
                                                        <div className="card-content">
                                                            <div className="input-group">
                      <span className="input-group-addon">
                        <i className="material-icons">face</i>
                      </span>
                                                                <div className="form-group is-empty"><input type="text" className="form-control" placeholder="First Name..." /><span className="material-input" /></div>
                                                            </div>
                                                            <div className="input-group">
                      <span className="input-group-addon">
                        <i className="material-icons">email</i>
                      </span>
                                                                <div className="form-group is-empty"><input type="text" className="form-control" placeholder="Email..." /><span className="material-input" /></div>
                                                            </div>
                                                            <div className="input-group">
                      <span className="input-group-addon">
                        <i className="material-icons">lock_outline</i>
                      </span>
                                                                <div className="form-group is-empty"><input type="password" placeholder="Password..." className="form-control" /><span className="material-input" /></div>
                                                            </div>
                                                            {/* If you want to add a checkbox to this form, uncomment this code */}
                                                            <div className="checkbox">
                                                                <label>
                                                                    <input type="checkbox" name="optionsCheckboxes" defaultChecked /><span className="checkbox-material"><span className="check" /></span> I agree to the
                                                                    <a href="#something">terms and conditions</a>.
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="footer text-center">
                                                            <a href="#pablo" className="btn btn-primary btn-round">Get Started</a>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
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
            </div>);
    }
}
export default Register;