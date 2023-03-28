import React, { Component } from 'react';
import logo from '../images/logo.svg'
import img from '../images/teacher-login.svg';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Contact extends Component {
    state = {
        email: "rid@gmail.com",
        password: "Aa123456",
        role_id: "2"
    }
    teacherLoginPage = () => {
        const body = {
            "email": this.state.email,
            "password": this.state.password,
            "role_id": this.state.role_id
        }
        this.props.onTeacherLogin(body)
        this.props.history.push("/TeacherLogin")
    }

    handleChangeEmail = e => {
        this.setState({ email: e.target.value })
    }

    handleChangePassword = e => {
        this.setState({ password: e.target.value })
    }


    render() {
        return (
            <div className="app">
                <div className="home">
                    <main className="main-wrapper login-main-wrapper background-student">
                        <section className="login-wrapper">
                            <header className="header">
                                <div className="header-flex">
                                    <div className='header-cols head-col-left'>
                                        <span className='logo-wrapper'>
                                            <a href="https://www.mathfactlab.com/">
                                                <img src={logo} class="login-logo" alt='' />
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </header>
                            <div className='login-flex'>
                                <div className='login-cols inner-background'>
                                    <div className="login-vector-wrap">
                                        <div className='login-vector'>
                                            <img src={img} class="vector-img" alt=''></img>
                                        </div>
                                        <div className='login-vector-text'>
                                            <h4 className="h4 text-white font-normal">Help your students master the basic math facts with this strategy-based approach.</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='login-cols'>
                                    <div className="login-cols-inner">
                                        <h2 className="login-title">Teacher Login</h2>
                                        <p class="font-18 text-center login-subtext">Parent
                                            <button type="button" role="switch" aria-checked="true" class="ant-switch ant-switch-checked">
                                                <div class="ant-switch-handle"></div>
                                                <span class="ant-switch-inner"></span>
                                            </button> Teacher
                                        </p>
                                        <from name="student-login">
                                            <div class="social-group">
                                                <ul class="social-login-buttons flex">
                                                    <li class="social-lb-item flex-grow-1">
                                                        <a class="btn-icon btn-google with-text" href="https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile&amp;include_granted_scopes=true&amp;redirect_uri=https://app.mathfactlab.com/teacher/login&amp;client_id=901843871623-39hk1ljpmitveh42g5cb3i4oqmai104h.apps.googleusercontent.com&amp;response_type=code&amp;access_type=offline">
                                                            <i class="icon-color-google" aria-hidden="true"></i>Sign in with Google
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="text-separator">
                                                <span class="txt-sep">or</span>
                                            </div>
                                            <div className='form-group'>
                                                <div className="input-wrap ">
                                                    <label for="email" class="input-label"><i class="icon-envelope" aria-hidden="true"></i>Email</label>
                                                    <input placeholder="Enter your email ID" name="email" id="email" class="input-field input-error" onChange={this.handleChangeEmail} />
                                                </div>
                                            </div>
                                            <div className='form-group'>
                                                <div className="input-wrap ">
                                                    <label for="password" className="input-label"><i className="icon-lock" aria-hidden="true"></i>Password</label>
                                                    <input type="password" placeholder="Enter your password" name="password" id="password" className="input-field input-error" onChange={this.handleChangePassword} />
                                                </div>
                                            </div>
                                            <div className='form-group pt-10'>
                                                <button className="btn btn-primary button-full" onClick={this.teacherLoginPage}>Login</button>
                                            </div>

                                            <div className="form-group">
                                                <p className="font-18 text-center" >
                                                    <a className="link" href="/account"> Don't have an account? </a>
                                                    <i className="icon-elipse sm-elipse"></i>
                                                    <a className="link" href="/about"> Forgot password?</a>
                                                </p>
                                            </div>

                                            <div className='wrap text-center pt-10'>
                                                <p className="font-18">
                                                    Not a student?
                                                    <a className="link" href="/"> Student Login</a>
                                                </p>
                                            </div>
                                        </from>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>

            // <div className='container'>
            //     <h2>Teacher Login</h2>
            //     <div>

            //         <form action="Teacher Login">
            //             <div>
            //                 <input type="text" name="email" id="email" placeholder='email' />
            //             </div>
            //             <div>
            //                 <input type="text" name="password" id="password" placeholder='password' />
            //             </div>
            //             <button type="submit" className='button'>Login</button>
            //             <p>
            //                 <Link to={'/account'} className='link'>  Don't have an account?
            //                 </Link>
            //                 <Link to={'/about'} >  Forgot password?</Link>
            //             </p>
            //             <p>
            //                 Not a student? <span> <Link to={'/'} >  Student Login </Link></span>
            //             </p>
            //         </form>
            //     </div>
            // </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onTeacherLogin: (data) => dispatch(actions.teacherLogin(data)),
    }
}


export default connect(null, mapDispatchToProps)(Contact);    