import { Card, CardActionArea } from "@mui/material";
import styles from "@/styles/newsCard.module.css";
import Image from "next/image";
import arrowBlue from "@/public/arrow_forward_blue.svg";
import PropTypes from "prop-types";

interface NewsCardProps {
  title: string;
  date: string;
  description: string;
  href: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  date,
  description,
  href,
}) => (
  <Card className={styles.newsCard}>
    <CardActionArea href={href} className={styles.cardActionArea}>
      <div className={styles.cardText}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDate}>
          <b>{date}</b>
        </p>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      <Image src={arrowBlue} alt="arrow forward" />
    </CardActionArea>
  </Card>
);

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default NewsCard;
