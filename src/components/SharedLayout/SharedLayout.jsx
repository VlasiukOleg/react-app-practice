import { Outlet } from "react-router-dom";
import { Suspense } from "react";

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
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
