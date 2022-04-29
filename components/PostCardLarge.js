var WPM = 200;

export default function PostCardLarge ({title, date, words, coverImage}) 
{
	var time_min = `${Math.round(words/WPM)} min. read`;

	return (
		<div className="mn__post_card mn__large">
			<div>
				<p className="mn__date">{date}</p>
				<p className="mn__time">{time_min}</p>
			</div>
			<img src={coverImage} width={480} height={320} style={{objectFit: "cover"}}/>
			<h3>{title}</h3>
		</div>
	);
}
