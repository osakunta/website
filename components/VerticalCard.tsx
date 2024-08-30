import styles from "@/styles/verticalCard.module.css";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import arrowBlue from "../public/arrow_forward_blue.svg";
import arrowWhite from "../public/arrow_forward_white.svg";

interface VerticalCardProps {
  variant: string;
  image: string;
  title: string;
  altText: string;
  href: string;
}

// Variants: darkBlue, lightBlue, pink, yellow
// Pass image url string
const VerticalCard: React.FC<VerticalCardProps> = ({
  variant,
  image,
  title,
  altText,
  href,
}) => {
  let arrowForward;
  if (variant === "darkBlue") {
    arrowForward = arrowWhite;
  } else {
    arrowForward = arrowBlue;
  }

  return (
    <Card className={`${styles.verticalCard} ${styles[variant]}`}>
      <CardActionArea>
        <CardMedia height={250} component="img" image={image} alt={altText} />
        <CardContent className={`${styles.cardContent} ${styles[variant]}`}>
          <Typography>{title}</Typography>
          <Image src={arrowForward} alt="Arrow forward" />
        </CardContent>
      </CardActionArea>
      <CardActions className={`${styles.cardLink} ${styles[variant]}`}>
        <Link href={href} />
      </CardActions>
    </Card>
  );
};

VerticalCard.propTypes = {
  variant: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default VerticalCard;
