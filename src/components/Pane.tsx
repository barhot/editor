import * as React from "react";

import { Palette } from "./Palette";
import { Canvas } from "./Canvas";

export interface PaneProps { palette_width: number }

export class Pane extends React.Component<PaneProps, {}> {
    render() {
        return (
            <div>
                <Palette width={this.props.palette_width} />
                <Canvas width={100 - this.props.palette_width} />
            </div>
        );
    }
}
