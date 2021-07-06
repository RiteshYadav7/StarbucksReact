import React, { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    theme?: "white" | "black";
    linkText?: string;
    linkUrl?: string;
}

const RoundedLink: React.FC<Props> = ({ theme, linkText, linkUrl }) => {
    let themeClasses = "";

    if(theme === "black") {
        themeClasses = "text-black border-black";
    } else {
        themeClasses = "text-white border-white";
    }

    return(
        <a
            className={
                "flex-shrink-0 px-4 py-2 text-sm border font-semibold tracking-wide rounded-full " 
                + themeClasses
            }
            href={linkUrl}
        >{linkText}</a>
    );
};

RoundedLink.defaultProps = {
    theme: "white",
};

export default React.memo(RoundedLink);