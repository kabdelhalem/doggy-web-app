/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Feedback } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FeedbackUpdateFormInputValues = {
    Name?: string;
    Description?: string;
    Email?: string;
};
export declare type FeedbackUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeedbackUpdateFormOverridesProps = {
    FeedbackUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FeedbackUpdateFormProps = React.PropsWithChildren<{
    overrides?: FeedbackUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    feedback?: Feedback;
    onSubmit?: (fields: FeedbackUpdateFormInputValues) => FeedbackUpdateFormInputValues;
    onSuccess?: (fields: FeedbackUpdateFormInputValues) => void;
    onError?: (fields: FeedbackUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeedbackUpdateFormInputValues) => FeedbackUpdateFormInputValues;
    onValidate?: FeedbackUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FeedbackUpdateForm(props: FeedbackUpdateFormProps): React.ReactElement;
