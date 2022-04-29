import {
	PostCardLarge,
	PostCardMedium
} from "/components"

export default function BlogContent ({mainMeta, first, second, third }) {
	return (
		<div className="blog_content">
			<div className="main_content">
				{ mainMeta && (<PostCardLarge
					title = {mainMeta.title}
					date = {mainMeta.date}
					words = {mainMeta.words}
					coverImage = {mainMeta.coverImage}
					 />
				)}
			</div>
			<div className="secondary_content">
				{first && (<PostCardMedium
					title = {first.title}
					date = {first.date}
					words = {first.words}
					/>
				)}
				{second && (<PostCardMedium
					title = {second.title}
					date = {second.date}
					words = {second.words}
					/>
				)}
				{third && (<PostCardMedium
					title = {third.title}
					date = {third.date}
					words = {third.words}
					/>
				)}
			</div>
		</div>
	)};
