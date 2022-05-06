var WPM = 200;

export default function PostCardSmall ({title, date, words, slug}) 
{
	var time_min = `${Math.round(words/WPM)} min`;
	return (
		<a href={`/blog/posts/${slug}`}>
		<div className="mn-card mn-is-small">
			<div>
				<h4>{title}</h4>
				<p className="mn-c-time">{time_min}</p>
			</div>
			<p className="mn-c-date">{date}</p>
		</div>
		</a>
	);
}
