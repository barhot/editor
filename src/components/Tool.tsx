import * as React from "react";

export interface ToolProps { x: string, y: string, width: string, height: string }

export class Tool extends React.Component<ToolProps, {}> {
    render() {
        var toolStyle = {
            overflow: 'hidden',
            width: 40 + 'px',
            height: 40 + 'px',
            padding: 1 + 'px',
            display: 'inline-block',
            cursor: 'move'
        };
        var toolShapeStyle = {
            width: 30 + 'px',
            height: 30 + 'px',
            display: 'block',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'move',
            left: 5 + 'px',
            top: 5 + 'px'
        }
        return (
            <a href="javascript:void(0);" style={toolStyle}>
                <svg style={toolShapeStyle}>
                    <svg x={this.props.x} y={this.props.y} width={this.props.width} height={this.props.height}>
                        before
                            {this.props.children}
                        after
                    </svg>
                </svg>
            </a>
        );
    }
}
