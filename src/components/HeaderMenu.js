function HeaderMenu (props) {
	return (
		<nav>
			<ul className = "mn__header-menu">
				{props.children}
			</ul>
		</nav>
	);
}

export default HeaderMenu;
