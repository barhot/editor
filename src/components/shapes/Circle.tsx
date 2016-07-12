import * as React from "react";

export interface CircleProps { }

export class Circle extends React.Component<CircleProps, {}> {
    render() {
        return (
            <circle cx="50%" cy="50%" r="48%" fill="#ffffff" stroke="#000000" pointerEvents="all"></circle>
        );
    }
}
