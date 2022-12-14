import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import classes from "./Nav.module.css";
import { useSelector } from "react-redux";

const Navigation = () => {
  const amount = useSelector((state) => state.favorites.favorites);

  return (
    <Nav>
      <LinkContainer to="/">
        <Nav.Link className={classes.navigation}>HOME</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/countries">
        <Nav.Link className={classes.navigation}>COUNTRIES</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/favorites">
        <Nav.Link className={classes.navigation}>
          FAVORITES {amount.length > 0 ? `(${amount.length})` : ""}
        </Nav.Link>
      </LinkContainer>
    </Nav>
  );
};

export default Navigation;
