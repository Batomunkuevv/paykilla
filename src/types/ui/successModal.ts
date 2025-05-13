import { Dispatch, SetStateAction } from "react";

import { ClassNameProp } from "@t";

export interface StatusModalType {
    title: string;
    text?: string;
}

export interface StatusModalProps extends ClassNameProp {
    setModal: Dispatch<SetStateAction<StatusModalType | null>>;
    modal: StatusModalType;
}
