import Link from 'next/link';

function HeaderLink ({children, href="#", active=false}) {
	const className=`mn__header-link ${active ? "active" : "inactive"}`
	return (
		<li className={className}> 
			<Link href={href}>
				<a>{children}</a>
			</Link>
		</li>
	);
}

export default HeaderLink;
