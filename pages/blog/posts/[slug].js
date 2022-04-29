import { useRouter } from 'next/router'
import { 
	getAllPosts,
	getPostBySlug
} from '/lib/api'

import {
	Header,
	HeaderMenu,
	HeaderLink,
} from "/components/";

var showdown = require('showdown')
var converter = new showdown.Converter()
const WPM = 200;

export default function BlogPost ({post}) 
{
	const blogBody = converter.makeHtml(post.content);
	var time_min = `${Math.round(post.words/WPM)} min`;

	return (
		<div id="blog_post" className="root">
			<Header> 
				<HeaderMenu>
					<HeaderLink href="/">Home</HeaderLink>
					<HeaderLink href="/blog" active={true}>Blog</HeaderLink>
					<HeaderLink href="#">Plans</HeaderLink>
					<HeaderLink href="#">About</HeaderLink>
				</HeaderMenu>
			</Header>
			<main id="post">
				<div id="post_logo">
					<img src="/logo.svg" width={32}/>
					<h1>monablog</h1>
				</div>
				<div id = "blog_content">
					<div id="title_card">
						<div className="title_text">
							<div className="title_author">
								<h2 className="post_title">{post.title}</h2>
								<p className="author">by {post.author}</p>
							</div>
							<div className="date_time">
								<p>{post.date}</p>
								<p>{time_min}</p>
							</div>
						</div>
						<img src={post.coverImage} width={400} height={240} style={{objectFit: "cover"}} />
					</div>
					<div dangerouslySetInnerHTML={{__html: blogBody}} className="post_body">
					</div>
				</div>
			</main>
			<footer>
				<p> Created by <a href="https://www.github.com/buyayub">Ayub Elwhishi</a></p>
			</footer>
		</div>
	);
};

export async function getStaticProps({params}) {
	const post = getPostBySlug(params.slug, [
		'title',
		'date',
		'author',
		'words',
		'coverImage',
		'content'
	])

	return {
		props: {post},
	}
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
