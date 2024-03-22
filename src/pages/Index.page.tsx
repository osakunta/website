import { useEffect, useState } from "react";
import { getTime } from "../services/time.service";

function Index() {
  const [data, setData] = useState<string | null>(null);
  useEffect(() => {
    getTime()
      .then(setData)
      .catch((error: unknown) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Index Page</h1>
      All this data should be statically generated at build time. <br />
      That means this should not be the current time in Helsinki: {data} <br />
      It currently is, however, because the data is fetched at runtime.
    </div>
  );
}

export default Index;
