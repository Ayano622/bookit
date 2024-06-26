import React from 'react'

const Login = () => {
    return (
        <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form className="shadow rounded bg-body">
                    <h1 className="mb-3">Login</h1>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email_field"> Email </label>
                        <input
                            type="email"
                            id="email_field"
                            className="form-control"
                            value="example@example.com"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="password_field"> Password </label>
                        <input
                            type="password"
                            id="password_field"
                            className="form-control"
                            value="**********"
                        />
                    </div>

                    <a href="/password/forgot" className="float-end mt-2">
                        Forgot Password?
                    </a>

                    <button
                        id="login_button"
                        type="submit"
                        className="btn form-btn w-100 py-2"
                    >
                        LOGIN
                    </button>

                    <div className="mt-3 mb-4">
                        <a href="/register" className="float-end"> New User? Register Here </a>
                    </div>
                </form>
            </div>
        </div>)
}

export default Login