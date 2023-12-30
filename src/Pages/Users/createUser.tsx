/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, TextInput, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import "@mantine/dates/styles.css";
import { DateInput } from "@mantine/dates";
import { useEffect, useState } from "react";
import API_URL from "../../network/ApiClient";
import apiprovider from "../../network/Apiprovider";
function CreateUser() {
  const [opened, { open, close }] = useDisclosure(false);
  const [position, setPosition] = useState();
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      date: "",
      degree: "",
      college: "",
      specialization: "",
      roleId: "",
      positionId: "",
      experience: "",
      experienceLevel: "",
    },
    // validate: zodResolver(createUserSchema),
  });
  const fetchPosition = async () => {
    try {
      const params = {
        page: 1,
        search: "",
      };
      const result = await API_URL.get("/position", { params: params });
      if (result != null) {
        setPosition(result?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosition();
  }, []);
  const handleSubmit = async (values: typeof form.values) => {
    try {
      let userData;
      if (values.role === "2") {
        userData = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          mobile: values.mobileNumber,
          degree: values.degree,
          college: values.college,
          specialization: values.specialization,
          roleId: +values.roleId,
          dob: values.date,
          positionId: +values.positionId,
          isFresher: values.experience == "2" ? false : true,
          experience: values.experience,
          experienceLevel: values.experienceLevel,
        };
      } else {
        userData = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          mobile: values.mobileNumber,
          roleId: +values.roleId,
        };
      }

      const response = await apiprovider.AddUserData(userData);
      if (response != null) {
        form.reset();
        close();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={<div className="text-xl font-bold">Create new User</div>}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        size="lg"
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <>
            <div className="flex flex-row justify-between w-full ">
              <TextInput
                label="First Name"
                placeholder="Enter First Name"
                className="w-full mb-1 mr-2"
                {...form.getInputProps("firstName")}
              />
              <TextInput
                label="Last Name"
                placeholder="Enter Last Name"
                className="w-full mb-1"
                {...form.getInputProps("lastName")}
              />
            </div>
            <TextInput
              mt="sm"
              label="Email"
              placeholder="Enter Email"
              className="w-full mb-1"
              {...form.getInputProps("email")}
            />
            <TextInput
              label="Mobile number"
              placeholder="Enter Mobile Number"
              className="w-full mb-1"
              {...form.getInputProps("mobileNumber")}
            />
            <Select
              label="Role"
              placeholder="Select Role"
              data={[
                { value: "1", label: "Admin" },
                { value: "2", label: "User" },
              ]}
              className="w-full mb-1"
              {...form.getInputProps("roleId")}
            />
            {form.values.roleId == "2" ? (
              <>
                <div className="">
                  <DateInput
                    valueFormat="YYYY MMM DD"
                    label="DOB"
                    placeholder="Enter DOB"
                    {...form.getInputProps("date")}
                  />
                  <TextInput
                    label="College"
                    placeholder="Enter College Name"
                    {...form.getInputProps("college")}
                  />
                  <TextInput
                    label="Degree"
                    placeholder="Enter Degree"
                    {...form.getInputProps("degree")}
                  />
                  <Select
                    label="Position"
                    placeholder="Select Position"
                    data={position?.data?.map((position: any, index: any) => ({
                      value: position.id.toString(),
                      label: position.position,
                    }))}
                    className="w-full mb-1"
                    {...form.getInputProps("positionId")}
                  />
                  <TextInput
                    label="Specialization"
                    placeholder="Enter Specialization"
                    {...form.getInputProps("specialization")}
                  />
                </div>
                <Select
                  label="Work Experience"
                  placeholder="Select Work Experience"
                  data={[
                    { value: "1", label: "Fresher" },
                    { value: "2", label: "Experience" },
                  ]}
                  className="w-full mb-1"
                  {...form.getInputProps("experience")}
                />
                {form.values.experience == "2" ? (
                  <>
                    <TextInput
                      label="Experience Level"
                      placeholder="Enter Years of experience"
                      className="w-full mr-4"
                      {...form.getInputProps("experienceLevel")}
                    />
                  </>
                ) : (
                  <></>
                )}{" "}
              </>
            ) : (
              <></>
            )}

            <Button type="submit" mt="sm" fullWidth>
              Submit
            </Button>
          </>
        </form>
      </Modal>

      <Button onClick={open} variant="filled" color="green">
        Add User
      </Button>
    </>
  );
}

export default CreateUser;
