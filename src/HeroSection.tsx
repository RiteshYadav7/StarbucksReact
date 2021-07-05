import React from "react";

interface Props {}

const HeroSection: React.FC<Props> = (props) => {

    return(
        <div className="aspect-w-3 aspect-h-4">
            <div className="bg-cover bg-primary-200 bg-hero">Hello World!</div>
        </div>
    );
};

HeroSection.defaultProps = {};

export default React.memo(HeroSection);