import {
	MainHeader,
	Footer,
	PostCardSmall,
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
			<MainHeader slug="/blog"/>
			<main id="blog_index">
				<div id="blog_banner">
					<div className="title">
						<img src="/logo.svg" width={48}/>
						<h1 className="text">monablog</h1>
					</div>
					<div className="subtitle">
						<h5>Education is not preperation for life;</h5>
						<h5>Education is life itself.</h5>
					</div>
				</div>
				<div className="index">
					{blogList}
				</div>
			</main>
			<Footer />
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
