import clsx from "clsx";

import { FaqItemProps } from "@/types";

export const FaqItem = ({ faq, setCurrentFaq, setIsOpenChat, className, textClassName }: FaqItemProps) => {
    const handleFaqClick = () => {
        setCurrentFaq(faq);
        setIsOpenChat(true);
    };

    return (
        <button
            className={clsx(
                "p-[30px] min-h-[180px] bg-sky h3 text-left flex transitionl-all duration-300 tb:pt-[32px] sm:p-[20px] sm:pb-[19px] sm:min-h-[113px]",
                "hover:bg-sky-hover",
                className
            )}
            type="button"
            onClick={handleFaqClick}
        >
            <span className={textClassName} dangerouslySetInnerHTML={{ __html: faq.question }}></span>
        </button>
    );
};
