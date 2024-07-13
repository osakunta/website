import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { CardContent, Stack } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Container>
        <Stack direction="row">
          <Card raised={false}>
            <CardContent>Liity osakuntaan</CardContent>
          </Card>
          <Card raised={false}>
            <CardContent>Liity osakuntaan</CardContent>
          </Card>
          <Card raised={false}>
            <CardContent>Liity osakuntaan</CardContent>
          </Card>
        </Stack>
      </Container>
    </main>
  );
}
