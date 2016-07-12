import * as React from "react";

export interface CanvasProps { width: number }

export class Canvas extends React.Component<CanvasProps, {}> {
    render() {
        var canvasStyle = {
            width: this.props.width + '%',
            display: 'inline-block',
            backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/7/7c/Lightblue_empty_grid.svg)',
            float: 'left',
            overflow: 'hidden',
            height: 100 + 'vh'
        };

        return (
            <div id="canvas" style={canvasStyle}></div>
        );
    }
}
