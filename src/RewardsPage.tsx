import React from "react";
import ConfirmationDialog from "./ConfirmationDialog";
import GettingStarted from "./GettingStarted";
import HeroSection from "./HeroSection";

interface Props {}

const RewardsPage: React.FC<Props> = (props) => {

    return(
        <>
            <ConfirmationDialog />
            <HeroSection />
            <GettingStarted />
        </>
    );
};

RewardsPage.defaultProps = {};

export default React.memo(RewardsPage);