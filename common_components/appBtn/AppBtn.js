import { Button } from "antd";
//css
import styles from "./app-btn.module.sass";

export default function AppBtn({ text, prefix, suffix, mode }) {
  return (
    <Button
      className={`my-4 ${styles.app_btn} ${
        mode === "dark"
          ? styles.app_btn_dark
          : styles.app_btn_light
      }`}
    >
      <span className={`d-flex justify-content-center`}>
        {prefix} {text} {suffix}
      </span>
    </Button>
  );
}
