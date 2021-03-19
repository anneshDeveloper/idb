import { Button } from "antd";
//css
import styles from "./app-btn.module.sass";

export default function AppBtn({ text, prefix, suffix }) {
  return (
    <Button
      className={`${styles.app_btn} ${
        text === "Filter" || text === "Raise Request" ? "border-0" : styles.app_btn_border
      } ${text === "Filter" ? styles.app_btn_bg : ""} ${
        text === "Raise Request" ? styles.bg_white : ""
      } my-4`}
    >
      <span className={`d-flex justify-content-center`}>
        {prefix} {text} {suffix}
      </span>
    </Button>
  );
}
