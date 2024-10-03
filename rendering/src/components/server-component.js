import fs from "fs";
import { ServerComponentTwo } from "./server-component-two";
export const ServerComponent = () => {
  fs.readFileSync("src/components/server-component.js", "utf-8");
  return (
    <>
      <h1 className="text-white">Server Component One</h1>
      <ServerComponentTwo />
    </>
  );
};
