import React from "react";

interface Props {}

const GettingStarted: React.FC<Props> = (props) => {

    return(
        <div className="px-28 py-28">
            <div className="text-center pb-5">
                <h1 className="font-semibold text-2xl">Getting started is easy</h1>
            </div>
            <div className="text-center pb-12">
                <p>Earn Stars and get rewarded in a few easy steps.</p>
            </div>
            <div className="flex">
                <div className="flex-col text-center flex-1 pr-10">
                    <span className="rounded-full px-4 py-3 border-2 border-primary-300 text-primary-400 font-bold">1</span>
                    <h1 className="font-medium text-xl pt-10 pb-4">Create an account</h1>
                    <p>To get started, <a href="" className="text-primary-300 underline hover:no-underline">join now</a>. You can also <a href="" className="text-primary-300 underline hover:no-underline">join in the app</a> to get access to the full range of Starbucks® Rewards benefits.</p>
                </div>
                <div className="flex-col text-center flex-1 pr-10">
                    <span className="rounded-full px-4 py-3 border-2 border-primary-300 text-primary-400 font-bold">2</span>
                    <h1 className="font-medium text-xl pt-10 pb-4">Order and pay how you’d like</h1>
                    <p>Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. <a href="" className="text-primary-300 underline hover:no-underline">Learn how</a></p>
                </div>
                <div className="flex-col text-center flex-1">
                <span className="rounded-full px-4 py-3 border-2 border-primary-300 text-primary-400 font-bold">3</span>
                    <h1 className="font-medium text-xl pt-10 pb-4">Earn Stars, get Rewards</h1>
                    <p>As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
                </div>
            </div>
        </div>
    );
};

GettingStarted.defaultProps = {};

export default React.memo(GettingStarted);