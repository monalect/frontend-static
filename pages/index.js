import {
	MainHeader,
	Footer
} from "/components/";

function Main()
{
	return (
		<div id="landing" class="root">
			<MainHeader slug="/"/>
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
					<h4 id="landing_description">Monalect is a self-learning management system meant to provide efficiency, structure, and self-direction to your learning experience.</h4>
					<h4> Coming soon </h4>
				</article>
			</main>
			<Footer/>
		</div>
	);
}

export default Main;
