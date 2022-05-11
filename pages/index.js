import {
	MainHeader,
	RegistrationForm,
	NotifyMe,
	Meta
} from "/components/";

import  {
	Button,
	Modal,
	Footer,
	TextButtonForm
} from "/design/components/";

import {useState} from 'react'

import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
} from "@apollo/client";


const client = new ApolloClient({
	uri: 'http://localhost:8000/graphql',
	cache: new InMemoryCache()
});

function Main()
{
	return (
		<div id="landing" className="root">
			<Meta
				title="Monalect: Your personal course manager."
				description="Create, share and study your own courses for free. Whether you're a student, researcher, or self-directed learner, we've got you covered."
			/>
			<MainHeader slug="/" />
			<main>
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
					<h4 id="landing_description">Monalect is a course manager meant to provide efficiency, structure, and direction to your learning experience.</h4>
					<h4> Create, study, and share your own courses, and if you don't have the time, import courses from others. It's a course manager made by you. </h4>
					<h4> It's coming soon! </h4>
					<NotifyMe />
				</article>
			</main>
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
