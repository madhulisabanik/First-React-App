import logo from '../logo.svg';

export default function Header() {
  return (
    <header className="App-header">
      <nav className="nav">
        <div>
          <img src={logo} className="logo" />
          <span>React App</span>
        </div>
          <ul className="nav-items">
            <li><a href="#" className="App-link">Pricing</a></li>
            <li><a href="#" className="App-link">About</a></li>
            <li><a href="#" className="App-link">Contact</a></li>
          </ul>
      </nav>
    </header>
  )
}