import * as React from "react";

export interface SquareProps { }

export class Square extends React.Component<SquareProps, {}> {
    render() {
        return (
            <rect x="0" y="0" width="100%" height="100%" fill="#ffffff" stroke="#000000" pointerEvents="all"></rect>
        );
    }
}
