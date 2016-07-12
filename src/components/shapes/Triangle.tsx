import * as React from "react";

export interface TriangleProps { }

export class Triangle extends React.Component<TriangleProps, {}> {
    render() {
        return (
            <svg width='100%' height='100%' viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="0 0, 0 100, 100 50" fill="#ffffff" stroke="#000000" pointerEvents="all" />
            </svg>
        );
    }
}
