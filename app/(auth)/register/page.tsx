"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { object, string, ObjectSchema } from "yup";
import { Input, Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useFormik } from "formik/dist";
import { toast, TypeOptions } from "react-toastify";
import { Link } from "@nextui-org/react";
import "react-toastify/ReactToastify.min.css";
import { useRouter } from "next/navigation";
import { FormSubmit } from "@/utils/FormManagement";
import LoginCard from "@/components/Forms/LoginCard ";

interface UserSchemaInterface {
  email: string;
  password: string;
}

enum Notification {
  success = "success",
  info = "info",
  warning = "warning",
  error = "error",
}

interface NotificationI {
  Message: string;
  Type: Notification;
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
  avatar: string().required(),
});

const Register = () => {
  const avatarRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const router = useRouter();
  const [image, setImage] = React.useState<any>("");

  const addNotification = ({ Message, Type }: NotificationI) => {
    toast(Message, {
      type: Type as TypeOptions,
    });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      avatar: "",
    },
    validationSchema: userSchema,
    onSubmit: async (values) => {
      const response = await FormSubmit(values);
      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 202
      ) {
        addNotification({
          Message: response.data.msg,
          Type: Notification.success,
        });
        setTimeout(() => {
          router.push("/signin");
        }, 3000);
      } else if (response.status === 409) {
        addNotification({
          Message: response.data.msg,
          Type: Notification.warning,
        });
      } else if (response.status === 413) {
        addNotification({
          Message: response.data.msg,
          Type: Notification.warning,
        });
      } else if (response.status === 400) {
        addNotification({
          Message: response.data.msg,
          Type: Notification.warning,
        });
      } else if (response.status === "ERR_NETWORK") {
        addNotification({
          Message: response.data.msg,
          Type: Notification.warning,
        });
      } else {
        addNotification({
          Message: response.data.msg,
          Type: Notification.error,
        });
      }
    },
  });

  return (
    <section
      className={`h-screen flex justify-center items-center flex-row overflow-hidden p-2 text-white`}
    >
      <div className="border bg-[#3c37ff] rounded-lg hidden md:flex h-full min-w-[400px] max-w-[466px] p-8 flex-col justify-between">
        <header>FLEESO</header>
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl font-semibold leading-tight tracking-tight">
            Start your journey with us.
          </h2>
          <p className="font-thin w-1/2 opacity-60">
            {
              " Discover the world's best community of freelancers and bussiness owners."
            }
          </p>
        </div>
        <Slider
          arrows={false}
          autoplay={true}
          dots={true}
          className="max-w-[400px]"
        >
          <LoginCard />
          <LoginCard />
          <LoginCard />
        </Slider>
      </div>
      <div className=" bg-white rounded h-full w-full p-10 flex flex-col justify-around">
        <div className="flex flex-col gap-4">
          <h1 className=" text-2xl font-bold leading-tight">Sign up</h1>
          <h5 className="text-xs">
            Have an account
            <Link
              href="/SiginPage"
              isBlock={true}
              className="font-bold underline mx-1"
            >
              Login
            </Link>
          </h5>
        </div>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-11">
          <div className="flex flex-col items-center">
            <Avatar
              src={`${image}`}
              name="PROFILE"
              color={"warning"}
              showFallback
              className="cursor-pointer bg-blue-500 h-24 w-24 border"
              onClick={() => {
                avatarRef.current.click();
              }}
            />
            <Input
              type={"file"}
              accept="image/*"
              ref={avatarRef}
              className="hidden"
              onChange={(e) => {
                if (avatarRef.current.files) {
                  const fileReader = new FileReader();
                  fileReader.onload = () => {
                    formik.setFieldValue("avatar", fileReader.result);
                    setImage(fileReader.result?.toString());
                  };
                  fileReader.readAsDataURL(avatarRef.current.files[0]);
                }
              }}
            />
          </div>
          <div className="flex flex-col gap-8">
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
                input:
                  "placeholder:text-xs text-neutral-900 py-2 h-10 border px-2 rounded",
              }}
              type="email"
              label="Email"
              placeholder="Enter Email Address"
            />
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
                input:
                  "placeholder:text-xs text-neutral-900 py-2 h-10 border px-2 rounded",
              }}
              type="password"
              label="Password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col">
            <Button
              type="submit"
              color="primary"
              className="bg-[#3c37ff] text-xs py-1.5 border rounded"
            >
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
