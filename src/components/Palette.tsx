import * as React from "react";

import { Tool } from "./Tool";
import { Square } from "./shapes/Square";
import { Circle } from "./shapes/Circle";
import { Triangle } from "./shapes/Triangle";

export interface PaletteProps { width: number }

export class Palette extends React.Component<PaletteProps, {}> {
    render() {
        var paletteStyle = {
            float: 'left',
            overflow: 'hidden',
            width:this.props.width + '%'
        }
        return (
            <div id="palette" style={paletteStyle}>
                <Tool x="0%" y="0%" width="100%" height="100%">
                    <Square />
                </Tool>
                <Tool x="0%" y="0%" width="100%" height="100%">
                    <Circle />
                </Tool>
                <Tool x="0%" y="0%" width="100%" height="100%">
                    <Triangle />
                </Tool>
            </div>
        );
    }
}
