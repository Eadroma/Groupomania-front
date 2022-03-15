import Link from "next/link";
import Image from "next/image";
export const NavbarModule = () => {
  let user = false;
  const handleClick = (e) => {
    localStorage.clear();
    document.location.href = "/";
  };
  if (typeof window !== "undefined") {
    user = JSON.parse(localStorage.getItem("user"));
  }
  let authHTML;
  if (!user)
    authHTML = (
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
            <Link href="/">
              <a class="navbar-item">Home</a>
            </Link>
            <Link href="/about">
              <a class="navbar-item">About</a>
            </Link>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              {" "}
              <div class="buttons">
                <a class="button is-primary" href="/signup">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light" href="/login">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  else {
    authHTML = (
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
            <Link href="/">
              <a class="navbar-item" href="/">
                Home
              </a>
            </Link>
            <Link href="/profile">
              <a class="navbar-item" href="/profile">
                Profile
              </a>
            </Link>
            <a class="navbar-item" href="/about">
              About
            </a>  
          <div class="navbar-item field ml-7">
              <p class="control has-icons-right">
                <input class="input" type="search" placeholder="Search..." />
                <span class="icon is-small is-right">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ddd" d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z"/></svg>
                </span>
              </p>
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              {" "}
              <div class="buttons">
                <button class="button is-danger is-light" onClick={handleClick}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  return <>{authHTML}</>;
};
