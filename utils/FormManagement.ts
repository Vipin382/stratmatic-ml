import axios, { AxiosError, AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: process.env.NEXTAUTH_URL,
});

interface DataInterface {
  email: string;
  password: string;
  avatar: string;
}

const FormSubmit = async (data: DataInterface) => {
  console.log(data);
  try {
    const response = await instance.post("/api/signup", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError;
      if (serverError.response) {
        if (serverError.response.status === 409) {
          return {
            status: serverError.response.status,
            data: { msg: "User already exist", success: false },
          };
        }
        if (serverError.response.status === 413) {
          return {
            status: serverError.response.status,
            data: { msg: "Exceede the Limit of 8mb", success: false },
          };
        }
      } else if (serverError.request) {
        if (serverError.request.status === 400) {
          return {
            status: serverError.status,
            data: { msg: "Bad Request", success: false },
          };
        }
        if (serverError.code === "ERR_NETWORK") {
          return {
            status: serverError.code,
            data: { msg: "Internet Not Connected", success: false },
          };
        }
      } else {
        if (serverError.status === 500) {
          return {
            status: serverError.status,
            data: { msg: "Internal Server Error", success: false },
          };
        } else if (serverError.status === 502) {
          return {
            status: serverError.status,
            data: { msg: "Bad Gateway", success: false },
          };
        }
      }
    }
  }
};

interface IDataUpdate {
  name: string;
}

const DataUpdate = () => {};

export { FormSubmit };
