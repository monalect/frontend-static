function Header ( {children, className} ) {
	if (typeof window !== "undefined") {

		var prevScrollpos = window.pageYOffset;
		window.onscroll = () => {
			var currentScrollPos = window.pageYOffset;
			var header = document.querySelector('header');
			header.style.top = 
				(prevScrollpos > currentScrollPos) ? "0" : `-${header.offsetHeight}px`;
			prevScrollpos = currentScrollPos;
		};
	}

	return (
		<header className={`mn__header ${className}`}>
			{children}
		</header>
	)
}

export default Header;
