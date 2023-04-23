import React from "react";
import { TableCar, TableMecanico } from "../../components";
import { getData } from "../../services/useLocalStorage";

export default function Veiculos () {
    const user = getData("user");
    const role = user.role;
    
    
    return (
        <div>
            { role === "cliente" ? (
             <TableCar />
             ) : (
             <TableMecanico />
             )}   
        </div>

    )
}