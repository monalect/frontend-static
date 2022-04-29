import {
	Header,
	HeaderMenu,
	HeaderLink
} from "/components/";

function Main()
{
	return (
		<div id="landing" class="root">
			<Header> 
				<HeaderMenu>
					<HeaderLink href="/" active={true}>Home</HeaderLink>
					<HeaderLink href="/blog">Blog</HeaderLink>
					<HeaderLink href="#">Plans</HeaderLink>
					<HeaderLink href="#">About</HeaderLink>
				</HeaderMenu>
			</Header>
			<main>
				<section className="title">
					<img src="/logo_large.svg" id="monalect_logo" alt="Monalect Logo"/>
					<div className="title_text">
						<h1>monalect.</h1>
						<h4>Self-taught I sing; by Heaven and Heaven alone,</h4>
						<h4>The genuine seeds of poesy are sown. </h4> 
					</div>
				</section>
				<article>
					<h4 class="landing_description">Monalect is a self-learning management system meant to provide efficiency, structure, and self-direction to your learning experience.</h4>
					<h4> Coming soon </h4>
				</article>
			</main>
			<footer>
				<p> Created by <a href="https://www.github.com/buyayub">Ayub Elwhishi</a></p>
			</footer>
		</div>
	);
}

export default Main;
