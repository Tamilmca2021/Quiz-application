/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import TableHeader from "../../Components/TableHeader";
import CreateUser from "./createUser";
import TableComponent from "../../Components/Table";
import { Table } from "@mantine/core";
import UserUpload from "./userUpload";
import moment from "moment";
import EditUser from "./EditUser";
import apiprovider from "../../network/Apiprovider";
import { userStore } from "../../app/userStore";

const HeaderComponents = [<UserUpload />, <CreateUser />];
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
  const userData = userStore();

  // const [userData, setUserData] = useState<userDetailType>();

  const [page, setPage] = useState(1);
  const isLoading = false;
  const searchRef = useRef<HTMLInputElement>(null);
  const handleSearch = () => {
    userData.setSearch(searchRef.current?.value);
  };

  useEffect(() => {
    userData.fetchAlluser();
  }, [userData.search]);

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
        from={userData?.AlluserData?.data?.from ?? 0}
        to={userData?.AlluserData?.data?.to ?? 0}
        total={userData?.AlluserData?.data?.total ?? 0}
        totalPages={userData?.AlluserData?.data?.totalPages ?? 0}
        currentPage={userData.page}
        onPageChanged={setPage}
      >
        {userData.AlluserData?.data?.data?.map((value: any, index: any) => (
          <Table.Tr key={index}>
            {value.role.id !== 1 ? (
              <>
                <Table.Td>{value.id - 1}</Table.Td>
                <Table.Td>{value.firstName}</Table.Td>
                <Table.Td>{value.lastName}</Table.Td>
                <Table.Td>{value.email}</Table.Td>
                <Table.Td>{value.role.role}</Table.Td>
                <Table.Td>
                  {value.userInfo[0]?.position?.position ?? "NA"}
                </Table.Td>
                <Table.Td>{value.userInfo[0]?.college ?? "NA"}</Table.Td>
                <Table.Td>{value.userInfo[0]?.degree ?? "NA"}</Table.Td>
                <Table.Td>{value.userInfo[0]?.specialization ?? "NA"}</Table.Td>
                <Table.Td>{value.userInfo[0]?.experience ?? "0"}</Table.Td>
                <Table.Td>{value.userTestDetails[0]?.subject ?? "NA"}</Table.Td>
                <Table.Td>
                  {moment(value.createdAt).format("MMMM Do YYYY, h:mm a")}
                </Table.Td>
                <Table.Td>{<EditUser item={value} />}</Table.Td>
              </>
            ) : (
              <></>
            )}
          </Table.Tr>
        ))}
      </TableComponent>
    </div>
  );
}

export default User;
