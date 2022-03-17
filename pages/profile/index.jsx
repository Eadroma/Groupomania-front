import { getDataAPI } from "../../components/UserProvider";
import { NavbarModule } from "../../components/Navbar/Navbar";
import { HeaderModule } from "../../components/Header";
import { FooterModule } from "../../components/Footer/Footer";
import { HeaderProfile } from "./components/profileHeader";
import styles from "./Profile.module.css";
import { useEffect, useState } from "react";
export default function Home() {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false);
  useEffect(async () => {
    setLoading(true);
    const queryString = window.location.search;
    const objectId = new URLSearchParams(queryString).get("id");
    let user;
    if (!objectId) user = JSON.parse(localStorage.getItem("user"));
    else user = await getDataAPI(objectId);
    const fetchData = await getDataAPI(user.id);
    setData(fetchData);
    await setLoading(false);
    console.log(data);
  }, []);

  console.log(data);
  if (isLoading)
    return (
      <div className={styles.container} id="container">
        <HeaderModule title="Groupomania" description="None yet" />
        <NavbarModule />
        <p className={styles.loading}>Loading...</p>
      </div>
    );
  if (!data) return <p>No profile data</p>;
  return (
    <div className={styles.container} id="container">
      <HeaderProfile data={data} />
      <div class="tile is-ancestor is-justify-content-center mt-4 mb-4">
        <div class="tile is-vertical is-4">
          <div class="tile">
            <div class="tile is-parent">
              <article class="tile is-child notification">
                <p class="title">Add Post</p>
                {/* <p class="subtitle">With an image</p> */}
                <textarea
                  class="textarea is-hovered"
                  placeholder="Your post..."
                  rows="5"
                ></textarea>
                <button class="button is-primary is-outlined">Post</button>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification has-background-success-light">
              <p class="title">Posts</p>
              <div class="content">
                {/* <article class="media">
                  <figure class="media-left">
                    <p class="image is-64x64">
                      <img src="https://bulma.io/images/placeholders/128x128.png" />
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>{data.name}</strong> <small>{data.email}</small>{" "}
                        <small>31m</small>
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin ornare magna eros, eu pellentesque tortor
                        vestibulum ut. Maecenas non massa sem. Etiam finibus
                        odio quis feugiat facilisis.
                      </p>
                    </div>
                    <nav class="level is-mobile">
                      <div class="level-left">
                        <a class="level-item">
                          <span class="icon is-small">
                            <i class="fas fa-reply"></i>
                          </span>
                        </a>
                        <a class="level-item">
                          <span class="icon is-small">
                            <i class="fas fa-heart"></i>
                          </span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </article> */}
              </div>
            </article>
          </div>
        </div>
      </div>
      <FooterModule />
    </div>
  );
}
