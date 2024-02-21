import { NavLink, Outlet } from "react-router-dom";

import { Container, Header, Link } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/eventsboard">EventsBoard</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/formhooks">Formhooks</Link>
          <Link to="/counterhooks">Counterhooks</Link>
          <Link to="/news">NewsApi</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
