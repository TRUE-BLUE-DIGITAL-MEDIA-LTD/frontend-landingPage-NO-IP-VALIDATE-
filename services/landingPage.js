import axios from "axios";
import Error from "next/error";

export async function GetLandingPageService({ host }) {
  try {
    const landingPage = await axios.get(
      `http://localhost:3000/public/landing-page/get`,
      {
        params: {
          domain: host,
        },

        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return landingPage.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}
