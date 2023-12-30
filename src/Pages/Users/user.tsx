/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import TableHeader from "../../Components/TableHeader";
import CreateUser from "./createUser";
import TableComponent from "../../Components/Table";
import { Table } from "@mantine/core";
import React from "react";
import UserUpload from "./userUpload";
import API_URL from "../../network/Apiclient";

const HeaderComponents = [<CreateUser />, <UserUpload />];
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

function User() {
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
      const response = await API_URL.get("/user", { params: params });
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
          "COLLEGE",
          "DEGREE",
          "SPECIALIZATION",
          "EXPERIENCE LEVEL",
          "TEST ASSIGNED",
          "CREATED DATE AND TIME",
          "EDIT",
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
            <Table.Td>{value.firstName}</Table.Td>
            <Table.Td>{value.lastName}</Table.Td>
            <Table.Td>{value.email}</Table.Td>
            <Table.Td>{value.role.role}</Table.Td>
            {value.userInfo.map((data: any, dataIndex: any) => (
              <React.Fragment key={dataIndex}>
                <Table.Td>{data?.position?.position ?? "NA"}</Table.Td>
                <Table.Td>{data?.college ?? "NA"}</Table.Td>
                <Table.Td>{data?.degree ?? "NA"}</Table.Td>
                <Table.Td>{data?.specialization ?? "NA"}</Table.Td>
                <Table.Td>{data?.experience ?? "NA"}</Table.Td>
                <Table.Td>{value.userTestDetails[0]?.subject}</Table.Td>
                <Table.Td>{value.createdAt}</Table.Td>
              </React.Fragment>
            ))}
          </Table.Tr>
        ))}
      </TableComponent>
    </div>
  );
}

export default User;
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import TableHeader from "../../Components/TableHeader";
import CreateUser from "./createUser";
import TableComponent from "../../Components/Table";
import { Table } from "@mantine/core";
import React from "react";
import UserUpload from "./userUpload";
import API_URL from "../../network/Apiclient";

const HeaderComponents = [<CreateUser />, <UserUpload />];
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

function User() {
  const [userData, setUserData] = useState<userDetailType>();

  const [page, setPage] = useState(1);
  const isLoading = true;
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
      const response = await API_URL.get("/user", { params: params });
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
          "COLLEGE",
          "DEGREE",
          "SPECIALIZATION",
          "EXPERIENCE LEVEL",
          "TEST ASSIGNED",
          "CREATED DATE AND TIME",
          "EDIT",
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
            <Table.Td>{value.firstName}</Table.Td>
            <Table.Td>{value.lastName}</Table.Td>
            <Table.Td>{value.email}</Table.Td>
            <Table.Td>{value.role.role}</Table.Td>
            {value.userInfo.map((data: any, dataIndex: any) => (
              <React.Fragment key={dataIndex}>
                <Table.Td>{data?.position?.position ?? "NA"}</Table.Td>
                <Table.Td>{data?.college ?? "NA"}</Table.Td>
                <Table.Td>{data?.degree ?? "NA"}</Table.Td>
                <Table.Td>{data?.specialization ?? "NA"}</Table.Td>
                <Table.Td>{data?.experience ?? "NA"}</Table.Td>
                <Table.Td>{value.userTestDetails[0]?.subject}</Table.Td>
                <Table.Td>{value.createdAt}</Table.Td>
              </React.Fragment>
            ))}
          </Table.Tr>
        ))}
      </TableComponent>
    </div>
  );
}

export default User;
