import clsx from "clsx";

import { TextareaFieldProps } from "@t";

export const TextareaField = ({ name, label, error, className, ...props }: TextareaFieldProps) => {
    return (
        <div className={clsx(className)}>
            <label htmlFor={name} className="mb-[15px] block text-label tb:mb-[14px]">
                {label}
            </label>
            <textarea
                name={name}
                className={clsx(
                    "py-[14px] px-[21px] block w-full h-[192px] resize-none border-[3px] border-black outline-none bg-transparent text-input transition-all duration-300",
                    "hover:border-orange-hover focus:border-orange-hover [&:not(:placeholder-shown)]:border-orange",
                    {
                        "border-orange": error,
                    }
                )}
                {...props}
            />
            {error && <p className="mt-[8px] text-error">{error.message}</p>}
        </div>
    );
};
