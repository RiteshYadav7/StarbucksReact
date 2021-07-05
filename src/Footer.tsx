import React from "react";

interface Props {}

const Footer: React.FC<Props> = (props) => {

    return(
        <div>
            This is Footer
        </div>
    );
};

Footer.defaultProps = {};

export default React.memo(Footer);