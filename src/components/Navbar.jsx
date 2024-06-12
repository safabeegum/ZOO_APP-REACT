import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">ZOO APP</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item">
          <Link class="nav-link" to="/">HOME</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">ADD ANIMALS</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/search">SEARCH ANIMALS</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/viewall">VIEW ANIMALS</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar