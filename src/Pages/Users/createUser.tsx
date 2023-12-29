/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, TextInput, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import "@mantine/dates/styles.css";
import { DateInput } from "@mantine/dates";
import { useEffect, useState } from "react";
import API_URL from "../../network/Apiclient";

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
        setPosition(result?.data);
        console.log(position);
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
      const userData = {
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
      const response = await API_URL.post("/user", userData);
      if (response != null) {
        console.log("success");
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
        size="xl"
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <>
            <div className="flex flex-row justify-between w-full ">
              <TextInput
                label="First Name"
                placeholder="First Name"
                className="w-full mb-1 mr-2"
                {...form.getInputProps("firstName")}
              />
              <TextInput
                label="Last Name"
                placeholder="Last Name"
                className="w-full mb-1"
                {...form.getInputProps("lastName")}
              />
            </div>
            <TextInput
              mt="sm"
              label="Email"
              placeholder="Email"
              className="w-full mb-1"
              {...form.getInputProps("email")}
            />
            <TextInput
              label="Mobile number"
              placeholder="Mobile"
              className="w-full mb-1"
              {...form.getInputProps("mobileNumber")}
            />
            <Select
              label="Role"
              data={[
                { value: "1", label: "Admin" },
                { value: "2", label: "User" },
              ]}
              className="w-full mb-1"
              {...form.getInputProps("roleId")}
            />
            {form.values.roleId == "2" ? (
              <>
                <div className="flex flex-row w-full">
                  <DateInput
                    valueFormat="YYYY MMM DD"
                    label="Date input"
                    className="mr-6 w-60"
                    placeholder="Date input"
                    {...form.getInputProps("date")}
                  />
                  <TextInput
                    label="College"
                    placeholder="college Name"
                    className="mr-6 w-60"
                    {...form.getInputProps("college")}
                  />
                  <TextInput
                    label="Degree"
                    placeholder="Degree"
                    className="mr-5 w-60"
                    {...form.getInputProps("degree")}
                  />
                  <Select
                    label="Position"
                    data={position?.data?.map((position: any, index: any) => ({
                      value: position.id,
                      label: position.position,
                    }))}
                    className="w-full mb-1"
                    {...form.getInputProps("positionId")}
                  />
                  <TextInput
                    label="Specialization"
                    placeholder="Specialization"
                    className="mr-5 w-60"
                    {...form.getInputProps("specialization")}
                  />
                </div>
                <Select
                  label="Work Experience"
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
                      placeholder="Years of experience"
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

            <Button type="submit" mt="sm">
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
