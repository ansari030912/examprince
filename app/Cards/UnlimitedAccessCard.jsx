import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";

const UnlimitedAccessCard = ({ data }) => {
  return (
    <>
      <Card
        // className='text-white bg-gradient-to-bl from-gray-800 to-blue-400  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-tl-4xl'
        sx={{
          p: "20px",

          borderRadius: "0px",
        }}
      >
        <section className="text-gray-600 body-font">
          <div className="px-5 py-5 mx-auto">
            <div className=" mb-5">
              <h1 className="sm:text-4xl text-xl font-medium title-font text-gray-700 mb-4">
                <b> Unlimited Test Engine & PDF Download Access</b>
              </h1>
              <p className="text-gray-500 leading-relaxed">
                <b>
                  Get Unlimited Access to the all ExamPrincePREMIUM files!
                  <br />
                  Take advantage of premium Files which are Latest and valid by
                  ExamPrince!
                </b>
              </p>
            </div>
            <div className="flex flex-wrap  sm:mx-auto sm:mb-2 -mx-2">
              <div className="p-1 sm:w-1/2 w-full">
                <div className="text-white bg-gradient-to-br from-gray-800 to-blue-400  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-tl-4xl  rounded-tr-none rounded-br-none flex p-4 h-full items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.8em"
                    height="1.8em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M13.5 8H12v5l4.28 2.54l.72-1.21l-3.5-2.08zM13 3a9 9 0 0 0-9 9H1l3.96 4.03L9 12H6a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.896 8.896 0 0 0 13 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9"
                    />
                  </svg>
                  <span className="title-font font-medium">
                    <div className="font-bold ml-2 text-white">
                      Latest & Valid Questions
                    </div>
                  </span>
                </div>
              </div>

              <div className="p-1 sm:w-1/2 w-full">
                <div className="text-white bg-gradient-to-bl from-gray-800 to-blue-400  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-tl-4xl md:rounded-tr-3xl rounded-tl-none rounded-bl-none flex p-4 h-full items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.8em"
                    height="1.8em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="white"
                      d="M327.027 65.816L229.79 128.23l9.856 5.397l86.51-55.53l146.735 83.116l-84.165 54.023l4.1 2.244v6.848l65.923-42.316l13.836 7.838l-79.76 51.195v11.723l64.633-41.487l15.127 8.57l-79.76 51.195v11.723l64.633-41.487l15.127 8.57l-79.76 51.195v11.723l100.033-64.21l-24.828-14.062l24.827-15.937l-24.828-14.064l24.827-15.937l-23.537-13.333l23.842-15.305zm31.067 44.74c-21.038 10.556-49.06 12.342-68.79 4.383l-38.57 24.757l126.903 69.47l36.582-23.48c-14.41-11.376-13.21-28.35 2.942-41.67zM227.504 147.5l-70.688 46.094l135.61 78.066l1.33-.85c2.5-1.61 6.03-3.89 10.242-6.613c8.42-5.443 19.563-12.66 30.674-19.86c16.002-10.37 24.248-15.72 31.916-20.694zm115.467 1.17a8.583 14.437 82.068 0 1 .003 0a8.583 14.437 82.068 0 1 8.32 1.945a8.583 14.437 82.068 0 1-.87 12.282a8.583 14.437 82.068 0 1-20.273 1.29a8.583 14.437 82.068 0 1 .87-12.28a8.583 14.437 82.068 0 1 11.95-3.237m-218.423 47.115L19.143 263.44l23.537 13.333l-23.842 15.305l24.828 14.063l-24.828 15.938l24.828 14.063l-24.828 15.938l166.135 94.106L285.277 381.8v-11.72l-99.433 63.824L39.11 350.787l14.255-9.15l131.608 74.547L285.277 351.8v-11.72l-99.433 63.824L39.11 320.787l14.255-9.15l131.608 74.547L285.277 321.8v-11.72l-99.433 63.824L39.11 290.787l13.27-8.52l132.9 75.28l99.997-64.188v-5.05l-5.48-3.154l-93.65 60.11l-146.73-83.116l94.76-60.824l-9.63-5.543zm20.46 11.78l-46.92 30.115c14.41 11.374 13.21 28.348-2.942 41.67l59.068 33.46c21.037-10.557 49.057-12.342 68.787-4.384l45.965-29.504l-123.96-71.358zm229.817 32.19c-8.044 5.217-15.138 9.822-30.363 19.688a36221.458 36221.458 0 0 1-30.69 19.873c-4.217 2.725-7.755 5.01-10.278 6.632c-.09.06-.127.08-.215.137v85.924l71.547-48.088zm-200.99 17.48a8.583 14.437 82.068 0 1 8.32 1.947a8.583 14.437 82.068 0 1-.87 12.28a8.583 14.437 82.068 0 1-20.27 1.29a8.583 14.437 82.068 0 1 .87-12.28a8.583 14.437 82.068 0 1 11.95-3.236z"
                    />
                  </svg>
                  <span className="title-font font-medium">
                    <div className="font-bold ml-2 text-white">
                      Free Latest Updated Questions
                    </div>
                  </span>
                </div>
              </div>
              <div className="p-1 sm:w-1/2 w-full">
                <div className="text-white bg-gradient-to-r from-gray-800 to-blue-400  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-tl-4xl flex p-4 h-full items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.8em"
                    height="1.8em"
                    viewBox="0 0 48 48"
                  >
                    <defs>
                      <mask id="ipTSuccess0">
                        <g
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="4"
                        >
                          <path
                            fill="#555"
                            d="m24 4l5.253 3.832l6.503-.012l1.997 6.188l5.268 3.812L41 24l2.021 6.18l-5.268 3.812l-1.997 6.188l-6.503-.012L24 44l-5.253-3.832l-6.503.012l-1.997-6.188l-5.268-3.812L7 24l-2.021-6.18l5.268-3.812l1.997-6.188l6.503.012z"
                          />
                          <path d="m17 24l5 5l10-10" />
                        </g>
                      </mask>
                    </defs>
                    <path
                      fill="white"
                      d="M0 0h48v48H0z"
                      mask="url(#ipTSuccess0)"
                    />
                  </svg>
                  <span className="title-font font-medium">
                    <div className="font-bold ml-2 text-white">
                      Accurate & Verified Answers
                    </div>
                  </span>
                </div>
              </div>
              <div className="p-1 sm:w-1/2 w-full">
                <div className="text-white bg-gradient-to-l from-gray-800 to-blue-400  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-tl-4xl flex p-4 h-full items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.8em"
                    height="1.8em"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="white"
                      d="M69.68 54.04S98.65 7.63 99.31 6.47c.66-1.16.8-3.29-1.02-3.29S51.34 49.25 51.34 49.25l-32.05 19s-2.15 1.32-1.82 2.97s1.77 1.72 2.43 1.72s34.85-.18 36.84-.24c2.47-.07 1.86 3.44 1.86 3.44l-21.64 34.02s-9.45 13.08-9.45 13.97c0 1.31 1.58 1.96 3.05 1.08c1.14-.68 74.84-63.13 78.09-67.42c.88-1.17 1.33-4.25-2.3-4.25s-32.54 8.42-32.54 8.42z"
                    />
                    <path
                      fill="gray"
                      d="M64.61 50.35c-.89 1.22-1.13 3.26.79 3.38c1.91.11 40.95-.18 40.95-.18S78.46 79.18 70.02 86.83s-36.39 32.43-38.27 34.18c-1.84 1.72-3.51 3.3-4.19 3.08c-.11-.03-.25-.62 2.38-4.95c2.4-3.95 25.44-42.56 26.34-44.02c.9-1.46 1.69-2.7 2.14-3.38c.45-.68 1.91-4.39-1.13-4.39s-38 .9-38 .9s24.15-20.49 31.13-26S96.96 3.18 98.29 3.18S65.51 49.12 64.61 50.35"
                    />
                    <path
                      fill="#1F2937"
                      d="M63.45 70.75c1.8-2.59 3.57-2.78 4.64-2.14c1.38.83 1.52 2.74-.22 5.05c-2.74 3.66-22.88 30.61-23.65 31.56c-1.46 1.8-3.61 1.01-2.21-1.6c1.17-2.16 19.58-30.19 21.44-32.87m-28.62-5.26c-3.45 2.31-6.66-1.14-4.35-3.67s17.47-15.15 20.54-17.76s20.99-18.2 22.38-19.32c1.84-1.48 2.98.02 1.82 1.56c-1.15 1.54-13.82 14.2-19.41 19.34c-4.32 3.98-17.7 17.65-20.98 19.85"
                    />
                  </svg>
                  <span className="title-font font-medium">
                    <div className="font-bold ml-2 text-white">
                      Instant Download
                    </div>
                  </span>
                </div>
              </div>
              <div className="p-1 sm:w-1/2 w-full">
                <div className="text-white bg-gradient-to-tr from-gray-800 to-blue-400  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-tl-4xl rounded-tr-none rounded-br-none md:rounded-bl-3xl flex p-4 h-full items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.8em"
                    height="1.8em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M7 3H5v6h2zm12 0h-2v10h2zM3 13h2v8h2v-8h2v-2H3zm12-6h-2V3h-2v4H9v2h6zm-4 14h2V11h-2zm4-6v2h2v4h2v-4h2v-2z"
                    />
                  </svg>
                  <div className="font-bold ml-2 text-white">
                    99.5% Pass Rate
                  </div>
                </div>
              </div>
              <div className="p-1 sm:w-1/2 w-full">
                <div className="text-white bg-gradient-to-tl from-gray-800 to-blue-400  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-tl-4xl rounded-tr-none rounded-bl-none rounded-br-4xl flex p-4 h-full items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.8em"
                    height="1.8em"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="white"
                      d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2M810 654.3L512 886.5L214 654.3V226.7l298-101.6l298 101.6z"
                    />
                    <path
                      fill="white"
                      fill-opacity="0.15"
                      d="M214 226.7v427.6l298 232.2l298-232.2V226.7L512 125.1zM632.8 328H688c6.5 0 10.3 7.4 6.5 12.7L481.9 633.4a16.1 16.1 0 0 1-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.2 0 10 2.5 13 6.6l64.7 89.1l150.9-207.8c3-4.1 7.9-6.6 13-6.6"
                    />
                    <path
                      fill="white"
                      d="M404.2 453.3c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4z"
                    />
                  </svg>
                  <span className="title-font font-medium">
                    <div className="font-bold ml-2 text-white">
                      Download Any 15 Files Monthly
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Card>
      <Card
        className="text-white bg-gradient-to-br from-gray-800 to-blue-400"
        sx={{
          fontSize: "0.875rem",
          padding: "0.625rem 1.25rem",
          mt: "10px",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
        }}
      >
        <Box
          sx={{
            paddingX: "5px",
            marginTop: "15px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                  1 Month (PDF)
                </h5>
                <div className="flex items-baseline text-gray-900 dark:text-white">
                  <span className="text-2xl font-semibold">$</span>
                  <span className="text-3xl font-extrabold tracking-tight">
                    {data.pdf_price}
                  </span>
                  <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                    <span style={{ color: "white" }}>/</span>
                    <span
                      style={{
                        textDecorationLine: "line-through",
                        color: "red",
                      }}
                    >
                      {data.pdf_full_price}
                    </span>
                  </span>
                </div>
                <ul role="list" className="space-y-5 my-7">
                  <li className="flex items-center">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      1 Month Duration
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-green-700"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight dark:text-white text-gray-600 ms-3">
                      <b>1 Activation Key for Each Exam</b>
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      Activation Valid for 3 Months
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      Monthly 15 Downloads
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      No Daily Download Limit
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      Free Updates
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      24/7 Email and Chat Support
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      All New Exams for FREE
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      Priority Updates
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                >
                  Add to Cart
                </button>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                  1 Month (Test Engine)
                </h5>
                <div className="flex items-baseline text-gray-900 dark:text-white">
                  <span className="text-xl font-semibold">$</span>
                  <span className="text-3xl font-extrabold tracking-tight">
                    {data.te_price}
                  </span>
                  <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                    <span style={{ color: "white" }}>/</span>
                    <span
                      style={{
                        textDecorationLine: "line-through",
                        color: "red",
                      }}
                    >
                      {data.te_full_price}
                    </span>
                  </span>
                </div>
                <ul role="list" className="space-y-5 my-7">
                  <li className="flex items-center">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      1 Month Duration
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      Monthly 15 Downloads
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      No Daily Download Limit
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      Free Updates
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      24/7 Email and Chat Support
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      All New Exams for FREE
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      Priority Updates
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      Printable PDF File
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                >
                  Add to Cart
                </button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
};

export default UnlimitedAccessCard;
