import { HeaderModule } from "../../components/Header";
import { NavbarModule } from "../../components/Navbar/Navbar";
import { getDataAPI } from "../../components/UserProvider";
import { FooterModule } from "../../components/Footer/Footer";
import styles from "./Profile.module.css";
import { useEffect, useState } from "react";
export default function Home() {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false)
    let name;
  useEffect(async () => {
    setLoading(true)
    let user = JSON.parse(localStorage.getItem("user"));
    const fetchData = await getDataAPI(user.id);
    setData(fetchData);
    console.log(data.email);
    await setLoading(false);
  }, []);

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  return (
    <div className={styles.container} id="container">
      <HeaderModule title="Groupomania" description="None yet" />
      <NavbarModule />
      <div class="card">
        <div class="card-image">
          <figure class="image is-1080x275">
            <img
              src="https://caltrout.org/wp-content/uploads/2016/02/header-placeholder.jpg"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className={styles.cardHeader}>
          <div class="card-image" className={styles.avatarImg}>
            <figure class="image is-128x128">
              <img
                class="is-rounded"
                src="https://image.shutterstock.com/image-vector/user-account-circle-profile-line-600w-272552858.jpg"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4 has-text-centered">{name}</p>
                <p class="subtitle is-6 has-text-centered">{data.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterModule />
    </div>
  );
}
