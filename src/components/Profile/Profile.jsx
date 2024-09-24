import React from "react";
import styles from "./Profile.module.css";

const Profile = ({ username, avatar, tag, location, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={styles.card}>
      <div>
        <img className={styles.avatar} src={avatar} alt={username} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.title}>Followers</span>
          <span className={styles.data}>{followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.title}>Views</span>
          <span className={styles.data}>{views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.title}>Likes</span>
          <span className={styles.data}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
