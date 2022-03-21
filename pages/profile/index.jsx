import {
  getDataAPI,
  getPostsbyId,
  readLocalStorage,
} from "../../components/UserProvider";
import { NavbarModule } from "../../components/Navbar/Navbar";
import { HeaderModule } from "../../components/Header";
import { FooterModule } from "../../components/Footer/Footer";
import { HeaderProfile } from "../../components/profileHeaderader";
import styles from "./Profile.module.css";
import { useEffect, useState } from "react";
import { BsReplyFill, BsHeartFill } from "react-icons/bs";
export default function Home() {
  // Define hooks to change state
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loStorage, setLoStorage] = useState({});

  // update my hooks at each change of our state
  useEffect(async () => {
    // set a Loading when we update our state
    setLoading(true);
    // Search for a param in our URL
    const queryString = window.location.search;
    const objectId = new URLSearchParams(queryString).get("id");
    // Define a variable to resolve our promise
    let user = objectId
      ? await getDataAPI(objectId)
      : JSON.parse(localStorage.getItem("user"));

    // set our state on our hooks
    const localItem = await readLocalStorage();
    setLoStorage(localItem);
    console.log(localItem);
    const fetchData = await getDataAPI(user.id);
    setData(fetchData);
    const fetchPosts = await getPostsbyId(user.id);
    setPosts(fetchPosts);
    let htmlElements = [];
    console.log("fetchPosts");
    console.log(fetchPosts);
    console.log('oui')
    console.log(Date.now())
    for (let post in fetchPosts) {
      console.log(post);
      htmlElements.push(
        <div class="card mb-6">
          <article class="media">
            {/* <figure class="media-left">
        <p class="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </p>
      </figure> */}
            <div class=" card-content media-content">
              <div class="content">
                <p>
                  <strong>{data.name}</strong> <small>{data.email}</small>
                  <small> { Math.round((Date.now() -parseInt(fetchPosts[post].date))/60000) }m</small>
                  <br />
                  {fetchPosts[post].textContent}
                </p>
              </div>
              <nav class="level is-mobile">
                <div class="level">
                  <a class="level-item">
                    <span class="icon is-small">
                      <BsReplyFill />
                    </span>
                  </a>
                  <div class="level-item">
                    <span class="icon is-small">
                      <BsHeartFill />
                    </span>
                    <p id="likes" class="ml-1">
                      {fetchPosts[post].likes}
                    </p>
                  </div>
                </div>
              </nav>
            </div>
          </article>
        </div>
      );
    }

    setPosts(htmlElements);
    await setLoading(false);
  }, []);

  const handlePost = async (event) => {
    event.preventDefault();

    const dataObject = {
      content: event.target.post.value,
      userId: data.id,
    };
    if (!dataObject.content) return;
    let dataJSON = JSON.stringify(dataObject);
    const apiUrl = "https://groupomania-myback.herokuapp.com/api/posts/";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: dataJSON,
    };
    const response = await fetch(apiUrl, options);

    const result = await response.json();
    console.log(result);
    const fetchData = await getDataAPI(result.userId);
    setData(fetchData);
    window.location.reload();
  };

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
  console.log(data);
  if (data.id == loStorage.id) {
    return (
      <div className={styles.container} id="container">
        <HeaderProfile data={data} />
        <div class="tile is-ancestor is-justify-content-center mt-4 mb-4">
          <div class="tile is-vertical is-8">
            <div class="tile">
              <div class="tile is-parent">
                <article class="tile is-child notification">
                  <p class="title">Add Post</p>
                  {/* <p class="subtitle">With an image</p> */}
                  <form id="form" onSubmit={handlePost}>
                    <textarea
                      class="textarea is-hovered"
                      placeholder="Your post..."
                      rows="5"
                      name="post"
                    ></textarea>
                    <button class="button is-primary is-outlined">Post</button>
                  </form>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification has-background-success-light">
                <p class="title">Posts</p>
                <div class="content">
                  {posts}
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
  return (
    <div className={styles.container} id="container">
      <HeaderProfile data={data} />
      <div class="tile is-ancestor is-justify-content-center mt-4 mb-4">
        <div class="tile is-vertical is-8">
          <div class="tile is-parent">
            <article class="tile is-child notification has-background-success-light">
              <p class="title">Posts</p>
              <div class="content">
                {posts}
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
