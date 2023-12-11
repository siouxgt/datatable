import React from "react";
import { info } from "../data/info";
import { TableSection } from "./TableSection";


export const Table = () => {
    return <table>
            <thead>
                <th>Email</th>
                <th>Nombre</th>
                <th>Telefono</th>
                <th>Pais</th>
                <th>Alfanumerico</th>



            </thead>

            {info.map((personDetails, index)=>(
                <TableSection personDetails={personDetails} index={index}/>
            ) )}


    </table>
}
