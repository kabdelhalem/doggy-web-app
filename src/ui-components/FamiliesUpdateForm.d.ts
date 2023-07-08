/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Families } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FamiliesUpdateFormInputValues = {
    Family_Name?: string;
};
export declare type FamiliesUpdateFormValidationValues = {
    Family_Name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FamiliesUpdateFormOverridesProps = {
    FamiliesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Family_Name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FamiliesUpdateFormProps = React.PropsWithChildren<{
    overrides?: FamiliesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    families?: Families;
    onSubmit?: (fields: FamiliesUpdateFormInputValues) => FamiliesUpdateFormInputValues;
    onSuccess?: (fields: FamiliesUpdateFormInputValues) => void;
    onError?: (fields: FamiliesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FamiliesUpdateFormInputValues) => FamiliesUpdateFormInputValues;
    onValidate?: FamiliesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FamiliesUpdateForm(props: FamiliesUpdateFormProps): React.ReactElement;
