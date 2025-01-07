import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

import styles from "./page.module.css";

import MyDoctorLogo from "@/logo/my-doctor.logo";
export default function Home() {
  return (
    <div className={styles.home}>
      <h1>
        <MyDoctorLogo />
        دکتر من
      </h1>
      <GlobalSearchBoxComponent />
      <div className={styles.history}>
        <div className={styles.title}>آخرین جستجوهای شما</div>
        <ul>
          <li>ارتوپد</li>
          <li>قلب و عروق</li>
        </ul>
      </div>
    </div>
  );
}
