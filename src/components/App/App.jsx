import React, { Component } from 'react'

import SearchInput from '../search-input'
import CarholderDetails from '../carholder-details'

import './App.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<SearchInput/>
				<CarholderDetails/>
			</div>
		);
	}
}

export default App
