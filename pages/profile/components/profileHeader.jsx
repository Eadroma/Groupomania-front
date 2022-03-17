import { NavbarModule } from "../../../components/Navbar/Navbar";
import { HeaderModule } from "../../../components/Header";
import styles from '../Profile.module.css'
export const HeaderProfile = ({ data }) => {
    return (
        <>
        <HeaderModule title="Groupomania" description="None yet" />
        <NavbarModule />
        <div class="card">
          <div class="card-image">
            <figure class="image is-1080x275">
              <img src={data.coverUrl} alt="Placeholder image" />
            </figure>
          </div>
          <div className={styles.cardHeader}>
            <div class="card-image" className={styles.avatarImg}>
              <figure class="image is-128x128">
                <img class="is-rounded" src={data.imgUrl} />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4 has-text-centered">{data.name}</p>
                  <p class="subtitle is-6 has-text-centered">{data.email}</p>
                  <div class="text has-text-centered is-italic">''{data.description}''</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}