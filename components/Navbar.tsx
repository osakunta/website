/* eslint-disable react-hooks/exhaustive-deps */
import styles from "@/styles/Navbar.module.css";
import { ListSubheader } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import close from "../public/close.svg";
import menu from "../public/menu.svg";
import sato_logo_nav from "../public/sato_logo_nav.png";
import { useLanguage } from "@/lib/LocalizationContext";

type Anchor = "right";

interface NavbarProps {
  navData: CMSData;
}

const Navbar = ({ navData }: NavbarProps) => {
  const [state, setState] = useState({
    right: false,
  });
  const cmsData = navData;
  const router = useRouter();
  const currentRoute = router.pathname;
  const navGeneral = cmsData.data.slice(0, 4);
  const navForMembers = cmsData.data.slice(4);
  const forMembersLabel = cmsData.data.slice(11, 12)[0];
  const languagesLabel = cmsData.data.slice(12, 13)[0];
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    // Scroll to hide header
    let prevScrollpos = window.scrollY;
    const handleScroll = () => {
      const currentScrollpos = window.scrollY;
      const navWrapper = document.getElementById("navContainer");
      if (navWrapper) {
        if (prevScrollpos > currentScrollpos) {
          navWrapper.style.top = "0";
        } else {
          navWrapper.style.top = "-10rem";
        }
      }
      prevScrollpos = currentScrollpos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Button onClick={toggleDrawer(anchor, false)}>
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
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <Link
                  href={route}
                  className={
                    route === currentRoute
                      ? styles.navLinkActive
                      : styles.navLink
                  }
                >
                  {/* @ts-ignore: Dynamic property access */}
                  {data[`text_${language}`]}
                </Link>
              </ListItemButton>
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
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <Link
                href={`/${data.text_en.toLowerCase().replace(" ", "-")}`}
                className={
                  `/${data.text_en.toLowerCase().replace(" ", "-")}` ===
                  currentRoute
                    ? styles.navLinkActive
                    : styles.navLink
                }
              >
                {data[`text_${language}`]}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <br />
      <Divider />
      {/* @ts-ignore: Dynamic property access */}
      <ListSubheader>{languagesLabel[`text_${language}`]}</ListSubheader>
      <div>
        <ListItemIcon></ListItemIcon>
        <Button
          onClick={() => setLanguage("fi")}
          className={
            language === "fi"
              ? styles.activeLanguageButton
              : styles.languageButton
          }
        >
          FI
        </Button>
        <Button
          onClick={() => setLanguage("sv")}
          className={
            language === "sv"
              ? styles.activeLanguageButton
              : styles.languageButton
          }
        >
          SV
        </Button>
        <Button
          onClick={() => setLanguage("en")}
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
    <div className={styles.navContainer} id="navContainer">
      <nav id="navbar" className={styles.navbar}>
        <Link href="/">
          <Image
            src={sato_logo_nav}
            alt="A nav link to the home page"
            width={120}
          />
        </Link>
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
      </nav>
    </div>
  );
};

export default Navbar;
