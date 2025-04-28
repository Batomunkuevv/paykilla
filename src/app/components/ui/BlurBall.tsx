import clsx from "clsx";

import { BlurBallProps } from "@t";

export const BlurBall = ({ color, className }: BlurBallProps) => {
    return (
        <div style={{ background: color }} className={clsx("absolute z-[-1] rounded-full opacity-[0.64] blur-[60px]", className)}>
            <div className="pt-[100%]"></div>
        </div>
    );
};
