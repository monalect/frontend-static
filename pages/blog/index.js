import {
	Header,
	HeaderMenu,
	HeaderLink,
	PostCardSmall,
	PostCardMedium,
	PostCardLarge
} from "/components/";

import { getAllPosts  } from '/lib/api'

export default function Blog({allMeta})
{
	const blogList = allMeta.map((post) =>
		<PostCardSmall
			title = {post.title}
			date = {post.date}
			words= {post.words}
			slug = {post.slug}
		/>
	);

	return  (
		<div id="blog" className="root">
			<Header> 
				<HeaderMenu>
					<HeaderLink href="/">Home</HeaderLink>
					<HeaderLink href="/blog" active={true}>Blog</HeaderLink>
					<HeaderLink href="#">Plans</HeaderLink>
					<HeaderLink href="#">About</HeaderLink>
				</HeaderMenu>
			</Header>
			<main id="blog_index">
				<div className="blog_logo">
					<div className="logo">
						<img src="/logo.svg" width={48}/>
						<h1>monablog</h1>
					</div>
					<div className="quote">
						<h5>Education is not preperation for life;</h5>
						<h5>Education is life itself.</h5>
					</div>
				</div>
				<div className="content">
					{blogList}
				</div>
			</main>
			<footer>
				<p> Created by <a href="https://www.github.com/buyayub">Ayub Elwhishi</a></p>
			</footer>
		</div>
	)
}

export async function getStaticProps() {
	const allMeta = getAllPosts([
		'title',
		'date',
		'words',
		'coverImage',
		'slug',
	])

	return {
		props: {allMeta},
	}
}
