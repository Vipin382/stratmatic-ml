"use client";
import { Link, Image, Badge } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useFormik } from "formik/dist";
import { object, string, ObjectSchema } from "yup";
import { getCookie } from "cookies-next";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/Vsc";
import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { use } from "react";

interface UserSchemaInterface {
  email: string;
  password: string;
}

let userSchema: ObjectSchema<UserSchemaInterface> = object({
  email: string()
    .email("Enter Valid Email")
    .required("Email is Required")
    .min(10, "Atleast 10 character"),
  password: string()
    .min(8, "Minimum 8 Characters is Required")
    .max(16, "Maximum 16 Characters")
    .required("Password is Required"),
});

async function getData() {
  const providers = await getProviders();

  return providers;
}

const SignIn = () => {
  const providers = use(getData());
  const csrfToken = getCookie("next-auth.csrf-token")?.split("|")[0];
  console.log(csrfToken);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: async (values) => {
      signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: true,
        callbackUrl: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/dashboard`,
      });
      formik.setFieldValue("email", "");
      formik.setFieldValue("password", "");
    },
  });
  return (
    <section
      className={`border-red-700 h-screen w-screen flex transition-all ease-linear`}
    >
      <div className="flex-1 hidden md:block">
        <div className="px-12 py-8">
          <header
            className="text-[#3c37ff] py-4 cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            FLEESO
          </header>
        </div>
        <div className="px-12 h-[84%] flex flex-col justify-center ">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-4xl">Sign in to</h1>
            <h2 className="font-semibold text-2xl">Start your Journey</h2>
          </div>
          <div className="flex text-xs h-[30rem]">
            <p>
              {"if you don't have an account register you can"}{" "}
              <Link
                className=" text-purple-600 underline cursor-pointer"
                href="/register"
              >
                Register here !
              </Link>
            </p>
            <Image width={300} src={"./assets/loginPerson.svg"} alt="loading" />
          </div>
          <div className="px-8 w-auto flex flex-col gap-8"></div>
        </div>
      </div>
      <div className="flex-1 flex items-center flex-col px-8 justify-center transition-all ease-linear">
        <div className=" w-10/12 flex ">
          <header
            className="text-[#3c37ff] md:hidden text-2xl cursor-pointer py-4 ml-3.5 font-semibold"
            onClick={() => {
              router.push("/");
            }}
          >
            FLEESO
          </header>
        </div>
        <form
          className="flex flex-col gap-y-2 w-5/6"
          onSubmit={formik.handleSubmit}
        >
          <p className="text-3xl tracking-wide ml-3 font-semibold">
            Sign in
            <span className="mt-2 ml-3 text-[10px] md:hidden">
              not a <span className="text-[#3c37ff]">FLEESOR</span>?
              <Link
                className="font-semibold underline px-1"
                href="/RegisterPage"
              >
                Register
              </Link>
            </span>
          </p>
          {csrfToken && (
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          )}
          <Input
            {...formik.getFieldProps("email")}
            color={Boolean(formik.errors.email) ? "danger" : "success"}
            errorMessage={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
            classNames={{
              label: "text-sm font-medium text-slate-500",
              errorMessage: "text-xs text-red-500 ml-[8px]",
              input: "placeholder:text-xs py-2 h-10 border px-2 rounded",
            }}
            type="email"
            label="Email"
            placeholder="Enter Email Address"
          />
          <div>
            <Input
              {...formik.getFieldProps("password")}
              color={Boolean(formik.errors.password) ? "danger" : "success"}
              errorMessage={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : ""
              }
              classNames={{
                label: "text-sm font-medium text-slate-500",
                errorMessage: "text-xs text-red-500 ml-[8px]",
                input: "border placeholder:text-xs py-2 px-2 rounded",
              }}
              type="password"
              label="Password"
              placeholder="Enter your password"
            />
            <p className="flex justify-end">
              <Link className="text-stone-400 underline text-[10px] mr-3">
                Forgot password?
              </Link>
            </p>
          </div>
          <Button
            type="submit"
            className="rounded w-[96%] mx-auto text-xs focus:outline-none py-1.5 mt-2 px-2 bg-[#4D47C3] text-white"
          >
            Login
          </Button>
          <p className="text-center text-xs text-stone-400">or continue with</p>
          <div className="flex gap-4 container justify-center">
            {providers &&
              Object.values(providers).map((provider) => {
                if (provider.name !== "Credentials") {
                  return provider.name === "Google" ? (
                    <button
                      className="cursor-pointer rounded-full overflow-hidden h-8 w-8"
                      key={provider.name}
                      onClick={() => {
                        signIn(provider.id);
                      }}
                    >
                      <FcGoogle className="h-8  w-8" />
                    </button>
                  ) : (
                    <button
                      className="cursor-pointer rounded-full overflow-hidden h-8 w-8"
                      key={provider.name}
                      onClick={() => {
                        signIn(provider.id);
                      }}
                    >
                      <VscGithub className="h-8  w-8" />
                    </button>
                  );
                }
              })}
          </div>
        </form>
      </div>
      i
    </section>
  );
};

export default SignIn;
