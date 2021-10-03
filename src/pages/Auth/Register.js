import React from "react";

function Register() {
  return (
    <div className="authentication-bg">
      <div className="account-pages my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="card">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-6 p-5">
                      <div className="mx-auto mb-5">
                        <a href="index.html">
                          <img
                            src="assets/images/logo.png"
                            alt=""
                            height={24}
                          />
                          <h3 className="d-inline align-middle ml-1 text-logo">
                            Shreyu
                          </h3>
                        </a>
                      </div>
                      <h6 className="h5 mb-0 mt-4">Create your account</h6>
                      <p className="text-muted mt-0 mb-4">
                        Create a free account and start using Shreyu
                      </p>
                      <form action="#" className="authentication-form">
                        <div className="form-group">
                          <label className="form-control-label">Username</label>
                          <div className="input-group input-group-merge">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="icon-dual" data-feather="user" />
                              </span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Your username"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="form-control-label">
                            Email Address
                          </label>
                          <div className="input-group input-group-merge">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="icon-dual" data-feather="mail" />
                              </span>
                            </div>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="hello@coderthemes.com"
                            />
                          </div>
                        </div>
                        <div className="form-group ">
                          <label className="form-control-label">Password</label>
                          <div className="input-group input-group-merge">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="icon-dual" data-feather="lock" />
                              </span>
                            </div>
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                              placeholder="Enter your password"
                            />
                          </div>
                        </div>
                        <div className="form-group mb-0 text-center">
                          <button
                            className="btn btn-primary btn-block"
                            type="submit"
                          >
                            Sign Up
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-6 d-none d-md-inline-block">
                      <div className="auth-page-sidebar">
                        <div className="overlay" />
                        <div className="auth-user-testimonial">
                          <p className="font-size-24 font-weight-bold text-white mb-1">
                            I simply love it!
                          </p>
                          <p className="lead">
                            "It's a elegent templete. I love it very much!"
                          </p>
                          <p>- Admin User</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end card-body */}
              </div>
              {/* end card */}
              <div className="row mt-3">
                <div className="col-12 text-center">
                  <p className="text-muted">
                    Already have account?{" "}
                    <a
                      href="pages-login.html"
                      className="text-primary font-weight-bold ml-1"
                    >
                      Login
                    </a>
                  </p>
                </div>{" "}
                {/* end col */}
              </div>
              {/* end row */}
            </div>{" "}
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
    </div>
  );
}

export default Register;
