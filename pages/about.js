import {
	MainHeader,
	Footer
} from "/components/";


export default function BlogPost ({content})
{
	return (
		<div id="about" className="root">
			<MainHeader slug="/about" />
			<main id="vision_main">
				<div id="banner">
					<img src="/logo.svg" width={32}/>
					<h1 className="text" >monalect</h1>
				</div>
				<div id = "vision_content">
					<div id="post_body">
						<address>
							<a href="mailto:isaacelwhishi@protonmail.com"><p>isaacelwhishi@protonmail.com</p></a>
							<p>Based in Kitchener, Ontario</p>
						</address>
					</div>
				</div>
			</main>
			<Footer/>
		</div>
	);
};

