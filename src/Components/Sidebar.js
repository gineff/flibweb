import React from "react";

import { Link } from 'react-router-dom'

export default ()=> {
  return (
    <nav className="nav flex-column">
      <Link className="nav-link active" to="/library/popular/day">Популярные книги за день</Link>
      <Link className="nav-link" to="/library/popular/week">Популярные книги за неделю</Link>
      <Link className="nav-link" to="/login">Авторизация</Link>
    </nav>
  )
}
