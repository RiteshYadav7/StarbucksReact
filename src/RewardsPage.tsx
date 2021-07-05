import React from "react";

interface Props {}

const RewardsPage: React.FC<Props> = (props) => {

    return(
        <div>
            This is Rewards Page
        </div>
    );
};

RewardsPage.defaultProps = {};

export default React.memo(RewardsPage);