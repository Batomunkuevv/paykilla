import clsx from "clsx";

import { CheckboxFieldProps } from "@t";

export const CheckboxField = ({ label, name, error, className, ...props }: CheckboxFieldProps) => {
    return (
        <div className={clsx(className)}>
            <label className="flex items-center gap-[10px] text-[24px] leading-[133.333%] cursor-pointer xl:text-[18px] xl:leading-[133.333%] sm:text-[16px] sm:leading-[137.5%]">
                <input type="checkbox" name={name} className="[&:checked+span_svg]:opacity-100 sr-only" {...props} />
                <span className="w-[24px] h-[24px] flex justify-center items-center border-[1.5px] border-orange flex-none">
                    <svg
                        className="opacity-0 transition-all duration-300"
                        width="9"
                        height="13"
                        viewBox="0 0 9 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1 5L5 10.5L8 1" stroke="#FF3516" strokeWidth="1.5" />
                    </svg>
                </span>
                {label}
            </label>
            {error && <p className="mt-[8px] text-error">{error.message}</p>}
        </div>
    );
};
