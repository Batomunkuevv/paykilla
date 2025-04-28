import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface CheckboxFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    error?: FieldError;
}
