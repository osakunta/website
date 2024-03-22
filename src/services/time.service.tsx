import { z } from "zod";

const timeSchema = z.object({
  datetime: z.string(),
});

// This is just a dumb wrapper showcasing services
async function getTime() {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/Europe/Helsinki"
  );

  const data = timeSchema.parse(await res.json());

  return `The time in Helsinki was ${data.datetime} during the build`;
}

export { getTime };
