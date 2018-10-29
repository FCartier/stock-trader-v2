import * as React from "react";

import { CategoryHeader } from "./styles"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

interface SectionHeaderProps {
    title: string
}

export const SectionHeader: React.SFC<SectionHeaderProps> = (props) => {
    return (
        <CategoryHeader>
           <h3>{props.title}</h3>
        </CategoryHeader>
    )
}

