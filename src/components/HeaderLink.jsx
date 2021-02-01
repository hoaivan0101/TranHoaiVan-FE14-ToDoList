import React from 'react';
import { Link } from "react-router-dom";

function HeaderLink() {
    return (
        <div className="headerLink flex-center">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/login">TodoList with MobX</Link>
          </p>
          <p>
            <Link to="/redux">TodoList with Redux</Link>
          </p>
          </div>
    );
}

export default HeaderLink;