import { Link } from "react-router-dom";
export function Menu (){
    return(
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/listatareas">Lista de tareas</Link>
            </li>
            <li>
                <Link to="/sobrenosotros">Sobre nosotros</Link>
            </li>
        </ul>
    </nav>
    );
}
