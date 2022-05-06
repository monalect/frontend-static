import {
	MainHeader,
	RegistrationForm,
	Footer
} from "/components/";

import  {
	Button,
	Modal
} from "/design/components/";

import {useState} from 'react'

import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useMutation,
	gql
} from "@apollo/client";

const client = new ApolloClient({
	uri: 'http://localhost:8000/graphql',
	cache: new InMemoryCache()
});

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

function Main()
{
	const[show, setShow] = useState(false) 	
	const[username, setUsername] = useState("") 	
	const[password, setPassword] = useState("") 	
	const[email, setEmail] = useState("") 	
	const[captcha, setCaptcha] = useState("") 	

	const [registerUser, {data, loading, error}] = useMutation(REGISTER)

	function onSubmit(event) {
		console.log(username)
		console.log(email)
		console.log(password)
		console.log(captcha)
		registerUser ({ variables: {
												username: username,
												email: email,
												password: password,
												captcha: captcha
		}});
	}

	return (
		<div id="landing" className="root">
			<MainHeader slug="/"
				className={show ? "mn-is-blur" : "mn-is-clear"}
				onClick={show ? () => setShow(false) : null}
			>
				<Button 
					buttonType="primary" 
					buttonSize="medium" 
					className="mn-is-right"
					onClick={() => setShow(!show)}
				>Pre-Register</Button>
			</MainHeader>
			<main
				className={show ? "mn-is-blur" : "mn-is-clear"}
				onClick={show ? () => setShow(false) : null}
			>
				<section id ="landing_banner">
					<img src="/logo_large.svg" id="banner_logo" alt="Monalect Logo"/>
					<div id="banner_text">
						<h1 id="banner_title">monalect.</h1>
						<div id="banner_subtitle">
							<h4>Self-taught I sing; by Heaven and Heaven alone,</h4>
							<h4>The genuine seeds of poesy are sown. </h4> 
						</div>
					</div>
				</section>
				<article id="landing_body">
					<h4 id="landing_description">Monalect is a self-learning management system meant to provide efficiency, structure, and self-direction to your learning experience.</h4>
					<h4> Coming soon </h4>
				</article>
			</main>
			<Modal show={show} changeState={setShow}>
				<RegistrationForm 
					username={username}
					setUsername={setUsername}
					password={password}
					setPassword={setPassword}
					email={email}
					setEmail={setEmail}
					captcha={captcha}
					setCaptcha={setCaptcha}
					onSubmit={onSubmit}
				/>
			</Modal>
			<Footer/>
		</div>
	);
}

function Apollo()
{
	return (
		<ApolloProvider client={client}>
			<Main />
		</ApolloProvider>
	)
}

export default Apollo;
