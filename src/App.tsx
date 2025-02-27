import { Route, Routes } from 'react-router-dom'

import HomePage from './views/home/home'

function App() {
	return (
		<Routes>
			<Route element={<HomePage />} path="/" />
		</Routes>
	)
}

export default App
