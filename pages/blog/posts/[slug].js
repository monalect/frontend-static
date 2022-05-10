import { useRouter } from 'next/router'
import { 
	getAllPosts,
	getPostBySlug
} from '/lib/api'

import {
	MainHeader,
} from "/components/";

import {
	Footer
} from "/design/components/"

import Head from 'next/head'

var showdown = require('showdown')
var converter = new showdown.Converter()
const WPM = 200;

export default function BlogPost ({post}) 
{
	const blogBody = converter.makeHtml(post.content);
	var time_min = `${Math.round(post.words/WPM)} min`;

	if (typeof window !== "undefined"){
		window.addEventListener('scroll', () => {
		  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
		}, false); 
	}

	return (
		<div id="blog" className="root">
			<Head>
				<title>{post.title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<MainHeader slug="/blog" />
			<main id="post">
				<div id="banner">
					<img src="/logo.svg" width={32}/>
					<h1 className="text" >monablog</h1>
				</div>
				<div id = "blog_content">
					<div id="title_card">
						<div className="text">
							<div className="title_author">
								<h2 className="title">{post.title}</h2>
								<p className="author">by {post.author}</p>
							</div>
							<div className="date_time">
								<p>{post.date}</p>
								<p>{time_min}</p>
							</div>
						</div>
						<img src={post.coverImage} width={400} height={240} style={{objectFit: "cover"}} />
					</div>
					<div dangerouslySetInnerHTML={{__html: blogBody}} id="post_body">
					</div>
				</div>
			</main>
			<Footer/>
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
