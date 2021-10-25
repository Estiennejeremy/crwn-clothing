import React from 'react'

import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'

class  SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const {value, name} = event.target

        this.setState({[name]: value})
    }

    render() {
        return(
            <div className='sing-in'>
                <h2>I already have an account</h2>
                <span>sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email'  handerChanger={this.handleChange}  value={this.state.email} required></FormInput>
                    <label>Email</label>
                    <FormInput 
                        handerChanger={this.handleChange}
                        name='password' 
                        value={this.state.password} 
                        required>
                    </FormInput>
                    <label>Password</label>
                </form>
                <input type='submit' value='Submit Form' />
            </div>
        )
    }
}

export default SignIn