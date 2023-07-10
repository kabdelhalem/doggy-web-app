/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FeedbackCreateFormInputValues = {
    Name?: string;
    Description?: string;
    Email?: string;
};
export declare type FeedbackCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeedbackCreateFormOverridesProps = {
    FeedbackCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FeedbackCreateFormProps = React.PropsWithChildren<{
    overrides?: FeedbackCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FeedbackCreateFormInputValues) => FeedbackCreateFormInputValues;
    onSuccess?: (fields: FeedbackCreateFormInputValues) => void;
    onError?: (fields: FeedbackCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeedbackCreateFormInputValues) => FeedbackCreateFormInputValues;
    onValidate?: FeedbackCreateFormValidationValues;
} & React.CSSProperties>;
export default function FeedbackCreateForm(props: FeedbackCreateFormProps): React.ReactElement;
