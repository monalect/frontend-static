import {
	TextInput,
	PasswordInput,
	Button
} from '../'


export default function RegistrationForm({onSubmit}) {
	return (
		<form className="mn-c-registration-form">	
			<TextInput 
				label="Username" 
				name="username" 
				minLength={4}
				maxLength={32}
				required
				placeholder="ex. hunter"
			>4-16 characters, alphanumeric</TextInput>
			<PasswordInput label="Password" name="password" required>12-32 characters, one uppercase character, one lowercase character, one number. </PasswordInput>
			<TextInput 
				label="Email" 
				name="email" 
				type="email"
				pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
			></TextInput>
			<Button onClick={onSubmit}>Register</Button>
		</form>
	);
}
