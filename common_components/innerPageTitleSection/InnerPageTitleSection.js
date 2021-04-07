//css
import styles from "./inner-page-title-section.module.sass";

export default function InnerPageTitleSection({ title }) {
  return (
    <div className={`${styles.title_container}`}>
      <div className={`${styles.title}`}>{title}</div>
    </div>
  );
}
