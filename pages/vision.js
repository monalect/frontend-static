import {
	MainHeader,
} from "/components/";
import {
	Footer
} from "/design/components/"
import matter from 'gray-matter';


var showdown = require('showdown')
var converter = new showdown.Converter()

export default function BlogPost ({content})
{
	const blogBody = converter.makeHtml(content);
	return (
		<div id="vision" className="root">
			<MainHeader slug="/vision" />
			<main id="vision_main">
				<div id="banner">
					<img src="/logo.svg" width={32}/>
					<h1 className="text" >monalect</h1>
				</div>
				<div id = "vision_content">
					<div dangerouslySetInnerHTML={{__html: blogBody}} id="post_body">
					</div>
				</div>
			</main>
			<Footer/>
		</div>
	);
};

export async function getStaticProps() {
	const fs = require("fs");
	const file = fs.readFileSync('./public/features.md', 'utf8')
	const {data, content} = matter(file);

	return {props: {content}};
}

