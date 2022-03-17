
import { HeaderModule } from "../../components/Header";
import { NavbarModule } from "../../components/Navbar/Navbar";
import { FooterModule } from "../../components/Footer/Footer";
import { addItemLocalStorage } from "../../components/UserProvider";
import styles from "./style.module.css";

export default function Login() {
  const handleForm = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // get data from the form
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    // send the data to the server in json format
    const JSONdata = JSON.stringify(data);
    console.log(JSONdata);
    // API endpoint where we send form data
    const apiUrl = "https://groupomania-myback.herokuapp.com/api/auth/login";
    // Form the request for sending data to api
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    // Send the form data to our API
    const response = await fetch(apiUrl, options);

    // Get the response data from server as JSON.
    const result = await response.json();
    const localUser = {
      id: result.id,
      token: result.token,
    };
    if (addItemLocalStorage(localUser)) document.location.href = "/";
  };

  return (
    <div id="container" className={styles.container}>
      <HeaderModule title="Groupomania - Signup" description="Signup page" />
      <div className={styles.navbar}>
        <NavbarModule />
      </div>
      <div className={styles.formContainer}>
        <h1
          class="title"
          style={{
            color: "#00d1b2",
            marginBottom: "5rem",
            width: "50%",
            margin: "auto",
            textAlign: "center",
          }}
        >
          Login
        </h1>
        <form class="box" id="form" onSubmit={handleForm}>
          <div class="field">
            <label class="label" htmlFor="email">
              Email
            </label>
            <div class="control">
              <input
                class="input"
                id="email"
                name="email"
                type="email"
                placeholder="e.g. alex@example.com"
                required
              />
            </div>
          </div>

          <div class="field">
            <label class="label" htmlFor="password">
              Password
            </label>
            <div class="control">
              <input
                class="input"
                id="password"
                name="password"
                type="password"
                placeholder="********"
                required
              />
            </div>
          </div>
          <p id="error-msg"></p>
          <button class="button is-primary">Login</button>
        </form>
      </div>
      <div className={styles.footer}>
        <FooterModule />
      </div>
    </div>
  );
}
