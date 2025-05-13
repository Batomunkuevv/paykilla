import { Dispatch, SetStateAction } from "react";

import { ClassNameProp } from "@t";

export interface FaqItemType {
    question: string;
    answer: string;
}

export interface FaqItemProps extends ClassNameProp {
    textClassName?: string;
    faq: FaqItemType;
    setCurrentFaq: Dispatch<SetStateAction<FaqItemType | null>>;
    setIsOpenChat: Dispatch<SetStateAction<boolean>>;
}
