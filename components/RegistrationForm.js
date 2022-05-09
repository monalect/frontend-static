import {
	TextInput,
	PasswordInput,
	Button
} from '/design/components/'

import { useMutation, gql} from '@apollo/client';

import ReCAPTCHA from "react-google-recaptcha";
import React from 'react'
import { useState } from 'react'

const REGISTER = gql`
	mutation ($username: String!, $email: String, $password: String!, $captcha: String!)
	{ register (
		username: $username, 
		email: $email, 
		password: $password, 
		captcha: $captcha) {
			username
		}
	}
`
export default function RegistrationForm() {

	const [registerUser, {data, loading, error}] = useMutation(REGISTER)
	const[username, setUsername] = useState("") 	
	const[password, setPassword] = useState("") 	
	const[email, setEmail] = useState("") 	
	const[captcha, setCaptcha] = useState("") 	
	
	function onSubmit(event) {
		registerUser ({ variables: {
			username: username,
			email: email,
			password: password,
			captcha: captcha
		}});
	}
	return (
		<form id="mn-c-register" className="mn-c-registration-form" onSubmit={() => {recaptchaRef.current.execute();}}>	
			<TextInput 
				label="Username" 
				name="username" 
				minLength={4}
				maxLength={32}
				onChange={(e) => setUsername(e.target.value)}
				required
			>4-16 characters, alphanumeric</TextInput>
			<PasswordInput label="Password" 
			name="password" 
			onChange={(e) => setPassword(e.target.value)}
			required>12-32 characters, one uppercase character, one lowercase character, one number. </PasswordInput>
			<TextInput 
				label="Email" 
				name="email" 
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
			></TextInput>
			<ReCAPTCHA 
				sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
				onChange={(value) => {setCaptcha(value)}}/>
			<Button onClick={onSubmit} className="g-recaptcha" data>Pre-Register</Button>
		</form>
	);
}
