import * as React from "react";

interface NoDataProps {
    componentName: string,
}

const NoData: React.SFC<NoDataProps> = (props) => {
    return <p>No {props.componentName} currently available for this company.</p>
}

export function renderCondition(length: number) {
    if (length === 0) {
      return false;
    } else {
      return true;
    }
}
  
export default NoData;