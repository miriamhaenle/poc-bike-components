import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1>BIKECOMPONENTS</h1>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/bikes-and-components">Bikes & Components</NavLink>
      </nav>
    </header>
  )
}
