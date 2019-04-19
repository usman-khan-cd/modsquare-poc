/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ModeratorButton } from './styles';
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    const LinkStyle = {
      textDecoration: 'none',
      color: 'black',
    };
    return (
      <div>
        <Link to="/uploader" style={LinkStyle}>
          <Button type="submit">Uploader</Button>
        </Link>

        <Link to="/moderator" style={LinkStyle}>
          <ModeratorButton type="submit">Moderator</ModeratorButton>
        </Link>
      </div>
    );
  }
}
