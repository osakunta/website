import { Language, useLanguage } from "@/lib/LanguageContext";
import styles from "@/styles/Navbar.module.css";
import {
  Alert,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListSubheader,
  Snackbar,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import close from "../public/close.svg";
import menu from "../public/menu.svg";
import useTranslate from "@/hooks/useTranslate";
import { NavigationLink } from "@/lib/cmsClient";

type Anchor = "right";

type NavbarProps = {
  links: NavigationLink[];
};

const Sidebar = ({ links }: NavbarProps) => {
  const t = useTranslate();
  const [state, setState] = useState({
    right: false,
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const { language, setLanguage } = useLanguage();
  const router = useRouter();
  const currentRoute = router.pathname;
  const navGeneral = links.filter((link) => link.category === "GENERAL");
  const navForMembers = links.filter((link) => link.category === "FOR_MEMBERS");

  // MUI Drawer toggling
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setSnackbarMessage(t("snackbar:languageChanged", newLanguage));
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Button
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <Image src={close} alt="close icon" />
      </Button>

      <List disablePadding>
        {navGeneral.map((link) => {
          return (
            <ListItem key={link.url} disablePadding>
              <Link
                href={link.url}
                locale={language}
                passHref
                className={styles.nextLink}
              >
                <ListItemButton
                  className={
                    link.url === currentRoute
                      ? styles.navLinkActive
                      : styles.navLink
                  }
                >
                  {t(link.label_key)}
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
      <br />
      <Divider />
      <ListSubheader>{t("nav:forMembers")}</ListSubheader>
      <List disablePadding>
        {navForMembers.map((link) => (
          <ListItem key={link.url} disablePadding>
            <Link href={link.url} passHref className={styles.nextLink}>
              <ListItemButton
                className={
                  link.url === currentRoute
                    ? styles.navLinkActive
                    : styles.navLink
                }
              >
                {t(link.label_key)}
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>

      <br />
      <Divider />
      <ListSubheader>{t("nav:languages")}</ListSubheader>
      <div className={styles.languageButtonGroup}>
        <Button
          onClick={() => handleLanguageChange("fi")}
          onKeyDown={() => handleLanguageChange("fi")}
          className={
            language === "fi"
              ? styles.activeLanguageButton
              : styles.languageButton
          }
        >
          FI
        </Button>
        <Button
          onClick={() => handleLanguageChange("sv")}
          onKeyDown={() => handleLanguageChange("sv")}
          className={
            language === "sv"
              ? styles.activeLanguageButton
              : styles.languageButton
          }
        >
          SV
        </Button>
        <Button
          onClick={() => handleLanguageChange("en")}
          onKeyDown={() => handleLanguageChange("en")}
          className={
            language === "en"
              ? styles.activeLanguageButton
              : styles.languageButton
          }
        >
          EN
        </Button>
      </div>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <div key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Image src={menu} alt="Hamburger menu" width={45} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </div>
      ))}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Sidebar;
