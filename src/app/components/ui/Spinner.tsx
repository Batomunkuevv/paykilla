import { SpinnerProps } from "@t";

export const Spinner = ({ className, fill = "#F6FBFF" }: SpinnerProps) => {
    return (
        <div className={className} role="status" aria-live="polite">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                {Array.from({ length: 8 }).map((_, i) => (
                    <rect
                        key={i}
                        x="22"
                        y="36"
                        width="4"
                        height="12"
                        rx="2"
                        fill={fill}
                        transform={`rotate(${i * 45} 24 24)`}
                        className="animate-spinner"
                        style={{
                            animationDelay: `${(i * 0.1).toFixed(1)}s`,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
};
