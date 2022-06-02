import React from "react";



const TablaRow = ({ data }) => {
    return (
        <tr>
            {data.map((item) => {
                return <td key={item}>{item}</td>
            })}
        </tr>
    )
}
export default TablaRow;