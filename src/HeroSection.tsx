import React from "react";
import RoundedLink from "./RoundedLink";

interface Props {}

const HeroSection: React.FC<Props> = (props) => {

    return(
        <div className="aspect-w-3 aspect-h-4">
            <div className="flex bg-cover bg-primary-200 bg-hero items-center">
                <div className="flex-col w-56 ml-8">
                    <h1 className="mt-4 font-medium text-3xl">FREE COFFEE IS A TAP AWAY</h1><br />
                    <p className="text-lg">Join now to start earning Rewards</p><br />
                    <RoundedLink linkText="Join now" linkUrl="https://www.starbucks.com/account/create" theme="white" bg="bg-primary-300" /><br /><br />
                    <p>Or <a href="https://www.starbucks.com/rewards/mobile-apps" className="underline hover:no-underline">join in the app</a> for the best experience</p>
                </div>
            </div>
        </div>
    );
};

HeroSection.defaultProps = {};

export default React.memo(HeroSection);