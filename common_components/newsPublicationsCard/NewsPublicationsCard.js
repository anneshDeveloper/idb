import Image from "next/image";
import { Button } from "antd";
//css
import styles from "./news-publications-card.module.sass";

export default function NewsPublicationsCard({ data }) {
    const base_url = process.env.BASE_URL;
    return (
      <div className={`${styles.whats_new_card} p-4`}>
        <div className={`${styles.whats_new_card_image} mb-3`}>
          <Image
            src={base_url + data.NewsImage[0].formats.thumbnail.url}
            alt="card-img"
            width="284"
            height="202"
          />
        </div>
        <div className={`${styles.whats_new_card_text}`}>
          <h3>{data.NewsTitle}</h3>
          <p>{data.NewsDescription}</p>
        </div>
        <Button className={`${styles.whats_new_card_btn}`}>
          <h6 className={`m-0`}>READ MORE</h6>
        </Button>
      </div>
    );
  }