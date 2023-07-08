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
export declare type FamiliesCreateFormInputValues = {
    Family_Name?: string;
};
export declare type FamiliesCreateFormValidationValues = {
    Family_Name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FamiliesCreateFormOverridesProps = {
    FamiliesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Family_Name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FamiliesCreateFormProps = React.PropsWithChildren<{
    overrides?: FamiliesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FamiliesCreateFormInputValues) => FamiliesCreateFormInputValues;
    onSuccess?: (fields: FamiliesCreateFormInputValues) => void;
    onError?: (fields: FamiliesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FamiliesCreateFormInputValues) => FamiliesCreateFormInputValues;
    onValidate?: FamiliesCreateFormValidationValues;
} & React.CSSProperties>;
export default function FamiliesCreateForm(props: FamiliesCreateFormProps): React.ReactElement;
