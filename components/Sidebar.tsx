import { useLanguage } from "@/lib/LocalizationContext";
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

type Anchor = "right";

interface NavbarProps {
  navData: CMSData;
}

const Sidebar = ({ navData }: NavbarProps) => {
  const [state, setState] = useState({
    right: false,
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const { language, setLanguage } = useLanguage();
  const router = useRouter();
  const currentRoute = router.pathname;
  const navGeneral = navData.data.slice(0, 4);
  const navForMembers = navData.data.slice(4, 11);
  const forMembersLabel = navData.data.slice(11, 12)[0];
  const languagesLabel = navData.data.slice(12, 13)[0];
  const cmsSnackbarMessage = navData.data.slice(13, 14)[0];

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

  const handleLanguageChange = (language: any) => {
    setLanguage(language);
    // @ts-ignore: Dynamic property access
    setSnackbarMessage(`${cmsSnackbarMessage[`text_${language}`]}`);
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
        {navGeneral.map((data: CMSItem) => {
          const route =
            data.text_en.toLowerCase() === "home"
              ? "/"
              : `/${data.text_en.toLowerCase().replace(" ", "-")}`;

          return (
            <ListItem key={data.id} disablePadding>
              <Link
                href={route}
                locale={language}
                passHref
                className={styles.nextLink}
              >
                <ListItemButton
                  className={
                    route === currentRoute
                      ? styles.navLinkActive
                      : styles.navLink
                  }
                >
                  {/* @ts-ignore: Dynamic property access */}
                  {data[`text_${language}`]}
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
      <br />
      <Divider />
      {/* @ts-ignore: Dynamic property access */}
      <ListSubheader>{forMembersLabel[`text_${language}`]}</ListSubheader>
      <List disablePadding>
        {navForMembers.map((data: any) => (
          <ListItem key={data.id} disablePadding>
            <Link
              href={`/${data.text_en.toLowerCase().replace(" ", "-")}`}
              passHref
              className={styles.nextLink}
            >
              <ListItemButton
                className={
                  `/${data.text_en.toLowerCase().replace(" ", "-")}` ===
                  currentRoute
                    ? styles.navLinkActive
                    : styles.navLink
                }
              >
                {data[`text_${language}`]}
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>

      <br />
      <Divider />
      {/* @ts-ignore: Dynamic property access */}
      <ListSubheader>{languagesLabel[`text_${language}`]}</ListSubheader>
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
          onKeyDown={() => handleLanguageChange("en ")}
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
