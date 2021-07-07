import { Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { Children } from "react";

interface Props {
    children: React.ReactElement[];
}

const Tabs: React.FC<Props> = ({ children }) => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const tabWidth = 100 / children.length;

    return(
        <div>
            <div className="pb-1 bg-primary-100">
                <div className="relative max-w-md mx-auto">
                    <h1 className="font-medium text-3xl text-center py-12">Get your favorites for free</h1>
                    <div className="flex text-2xl font-medium">
                        {children.map((child, index) => (
                            <div
                                className="flex-1 px-2 py-4 text-center cursor-pointer"
                                onClick={() => setSelectedIndex(index)}
                            >
                                {child.props.title}
                                <span className="text-xs text-gold">★</span>
                            </div>
                        ))}
                    </div>
                    <div
                        className="absolute h-1 duration-300 ease-in-out bg-primary-300"
                        style={{
                            width: tabWidth + "%",
                            left: tabWidth * selectedIndex + "%",
                        }}
                    ></div>
                </div>
            </div>
            <div className="relative bg-primary-200">
                {children.map((child, index) => (
                    <Transition
                        as={Fragment}
                        show={index === selectedIndex}
                        enter="transition-opacity duration-1000"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        entered="opacity-100"
                        leave="transition-opacity duration-1000"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="absolute top-0 left-0 right-0 px-2 py-4 bg-primary-200">
                            {child}
                        </div>
                    </Transition>
                ))}
            </div>
        </div>
    );
};

Tabs.defaultProps = {};

export default React.memo(Tabs);