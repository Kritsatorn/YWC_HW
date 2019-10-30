import React, {Component} from 'react'
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {

  renderRouter() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route component={ NotFound } />
			</Switch>
		);
	}

	render() {
		return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
  }

}

export default App;