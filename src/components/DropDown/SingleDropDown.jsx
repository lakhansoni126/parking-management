import React from "react";
import Dropdown from "react-dropdown-select";
import { ErrorMessage } from "formik";
export default function SingleDropDown(props) {
    return (
        <div
            className="mb-4"
            
        >
            {" "}
            <label>{props?.label}</label>
            <div className="mb-2 mt-0" 
            style={{
                borderBottom: "2px solid #7E30E1",
            }}
            >
                <Dropdown
                    style={{ border: "none",padding:"0PX" }}
                    onChange={(option) => {
                        props?.onChange(option);
                    }}
                    options={props?.options || []}
                    placeholder={props?.placeholder}
                    // color="#77c0ff"
                    className="w-[400px] border-b-2 border-[#7E30E1]"
                />
            </div>
                <ErrorMessage
                    name={props?.name}
                    component="div"
                    className="error text-red-500 text-bold"
                />
        </div>
    );
}
