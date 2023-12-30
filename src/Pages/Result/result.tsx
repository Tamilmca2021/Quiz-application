/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import TableHeader from "../../Components/TableHeader";
import TableComponent from "../../Components/Table";
import { Table } from "@mantine/core";
import React from "react";
import API_URL from "../../network/Apiclient";
import DownloadExcel from "./DownloadExcel";
import DownloadPdf from "./DownloadPdf";

const HeaderComponents = [<DownloadExcel />, <DownloadPdf />];
interface userDetailType {
  from: number;
  to: number;
  total: number;
  totalPages: number;
  data: userType[];
}
interface userType {
  createdAt: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
}

function Results() {
  const [userData, setUserData] = useState<userDetailType>();

  const [page, setPage] = useState(1);
  const isLoading = false;
  const searchRef = useRef<HTMLInputElement>(null);
  const handleSearch = () => {
    console.log("search" ?? "empty");
  };
  const fetchAllUser = async () => {
    try {
      const params = {
        page: 1,
        search: "",
      };
      const response = await API_URL.get("/result", { params: params });
      if (response.data != null) {
        setUserData(response.data.data);
        console.log(userData);
      }
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllUser();
  }, [page]);
  return (
    <div className="mt-5 mb-2 ml-2 ">
      <div>
        <TableHeader
          reference={searchRef}
          title="Users"
          HeaderComponents={HeaderComponents}
          onSubmit={handleSearch}
        />
      </div>
      <TableComponent
        isLoading={isLoading}
        columns={[
          "S.NO",
          "USER NAME",
          "EMAIL",
          "MOBILE NUMBER",
          "ROLE",
          "POSITION",
          "DEGREE",
          "SPECIALIZATION",
          "SCORE",
          "PERCENTAGE",
          "TEST ASSIGNED",
          "UPDATED DATE AND TIME",
        ]}
        from={userData?.from ?? 0}
        to={userData?.to ?? 0}
        total={userData?.total ?? 0}
        totalPages={userData?.totalPages ?? 0}
        currentPage={page}
        onPageChanged={setPage}
      >
        {userData?.data?.map((value: any, index: any) => (
          <Table.Tr key={index}>
            <Table.Td>{index + 1}</Table.Td>
            <Table.Td>{value.user.firstName}</Table.Td>
            <Table.Td>{value.user.email}</Table.Td>
            <Table.Td>{value.user.mobile}</Table.Td>
            <Table.Td>{value.user.role.role}</Table.Td>
            <Table.Td>
              {value.user.userInfo[0]?.position?.position ?? "NA"}
            </Table.Td>
            <Table.Td>{value.user.userInfo[0]?.degree ?? "NA"}</Table.Td>
            <Table.Td>
              {value.user.userInfo[0]?.specialization ?? "NA"}
            </Table.Td>
            <Table.Td>{value.score}</Table.Td>
            <Table.Td>{value.percentage}</Table.Td>
            <Table.Td>{value.test.subject}</Table.Td>
            <Table.Td>{value.updatedAt}</Table.Td>
          </Table.Tr>
        ))}
      </TableComponent>
    </div>
  );
}

export default Results;
