import React from "react";
import RoundedLink from "./RoundedLink";

interface Props {}

const Header: React.FC<Props> = (props) => {

    return(
        <div className="sticky top-20 z-10 flex items-center justify-between px-4 py-3
        bg-primary-400">
            <p className="font-bold text-white text-13">STARBUCKS® REWARDS</p>
            <RoundedLink linkText="Join in the app" linkUrl="https://starbucks.com" theme="white" />
        </div>
    );
};

Header.defaultProps = {};

export default React.memo(Header);