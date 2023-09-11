import ListaTareasPage from './pages/ListaTareasPage.jsx'
import HomePage from './pages/HomePage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Menu } from './Components/Menu.jsx';


function App() {
    return (
        <div className = "app">
            <BrowserRouter>
            <Menu/>
                <Routes>
                    <Route path='/' element ={<HomePage/>}/>
                    <Route path='/listatareas' element = {<ListaTareasPage/>}/>
                    <Route path='/sobrenosotros' element = {<AboutUsPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
);
}

export default App
