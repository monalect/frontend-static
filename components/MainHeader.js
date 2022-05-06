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
				<HeaderLink href="/vision" active={slug === "/vision"}>Vision</HeaderLink>
				<HeaderLink href="/about" active={slug === "/about"}>About</HeaderLink>
			</HeaderMenu>
		</Header>
	);
}
