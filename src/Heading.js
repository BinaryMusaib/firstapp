
import React, {useState} from "react";

function Heading(props) {
    const [showMenu, setShowMenu] = useState(false);
    return (
      <div>
        {console.log(showMenu)}
        {console.log(setShowMenu)}
      </div>
    );
  }

export default Heading;