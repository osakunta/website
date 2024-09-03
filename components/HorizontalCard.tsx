import styles from "@/styles/horizontalCard.module.css";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

interface VerticalCardProps {
  variant: string;
  image: string;
  altText: string;
  title: string;
  description: string;
  btnText: string;
  href: string;
}

// Variants: darkBlue, lightBlue, pink, yellow
// Pass image url string
const HorizontalCard: React.FC<VerticalCardProps> = ({
  variant,
  image,
  altText,
  title,
  description,
  btnText,
  href,
}) => {
  // Set the proper button color
  let btnVariant = "darkBlue";
  if (variant === "darkBlue") {
    btnVariant = "pink";
  }

  return (
    <Card className={`${styles.horizontalCard} ${styles[variant]}`}>
      <CardContent className={styles.cardContent}>
        <span>
          <Typography className={styles.cardTitle}>{title}</Typography>
          <Typography className={styles.cardDescription}>
            {description}
          </Typography>
        </span>
        <Button
          variant="contained"
          className={`button ${btnVariant}`}
          href={href}
        >
          {btnText}
        </Button>
      </CardContent>
      <CardMedia
        component="img"
        image={image}
        alt={altText}
        className={styles.cardMedia}
      />
    </Card>
  );
};

HorizontalCard.propTypes = {
  variant: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default HorizontalCard;
