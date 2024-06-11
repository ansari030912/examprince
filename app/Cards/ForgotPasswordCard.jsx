"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Alert, Snackbar } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { X_API_Key } from "../../AllUrls/ApiKey";
import { BaseUrl } from "../../AllUrls/BaseUrl";

const ForgotPasswordCard = () => {
  const [passwordRest, setPasswordRest] = useState({});
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [ip, setIp] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const fetchIP = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/v1/my-ip`, {
        headers: {
          "x-api-key": X_API_Key,
        },
      });
      setIp(response.data);
    } catch (error) {
      console.error("Error fetching IP:", error);
    }
  };

  useEffect(() => {
    fetchIP();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError("");

    if (!email) {
      setEmailError("Email is required");
    }
    if (emailError) {
      return;
    }
    try {
      const response = await axios.post(
        `${BaseUrl}/v1/account/forgot-password`,
        {
          email,
          ip,
          reset_url: "http://examprince.com/reset-password/",
        },
        {
          headers: {
            "x-api-key": X_API_Key,
          },
        }
      );
      setPasswordRest(response.data);
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };
  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={7}></Grid>
          <Grid item xs={12} md={5}>
            <>
              <form onSubmit={handleSubmit} className="">
                <div className="flex ">
                  <div className="flex flex-row w-full">
                    <div className="flex flex-1 justify-center px-4 relative">
                      <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
                        <div className="flex flex-col space-y-2 text-center">
                          <h2 className="text-3xl md:text-4xl font-bold">
                            Fotgot your account
                          </h2>
                          <p className="text-md md:text-xl">
                            Enter your email and press forgot password to get a
                            rest verification code.
                          </p>
                        </div>
                        <div className="flex flex-col max-w-md space-y-5">
                          <input
                            type="email"
                            placeholder="Email"
                            className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value), setEmailError("");
                            }}
                          />
                          {emailError && (
                            <span style={{ color: "red" }} className="text-sm">
                              {emailError}
                            </span>
                          )}
                          <button
                            type="submit"
                            className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
                          >
                            Forgot password
                          </button>
                          <div className="flex justify-center items-center">
                            <span className="w-full border border-black"></span>
                            <span className="px-4">Or</span>
                            <span className="w-full border border-black"></span>
                          </div>
                          <Link
                            href={"/sign-in"}
                            className="flex items-center hover:bg-white justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative"
                          >
                            <button>
                              <span>Back to sign in</span>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <Alert
                  onClose={() => setOpenSnackbar(false)}
                  severity={passwordRest.email_sent ? "success" : "error"}
                  variant="filled"
                  sx={{ width: "100%" }}
                >
                  {passwordRest.message && passwordRest.message}
                </Alert>
              </Snackbar>
            </>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default ForgotPasswordCard;
