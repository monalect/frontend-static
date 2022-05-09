export default function Header ( {children, className, onClick} ) {
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
		<header className= {`mn-c-header ${className}`} onClick={onClick}>
			{children}
		</header>
	)
}
