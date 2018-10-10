import React from "react";

interface SectionHeaderProps {
    title: string,
}

export const SectionHeader: React.SFC<SectionHeaderProps> = (props) => {
    return (
        <div className="category-header">
                <h3>{props.title}</h3>
        </div>
    )
}