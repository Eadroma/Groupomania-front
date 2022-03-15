import Link from "next/link";
import Image from "next/image";
export const NavbarModule = () => {
  let user = false;
  const handleClick = (e) => {
    localStorage.clear()
    document.location.href="/"
  }
  if (typeof window !== "undefined") {
    user = JSON.parse(localStorage.getItem("user"));
  }
  let authHTML;
  if (!user)
    authHTML = (
      <div class="buttons">
        <a class="button is-primary" href="/signup">
          <strong>Sign up</strong>
        </a>
        <a class="button is-light" href="/login">
          Log in
        </a>
      </div>
    );
  else {
    authHTML = (
      <div class="buttons">
        <button class="button is-danger is-light" onClick={handleClick}>Logout</button>
      </div>
    );
  }
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img
            src="https://res.cloudinary.com/datxh7pfw/image/upload/v1647294068/Groupomania/icon_zlgfou.png"
            width="100%"
          />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/">
            Home
          </a>

          <a class="navbar-item">Test</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Test2</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">About</a>
              <a class="navbar-item">Test3</a>
              <a class="navbar-item">Contact</a>
              <hr class="navbar-divider" />
              <a class="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">{authHTML}</div>
        </div>
      </div>
    </nav>
  );
};
