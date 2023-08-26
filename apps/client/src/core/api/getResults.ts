import { ApiError } from "next/dist/server/api-utils";
import { Results } from "shared";

export const getResults = async () => {
  const url = process.env["NEXT_PUBLIC_SERVER"];
  try {
    const response = await fetch(`${url}/results`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseJSON = await response.json();

    if (!response.ok) {
      return {
        data: [],
        error: responseJSON as ApiError,
      };
    }

    return {
      data: responseJSON as Results,
    };
  } catch (error) {
    return {
      data: [],
      error: {
        message: error.message,
        code: 500,
      },
    };
  }
};
