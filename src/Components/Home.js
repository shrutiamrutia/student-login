
import React, { Component } from 'react';
import logo from '../images/logo.svg'
import img from '../images/student-login.svg'
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Home extends Component {
    state = {
        user_name: "std78",
        class_code: "81736",
        password: "clay97"
    }
    onLogin = () => {
        const body = {
            "user_name": this.state.user_name,
            "password": this.state.password,
            "class_code": this.state.class_code
        }
        this.props.studentLogin(body)
        this.props.history.push("/students")
    }


    handleChangeClassCode = e => {
        this.setState({ class_code: e.target.value })
    }


    handleChangeUserName = e => {
        this.setState({ user_name: e.target.value })
    }

    handleChangePassword = e => {
        this.setState({ password: e.target.value })
    }


    render() {
        // console.log("this.state.class_code", this.state.class_code)
        console.log("history", this.props.history)
        return (
            <div className="app">
                <div className="home">
                    <main className="main-wrapper login-main-wrapper background-student">
                        <section className="login-wrapper">
                            <header className="header">
                                <div className="header-flex">
                                    <div className='header-cols head-col-left'>
                                        <span className='logo-wrapper'>
                                            <a href='/'>
                                                <img src={logo} className="login-logo" alt='' />
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </header>
                            <div className='login-flex'>
                                <div className='login-cols inner-background'>
                                    <div className="login-vector-wrap">
                                        <div className='login-vector'>
                                            <img src={img} className="vector-img" alt=''></img>
                                        </div>
                                        <div className='login-vector-text'>
                                            <h4 className="h4 text-white font-normal">Master your math facts with this strategy-based approach.</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='login-cols'>
                                    <div className="login-cols-inner">
                                        <h2 className="login-title">Student Login</h2>
                                        <div name="student-login">
                                            <div className='form-group'>
                                                <div className="input-wrap ">
                                                    <label for="classcode" className="input-label">
                                                        <i className="icon-code-lock" aria-hidden="true" ></i>Class Code</label>
                                                    <input type="text" placeholder="Enter your class code" name="classcode" id="classcode" className="input-field input-error" onChange={this.handleChangeClassCode} />
                                                </div>
                                            </div>

                                            <div className='form-group'>
                                                <div className="input-wrap ">
                                                    <label for="username" className="input-label"><i className="icon-user" aria-hidden="true"></i>Username</label>
                                                    <input type="text" placeholder="Enter your username" className="input-field input-error" name="username" id="username" onChange={this.handleChangeUserName} />
                                                </div>
                                            </div>
                                            <div className='form-group'>
                                                <div className="input-wrap ">
                                                    <label for="password" className="input-label"><i className="icon-lock" aria-hidden="true"></i>Password</label>
                                                    <input type="password" placeholder="Enter your password" name="password" id="password" className="input-field input-error" onChange={this.handleChangePassword} />
                                                </div>
                                            </div>
                                            <div className='form-group pt-10'>
                                                <button className="btn btn-primary button-full" onClick={this.onLogin}>Login</button>
                                            </div>
                                            <div className='wrap text-center pt-10'>
                                                <p className="font-18">
                                                    Not a student?
                                                    <a className="link" href="/contact"> Teacher / Parent Login</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        studentLogin: (data) => dispatch(actions.studentLogin(data)),
    }
}


export default connect(null, mapDispatchToProps)(Home);    