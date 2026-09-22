import { Input } from "@/components/ui/input";
import Tag  from "../shared/Tag";
import {useState} from "react"
import { handleFilter } from "@/slices/users/usersSlice";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { type ReactNode } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MainBtn from "../shared/MainBtn";
import { useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { getUsersThunk } from "@/slices/users/usersSlice";
import TableRow from "./TableRow";

interface userType{
      "id": number,
      "firstName": string,
      "lastName": string,
      "maidenName": string,
      "status":("pending"|"failed"|"success"),
      "age": number
      "gender": string,
      "email": string,
      "phone": string,
      "username": string,
      "password": string,
      "birthDate": string,
      "image": string,
      "bloodGroup": string,
      "height": number,
      "weight": number,
      "eyeColor": string,
      "hair": {
        "color": string,
        "type": string
      },
      "ip": string,
      "address": {
        "address": string,
        "city": string,
        "state": string,
        "stateCode": string,
        "postalCode": string,
        "coordinates": {
          "lat":number,
          "lng": number,
        },
        "country": string
      },
      "macAddress": string,
      "university": string,
      "bank": {
        "cardExpire": string,
        "cardNumber": string,
        "cardType": string,
        "currency": string,
        "iban": string,
      },
      "company": {
        "department": string,
        "name": string,
        "title":string,
        "address": {
          "address": string,
          "city": string,
          "state": string,
          "stateCode": string,
          "postalCode":string,
          "coordinates": {
            "lat": number,
            "lng": number
          },
          "country": string
        }
      },
      "ein": string,
      "ssn": string,
      "userAgent": string,
      "crypto": {
        "coin": string,
        "wallet": string,
        "network": string
      },
      "role": string
    }

const items = [
  { label: "All Statuses", value: "All statuses" },
  { label: "Paid", value: "Paid" },
  { label: "Pending", value: "Pending" },
  { label: "Failed", value: "Failed" },
];

const MainDashboardTable = ({ title }: { title: string }) => {
    
    const [filteredData, setFilterData] = useState({
      searchVal: "",
      selectVal: "All Statuses",
    });

    function handleSearch(e){
        const updatedData = { ...filteredData, searchVal: e.target.value };
        setFilterData(updatedData);
        dispatch(handleFilter(updatedData));
    }
    function handleSelectedValue(value){
        const updatedData = { ...filteredData, selectVal: value };
        setFilterData(updatedData);
        dispatch(handleFilter(updatedData));
    }
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getUsersThunk({}));
    },[])
    const users: userType[] = useSelector((state) => {
      return state?.users?.allFilteredUsers;
    });


    // Export EXCEL & PDF
    function exportExcelSheet(){
        const excelTableFormat=users.map((user)=>{
            return{
                "Order Id":user.id,
                "Customer":user.username,
                "Date":user.birthDate,
                "Amount":user.age,
                "Status":user.status,
            }
        })

        const worksheet = XLSX.utils.json_to_sheet(excelTableFormat);
        const paper = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(paper, worksheet, "Pulse Users Data");
        XLSX.writeFile(paper,"Pulse-dashboard-users.xlsx");
    }
    function exportPdfFile(){
        const doc = new jsPDF();

        
        doc.text("Pulse Users Report", 14, 15);

        const tableColumn = [
          "Order ID",
          "Customer",
          "Date",
          "Amount",
          "Status",
        ];
        const tableRows = users.map((user) => [
          user.id,
          user.username,
          user.birthDate,
          user.age,
          user.status,
        ]);

        autoTable(doc, {
          head: [tableColumn],
          body: tableRows,
          startY: 20,
        });

        doc.save("Pulse-dashboard-users.pdf");
    }


  // Handle Pagination Btns
  function handlePaginationBtns():ReactNode[]{
      return (Array.from({ length: 5 }, (_, idx) => idx + 1).map((btnNum) => {
        return(
            <MainBtn
            key={btnNum}
            title={btnNum}
            actionFunc={() => dispatch(getUsersThunk({ page: btnNum, limit: 5 }))}
            />
        )
      })
    )
  }
  return (
    <section className="p-5 rounded-xl border-card-border border-2">
      <h2 className="text-xl font-bold capitalize mb-3">{title}</h2>
      <section className="flex flex-col gap-3 lg:flex-row items-center justify-between">
        {/* Filter Part */}
        <section className="flex w-full lg:w-fit flex-col lg:flex-row items-center gap-3">
          <Input
            id="FilterSearch"
            value={filteredData.searchVal}
            onChange={handleSearch}
            type="text"
            placeholder="Filter By Customer..."
            className=" w-full lg:w-[11rem] py-5 border-2 border-card-border bg-field"
          />
          <Select
            value={filteredData.selectVal}
            onValueChange={(e) => handleSelectedValue(e)}
          >
            <SelectTrigger className="w-full lg:w-[11rem] py-5 bg-field border-card-border border-2 cursor-pointer">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent className="bg-field border-primary">
              <SelectGroup>
                <SelectLabel>Statuses</SelectLabel>
                {items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </section>

        {/* Export Data Part */}
        <section className="flex flex-col lg:flex-row items-center gap-3 w-full lg:w-fit">
          <MainBtn title="export PDF" actionFunc={exportPdfFile} />
          <MainBtn title="export Excel" actionFunc={exportExcelSheet} />
        </section>
      </section>
      <table className="w-full mt-5 h-[27.5rem]">
        <thead>
          <tr>
            <th className="capitalize">Order ID</th>
            <th className="capitalize text-muted">Customer</th>
            <th className="capitalize text-muted">Date</th>
            <th className="capitalize text-muted">Amount</th>
            <th className="capitalize text-muted">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <TableRow
                key={user.id}
                id={user.id}
                name={user.username}
                date={user.birthDate}
                amount={user.age}
                statusBtn={<Tag state={`${user.status}`} />}
              />
            );
          })}
        </tbody>
      </table>
      {/* Pagination Buttons Part */}
      <section className="mt-7 mb-1 flex justify-end gap-3">
          {handlePaginationBtns()}
      </section>
    </section>
  );
};
export default MainDashboardTable;
