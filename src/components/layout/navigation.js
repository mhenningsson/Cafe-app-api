import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
	return (
		<div className="nav-menu">
			<nav>
				<Link to="/">
					<h1>Café App <span role="img" aria-label="coffee">☕️</span></h1>
				</Link>

				<ul>
					<li>
						<NavLink to="/">Caféer</NavLink>
					</li>
					<li>
						<NavLink to="/cafeer/create">Skapa nytt café</NavLink>
					</li>
					<li>
					<NavLink to="/owners/">Ägare</NavLink>
					</li>
					<li>
					<NavLink to="/categories/">Kategorier</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navigation;