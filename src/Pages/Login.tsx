import { useForm } from "@mantine/form";
import { zodResolver } from "@mantine/form";
import { z } from "zod";
import { TextInput, Button, PasswordInput } from "@mantine/core";
import { API_URL } from "../network/ApiClient";
import { useNavigate } from "react-router";

interface LoginType {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const schema = z.object({
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .min(8, { message: "Password must be min * characters" }),
  });
  const form = useForm({
    initialValues: { email: "", password: "" },
    validate: zodResolver(schema),
  });

  const onSubmit = async (value: LoginType) => {
    console.log(value);
    const loginData = {
      email: value.email,
      password: value.password,
    };

    const result = await API_URL.post("auth", loginData);
    if (result != null) {
      navigate("/home/users");
    }
  };

  return (
    <>
      <div className="flex w-full min-h-screen bg-slate-900">
        <div className="items-center justify-center m-auto bg-violet-200 h-[330px] w-[420px] p-10 rounded-xl border-2 border-violet-200">
          <form className="space-y-3" onSubmit={form.onSubmit(onSubmit)}>
            <h3 className="text-xl font-bold text-center">Login</h3>
            <TextInput
              mt="sm"
              label="Email"
              placeholder="Email"
              {...form.getInputProps("email")}
              withAsterisk
            />
            <PasswordInput
              label="Password"
              placeholder="Enter Password"
              {...form.getInputProps("password")}
              withAsterisk
            />
            <Button type="submit" fullWidth mt="lg">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
