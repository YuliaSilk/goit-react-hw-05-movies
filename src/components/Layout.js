import { Suspense } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { Link } from "./GlobalStyles"

export const Layout = () => {
return (
    <div>
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </nav>
        </header>
        <Suspense fallback={'Loading... Please wait...'}>
            <Outlet/>
        </Suspense>
    </div>
)
}
