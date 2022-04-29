import Link from 'next/link'
var WPM = 200;

export default function PostCardSmall ({title, date, words, slug}) 
{
	var time_min = `${Math.round(words/WPM)} min`;
	return (
		<Link href={`/blog/posts/${slug}`}>
		<div className="mn__post_card mn__small">
			<div>
				<h4>{title}</h4>
				<p className="mn__time">{time_min}</p>
			</div>
			<p className="mn__date">{date}</p>
		</div>
		</Link>
	);
}
