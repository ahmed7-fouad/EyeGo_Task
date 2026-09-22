import { type ReactNode } from "react";

interface tableRowPropsTypes{
    id:number|string,
    name:string,
    date:string,
    amount:number|string,
    statusBtn:ReactNode,
}
const TableRow = ({
  id,
  name,
  date,
  amount,
  statusBtn,
}: tableRowPropsTypes) => {
  return (
    <tr className="border-b-2 border-secondary   w-full">
        <td className="capitalize font-bold text-center py-4">{id}</td>
        <td className="capitalize text-muted text-center py-4">{name}</td>
        <td className="capitalize text-muted text-center py-4">{date}</td>
        <td className="capitalize text-muted text-center py-4">{amount}</td>
        <td className="capitalize text-muted text-center py-4">{statusBtn}</td>
    </tr>
  );
};
export default TableRow;