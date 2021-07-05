import React from "react";

interface Props {}

const GiftPage: React.FC<Props> = (props) => {

    return(
        <div>
            This is Gift Page
        </div>
    );
};

GiftPage.defaultProps = {};

export default React.memo(GiftPage);