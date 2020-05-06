import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './App.css';
import Navigation from './components/layout/navigation'
import CafeIndex from './components/cafeer/cafeindex'
import CafeShow from './components/cafeer/cafeshow'
import CafeCreate from './components/cafeer/cafecreate'
import CafeEdit from './components/cafeer/cafeedit'
import NotFound from './components/layout/notfound'
import OwnerIndex from './components/owners/ownerindex'
import OwnerShow from './components/owners/ownershow'
import CategoryIndex from './components/categories/categoryindex'
import CategoryShow from './components/categories/categoryshow'



class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
				<Navigation />

				<div className="router">
					<Switch>
						<Route exact path='/' component={CafeIndex} />
						<Route path='/cafeer/create' component={CafeCreate} />
						<Route path='/cafeer/:id/edit' component={CafeEdit} />
						<Route path='/cafeer/:id' component={CafeShow} />
						<Route path='/owners/:id' component={OwnerShow} />
						<Route path='/owners' component={OwnerIndex} />
						<Route path='/categories/:id' component={CategoryShow} />
						<Route path='/categories' component={CategoryIndex} />
						<Route component={NotFound} />
					</Switch>
				</div>

				</div>
			</BrowserRouter>
		);
	}
}

export default App;
