import React from "react";

export default function HeadingSection({ title }) {
    return (
        <h2 className="text-orange-500 font-bold text-[40px] text-center mb-10">
            {title}
        </h2>
    );
}
