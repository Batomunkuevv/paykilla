import clsx from "clsx";

import { InputFieldProps } from "@t";

export const InputField = ({ label, name, error, className, ...props }: InputFieldProps) => {
    return (
        <div className={clsx(className)}>
            <label htmlFor={name} className="mb-[15px] block text-label tb:mb-[14px]">
                {label}
            </label>
            <div className="relative">
                <input
                    name={name}
                    className={clsx(
                        "py-[14px] pl-[21px] pr-[160px] w-full h-[56px] border-[3px] border-black outline-none bg-transparent text-input transition-all duration-300",
                        "tb:pr-[21px]",
                        "hover:border-orange-hover focus:border-orange-hover [&:not(:placeholder-shown)]:border-orange",
                        "disabled:border-disabled",
                        {
                            "border-orange": error,
                        }
                    )}
                    {...props}
                />
                {error && <p className="absolute top-1/2 right-[24px] -translate-y-1/2 text-error tb:mt-[8px] tb:static tb:translate-y-0">{error.message}</p>}
            </div>
        </div>
    );
};
