import React, { Component } from 'react';

import logo from '../images/logo.svg'
import img from '../images/teacher-login.svg'

class Account extends Component {
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
                                            <a href='/"https://www.mathfactlab.com/'>
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
                                        <h2 class="login-title">Create Teacher Account</h2>
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
                                                    <label for="name" class="input-label"><i class="icon-user" aria-hidden="true"></i>First name</label>
                                                    <input type="text" placeholder="Enter your first name" name="name" id="name" class="input-field input-error" />
                                                </div>
                                            </div>
                                            <div className='form-group'>
                                                <div className="input-wrap ">
                                                    <label for="lname" class="input-label"><i class="icon-user" aria-hidden="true"></i>Last name</label>
                                                    <input type="text" placeholder="Enter your last name" name="lname" id="lname" class="input-field input-error" />
                                                </div>
                                            </div>
                                            <div className='form-group'>
                                                <div className="input-wrap ">
                                                    <label for="email" class="input-label"><i class="icon-envelope" aria-hidden="true"></i>Email</label>
                                                    <input placeholder="Enter your email address" name="email" id="email" class="input-field input-error" />
                                                </div>
                                            </div>

                                            <div className='form-group'>
                                                <div className="input-wrap ">
                                                    <label for="password" class="input-label"><i class="icon-lock" aria-hidden="true"></i>Password</label>
                                                    <input type="password" placeholder="Enter your password" name="password" id="password" class="input-field input-error" />
                                                </div>
                                            </div>

                                            <div className='form-group'>
                                                <div className="input-wrap ">
                                                    <label for="confirmpassword" class="input-label"><i class="icon-lock" aria-hidden="true"></i>Confirm</label>
                                                    <input type="password" placeholder="Confirm password" name="confirmpassword" id="confirmpassword" class="input-field input-error" />
                                                </div>
                                            </div>
                                            <div className='form-group pt-10'>
                                                <button className="btn btn-primary button-full" type="submit">Sign Up</button>
                                            </div>

                                            <div className="form-group">
                                                <p className="font-18 text-center" >
                                                    <a class="link" href="/contact"> Already have an account?</a>
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
            //     <h2>Create Teacher Account</h2>
            //     <div>
            //         <div className='right-box'>
            //             <a href='/'><i class="fab fa-facebook-f">Sign in with Google </i></a>

            //         </div>
            //         <form action="Create Teacher Account">
            //             <div>
            //                 <input type="text" name="first name" id="first name" placeholder="first name" />
            //             </div>
            //             <div>
            //                 <input type="text" name="last name" id="last name" placeholder="last name" />
            //             </div>

            //             <div>
            //                 <input type="text" name="email" id="email" placeholder="email" />
            //             </div>
            //             <div>
            //                 <input type="text" name="password" id="password" placeholder="password" />
            //             </div>
            //             <div>
            //                 <input type="text" name="Confirm" id="Confirm" placeholder="Confirm" />
            //             </div>
            //             <button type="submit" className='button'>SignUp</button>
            //             <p>

            //                 <span className="link">
            //                     <Link to={'/contact'} className="nav-link">  Already have an account? </Link></span>
            //             </p>
            //             <p>
            //                 Not a student? <span className="link"> <Link to={'/contact'} className="nav-link">  Student Login </Link></span>
            //             </p>
            //         </form>

            //     </div>
            // </div>
        );
    }
}

export default Account;