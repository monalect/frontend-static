import {
	TextInput,
	PasswordInput,
	Button
} from '/design/components/'

import ReCAPTCHA from "react-google-recaptcha";
import React from 'react'

export default function RegistrationForm({onSubmit, username, setUsername, password, setPassword, email, setEmail, captcha, setCaptcha}) {
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
