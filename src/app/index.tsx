import * as React from "react";
import Badge from "@mui/material/Badge";
import "@material/web/button/filled-button";

export default function Home() {
  return (
    <main>
      Hello World
      <md-filled-button>BUTTON</md-filled-button>
      <Badge badgeContent={4}></Badge>
    </main>
  );
}
