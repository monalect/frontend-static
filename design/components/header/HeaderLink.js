export default function HeaderLink ({children, href="#", active=false}) {
	const className=`mn-c-header-link ${active ? "mn-is-active" : "mn-is-inactive"}`
	return (
		<li className={className}> 
			<a href={href}>{children}</a>
		</li>
	);
}

