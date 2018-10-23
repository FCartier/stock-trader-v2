import React from "react";
import { CategoryHeader } from "./styles";

interface SectionHeaderProps {
    title: string,
}

export const SectionHeader: React.SFC<SectionHeaderProps> = (props) => {
    return (
        <CategoryHeader>
                <h3>{props.title}</h3>
        </CategoryHeader>
    )
}