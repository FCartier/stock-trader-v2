import React from "react";

interface NoDataProps {
    componentName: string,
}

const NoData: React.SFC<NoDataProps> = (props) => {
    return <h5>No {props.componentName} currently available for this company.</h5>
}

export default NoData;