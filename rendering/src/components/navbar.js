import { useState } from "react";
import navlinks from "./navlinks";
import navsearch from "./navsearch";
const navbar = () => {
    console.log('nav bar rendered');
    const [search,setSerach] = useState('');
  return (
    <div>
      <navlinks />
      <navsearch />
    </div>
  );
};
export default navbar;
