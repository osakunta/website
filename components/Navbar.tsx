/* eslint-disable react-hooks/exhaustive-deps */
import styles from "@/styles/Navbar.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import close from "../public/close.svg";
import menu from "../public/menu.svg";
import sato_logo_nav from "../public/sato_logo_nav.png";
import { ListSubheader } from "@mui/material";
import { useRouter } from "next/router";

type Anchor = "right";

export interface MyCollectionItem {
  id: number;
  text: string;
}

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });
  const [cmsData, setCmsData] = useState<CMSData>({ data: [] });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const currentRoute = router.pathname;
  const navGeneral = cmsData.data.slice(0, 4);
  const navFormembers = cmsData.data.slice(4);

  useEffect(() => {
    // Import text
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const collectionName: string = "Nav";
      const url = `${process.env.NEXT_PUBLIC_DIRECTUS_URL}items/${collectionName}`;
      const headers = {
        "Content-Type": "application/json",
      };

      try {
        const response = await fetch(url, {
          method: "GET",
          headers,
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        setCmsData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();

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

      {/* {cmsData.data.map((data: any) => (
        <p key={data.id}>{data.text_en}</p>
      ))} */}
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
                  {data.text_en}
                </Link>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <br />
      <Divider />
      <ListSubheader>For Members</ListSubheader>
      <List disablePadding>
        {navFormembers.map((data: any) => (
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
                {data.text_en}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <br />
      <Divider />
      <ListSubheader>Languages</ListSubheader>
      <div>
        <ListItemIcon></ListItemIcon>
        <Button>FI</Button>
        <Button>SV</Button>
        <Button>EN</Button>
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
