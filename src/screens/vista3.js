import React from "react";
import Tabla from "../components/Tabla";

const Vista3 = () => {
    const theadData = ["Name", "Email", "Date"];

    const tbodyData = [
        {
            id: "1",
            items: ["John", "john@email.com", "01/01/2021"],
        },
        {
            id: "2",
            items: ["Sally", "sally@email.com", "12/24/2020"],
        },
        {
            id: "3",
            items: ["Maria", "maria@email.com", "12/01/2020"],
        },
    ];
    return (
        <div>
            <Tabla theadData={theadData} tbodyData={tbodyData} />
        </div>
    );
};

export default Vista3;