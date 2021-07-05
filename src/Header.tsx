import React from "react";

interface Props {}

const Header: React.FC<Props> = (props) => {

    return(
        <div className="sticky top-0 flex items-center justify-between px-4 py-3
        bg-primary-400">
            <p className="font-bold text-white text-13 ml-20">STARBUCKS® REWARDS</p>
        </div>
    );
};

Header.defaultProps = {};

export default React.memo(Header);