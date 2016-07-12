import * as React from "react";
import * as ReactDOM from "react-dom";

import { Pane } from "./components/Pane";

ReactDOM.render(
    <Pane palette_width={10} />,
    document.getElementById("pane")
);
