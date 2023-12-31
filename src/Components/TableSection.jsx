import React from "react";
import { TableRow } from "./TableRow";
import { ExpendableButton } from "./ExpendableButton";
import useOpenController from "../Hooks/UseOpenController";

export const TableSection = ({personDetails, index}) => {
    const {isOpen, toggle} = useOpenController(false);
    return    (
    <tbody>
        <tr>
            <td className="button-td">
                <ExpendableButton isOpen={isOpen} toggle={toggle}/>
            </td>
            <td><b>Person: {index}</b>
            <td></td>
            <td></td>
            <td></td>
            </td>
        </tr>
        {isOpen && <TableRow personDetails={personDetails}/>}
        </tbody>
    );
}