




















import './Register.css';

function Register() {

    return (

        <>
            <div id="regHeading">
                <h3>Register</h3>
                <hr />
            </div>

            <div id="registerBody">
                <div id="regFormContainer">
                    <div id="registerForm">
                        <form id="regFormTag">
                            <label>Username:
                                <input type="text" id="userName" placeholder="Username" />
                            </label>
                            <label>Email:
                                <input type="text" id="email" placeholder="Email" />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Register;