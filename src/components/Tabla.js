import React from "react";
import TablaRow from "./TablaRow";
import TablaHeadItem from "./TablaHead";

const Tabla = ({ theadData, tbodyData,}) => {
    return(
        <table className="Tabla">
            <div className="divTabla">
            <thead className="TablaHead">
                <tr>
                    {theadData.map((h) => {
                        return <TablaHeadItem key={h} item={h} />;
                    })}
                </tr>
            </thead>
            <tbody className="TablaBody">
                {tbodyData.map((item) => {
                    return <TablaRow key={item.id} data={item.items}
/>
                })}
            </tbody>
            </div>
        </table>
    )
}
export default Tabla;