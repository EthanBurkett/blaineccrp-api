import config from "./config";
import { createApp } from "./utils/createApp";
const port = config.port;
import "./database";

async function main() {
  try {
    const app = createApp();

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
