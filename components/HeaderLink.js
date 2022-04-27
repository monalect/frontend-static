function HeaderLink ({children, href="#", active=false}) {
	const className=`mn__header-link ${active ? "active" : "inactive"}`
	return (
		<li className={className}> 
			<a href={href}>{children}</a>
		</li>
	);
}

export default HeaderLink;
