import { TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error?: FieldError;
}
