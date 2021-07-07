import React from "react";
import Tab from "./Tab";
import Tabs from "./Tabs";

interface Props {}

const tabs = [
    { title: "25", content: "This is Tab 1 content" },
    { title: "50", content: "This is Tab 2 content" },
    { title: "150", content: "This is Tab 3 content" },
    { title: "200", content: "This is Tab 4 content" },
    { title: "400", content: "This is Tab 5 content" },
];

const TabSection: React.FC<Props> = (props) => {

    return(
        <>
            <Tabs>
                {tabs.map((tab) => (
                    <Tab title={tab.title}>{tab.content}</Tab>
                ))}
            </Tabs>

            <div className="h-40"></div>
        </>
    );
};

TabSection.defaultProps = {};

export default React.memo(TabSection);