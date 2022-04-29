const WPM = 200;

export default function PostCardMedium ({title, date, words}) {

	var time_min = `${Math.round(words/WPM)} min`

	return (
		<div className="mn__post_card mn__medium">
			<h4>{title}</h4>
			<div>
				<p className="mn__time">{date}</p>
				<p className="mn__date">{time_min}</p>
			</div>
		</div>
	);
};
