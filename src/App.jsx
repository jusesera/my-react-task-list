import './App.css'
import Header from './Components/Header.jsx'
import TaskList, { useState } from "./Components/TaskList"

function App() {
return <div className = "app">
<Header />
<TaskList />
</div>
}

export default App
