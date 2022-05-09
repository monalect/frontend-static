function HeaderMenu (props) {
	return (
		<nav>
			<ul className = "mn-c-header-menu">
				{props.children}
			</ul>
		</nav>
	);
}

export default HeaderMenu;
