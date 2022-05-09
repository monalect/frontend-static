import{
	Button,
	Header,
	HeaderMenu,
	HeaderLink
} from "/design/components";

export default function MainHeader ({slug, className, children}) {
	return (
		<Header className={className}> 
			<HeaderMenu>
				<HeaderLink href="/" active={slug === "/" }>Home</HeaderLink>
				<HeaderLink href="/blog" active={slug === "/blog"} >Blog</HeaderLink>
				<HeaderLink href="/vision" active={slug === "/vision"}>Vision</HeaderLink>
				<HeaderLink href="/about" active={slug === "/about"}>About</HeaderLink>
			</HeaderMenu>
			{children}
		</Header>
	);
}
