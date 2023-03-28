
import React, { Component } from 'react';

import logo from '../images/logo.svg'
import pass from '../images/password.svg'

class About extends Component {
    render() {
        return (
            <div className="app">
                <div className="home">
                    <main className="main-wrapper login-main-wrapper background-teacher">
                        <section className="login-wrapper">
                            <header className="header">
                                <div className="header-flex">
                                    <div className="header-cols head-col-left">
                                        <span className="logo-wrapper">
                                            <a href="https://www.mathfactlab.com/">
                                                <img src={logo} alt="" className="login-logo" />
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </header>
                            <div class="login-flex">
                                <div class="login-cols inner-background">
                                    <div class="login-vector-wrap">
                                        <div class="login-vector sm-vector">
                                            <img src={pass} className="vector-img" alt="" />
                                        </div>
                                        <div className="login-vector-text">
                                            <h4 className="h4 text-white font-normal">Effective and straight-forward strategies for math fact mastery.</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="login-cols">
                                    <div className="login-cols-inner">
                                        <h2 className="login-title">Resend Verification Email</h2>
                                        <p className="font-18 text-center login-subtext">No worries. Just enter the email you used to signup, and we’ll send you a verification link to verify.</p>
                                        <form name="student-login">
                                            <div className="form-group">
                                                <div className="input-wrap ">
                                                    <label for="remail" className="input-label">
                                                        <i className="icon-envelope" aria-hidden="true"></i>Email
                                                    </label>
                                                    <input placeholder="Enter your email ID" name="remail" id="remail" className="input-field input-error" />
                                                </div>
                                            </div>
                                            <div class="form-group pt-10">
                                                <button className="btn btn-primary button-full" type="submit">Send Reset Password Link</button>
                                            </div>
                                            <div className="wrap text-center pt-10">
                                                <p className="font-18">
                                                    <a className="link" href="/contact">Login instead</a>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>


            // <div className='container'>
            //     <h1>Resend Verification Email</h1>
            //     <div>
            //         <p>
            //             No worries. Just enter the email you used to signup, and we’ll send you a verification link to verify.
            //         </p>
            //         <div>
            //             <input type="text" name="email" id="email" placeholder="email" />
            //         </div>
            //         <button type="submit" className='button'>send Reset Password Link</button>
            //         <p>
            //             <span><Link to={'/contact'} className="nav-link">  Login instead</Link></span>
            //         </p>
            //     </div>
            // </div>
        );
    }
}

export default About;