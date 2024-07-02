import { ErrorMessage, Field } from "formik";
import React from "react";

export default function InputBox(props) {
    return (
        <div>
            <label>
                {props?.label}
                <div className="mb-7">
                    <Field
                        name={props?.name}
                        type={props?.type}
                        placeholder={props?.placeholder}
                        className="w-[400px] border-b-2 border-[#7E30E1] bg-transparent placeholder-text-black"
                    />
                    <ErrorMessage
                        name={props?.name}
                        component="div"
                        className="error text-red-500 text-bold"
                    />
                </div>
            </label>
        </div>
    );
}
