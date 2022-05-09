import {
	Card,
} from "/components/";

export default function BlogList({allPostMeta})
{
	const blogList = allPostMeta.map((post) =>
		<Card
			title = {post.title}
			date = {post.date}
			words= {post.words}
			slug = {post.slug}
			key = ""
		/>
	);

	return  (
				<div className="index">
					{blogList}
				</div>
	)
}
