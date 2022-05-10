import {
	MainHeader,
	RegistrationForm,
	NotifyMe
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

import Head from 'next/head'

const client = new ApolloClient({
	uri: 'http://localhost:8000/graphql',
	cache: new InMemoryCache()
});

function Main()
{
	return (
		<div id="landing" className="root">
			<Head>
				<title>Monalect - Online Courses You Create</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
			</Head>
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
					<h4 id="landing_description">Monalect is a self-learning management system meant to provide efficiency, structure, and direction to your self-learning experience.</h4>
					<h4> Create your own courses, with your own material, and if you don't have the time, import courses from others. After that, all you have to do is study. </h4>
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
