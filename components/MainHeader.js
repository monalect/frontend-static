import {
	Header,
	HeaderMenu,
	HeaderLink
} from "/components/";

export default function MainHeader ({slug}) {
	return (
		<Header> 
			<HeaderMenu>
				<HeaderLink href="/" active={slug === "/" }>Home</HeaderLink>
				<HeaderLink href="/blog" active={slug === "/blog"} >Blog</HeaderLink>
				<HeaderLink href="#">Plans</HeaderLink>
				<HeaderLink href="#">About</HeaderLink>
			</HeaderMenu>
		</Header>
	);
}
