/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { Box, Card, Grid, Typography } from "@mui/material";
import moment from "moment";
import Link from "next/link";
import BackCountDown from "../TimeOut/BackCountDown";
import ExamAddToCart from "./ExamAddToCart";

const ExamPricePageCard = ({ data }) => {
  return (
    <>
      <Card
        className="text-white bg-gradient-to-l from-red-600 via-red-600 to-red-600"
        sx={{
          color: "white",
          borderRadius: "0.375rem",
          fontSize: "0.875rem",
          textAlign: "center",
          padding: "0.625rem 1.25rem",
          marginBottom: "0.5rem",
          boxShadow: "4px 4px 8px rgba(0.1, 0.1, 0, 0.1)",
        }}
      >
        <Typography
          fontSize={20}
          fontWeight={700}
          className="text-white"
          color={"white"}
        >
          Buy Unlimited Access Package with 2500+ Exams. Only $203.99
        </Typography>
      </Card>
      <Card
        sx={{
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)",
          borderRadius: "8px",
          mb: "10px",
        }}
      >
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            md={3.5}
            className="text-white bg-gradient-to-r from-sky-900 to-sky-900"
          >
            <div className="flex justify-center">
              <img
                className="p-5 rounded-t-lg h-full w-full"
                src="/package-small-min_optimized.png"
                alt="product image"
              />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={8.5}
            sx={{
              borderRadius: "0px",
              boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)",
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
            }}
          >
            <div style={{ padding: "20px" }}>
              <Typography fontSize={20} fontWeight={700} color={"#003049"}>
                ({data?.exam_code}) - Exam Questions - {data?.exam_title}
              </Typography>

              {data?.exam_retired ? (
                <>
                  {/* <Typography fontSize={14} fontWeight={600} color={"#003049"}>
                    Latest updated date:{" "}
                    <span className="text-green-500">
                      {moment(data?.exam_update_date).format("LL")}
                    </span>
                  </Typography> */}
                  {/* <Typography fontSize={14} fontWeight={600} color={"#003049"}>
                    Exam Question Provider:{" "}
                    <Link href={`/exam-provider/${data?.exam_vendor_perma}`}>
                      <span
                        style={{
                          color: "#0da8e5",
                          cursor: "pointer",
                        }}
                        className="hover:underline"
                      >
                        {data?.exam_vendor_title}
                      </span>
                    </Link>
                  </Typography> */}
                  <Card
                    sx={{
                      bgcolor: "#F8D7DA",
                      border: "1px solid red",
                      padding: "10px",
                      my: "10px",
                      boxShadow: "inset 0px 0px 8px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <Typography
                      fontSize={16}
                      fontWeight={600}
                      color={"#003049"}
                    >
                      <span style={{ color: "blue" }}>Note: </span>
                      {data.exam_code} ({data.exam_title}) will not receive any
                      new updates.
                    </Typography>
                    <Typography
                      fontSize={16}
                      fontWeight={600}
                      color={"#003049"}
                      sx={{ textAlign: "right" }}
                    >
                      New exam code :{" "}
                      <Link
                        href={`/exam-questions/${data?.exam_vendor_perma}/${data?.exam_alternate?.exam_alternate_perma}`}
                        // style={{ color: "blue" }}
                        className="hover:text-blue-600  text-blue-500 hover:underline"
                      >
                        {data?.exam_alternate.exam_alternate_code}
                      </Link>
                    </Typography>
                  </Card>
                </>
              ) : (
                <>
                  <Typography fontSize={14} fontWeight={600} color={"#003049"}>
                    Latest updated date:{" "}
                    <span className="text-green-500">
                      {moment(data?.exam_update_date).format("LL")}
                    </span>
                  </Typography>
                  <Typography fontSize={14} fontWeight={600} color={"#003049"}>
                    Latest{" "}
                    <span className="text-green-500">
                      {data?.exam_questions}
                    </span>{" "}
                    Question & Answers
                  </Typography>
                  <Typography fontSize={14} fontWeight={600} color={"#003049"}>
                    Exam Question Provider:{" "}
                    <Link href={`/exam-provider/${data?.exam_vendor_perma}`}>
                      <span
                        style={{
                          color: "#0da8e5",
                          cursor: "pointer",
                        }}
                        className="hover:underline"
                      >
                        {data?.exam_vendor_title}
                      </span>
                    </Link>
                  </Typography>
                  <Typography fontSize={14} fontWeight={600} color={"#003049"}>
                    Certification Exam Name:{" "}
                    <span
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      {data?.exam_certs?.map((item, i) => (
                        <Link
                          key={i}
                          className="hover:underline text-sky-500"
                          href={`/vendor-exam-questions/${data?.exam_vendor_perma}/${item?.cert_perma}`}
                        >
                          {item.cert_title},{"  "}
                        </Link>
                      ))}
                    </span>
                  </Typography>
                </>
              )}
              {data?.exam_retired ? (
                ""
              ) : (
                <Card
                  sx={{
                    bgcolor: "#FFF3CD",
                    p: "15px",
                    textAlign: "center",
                    mt: "10px",
                    boxShadow: "inset 0px 0px 8px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <Typography fontSize={20} fontWeight={700}>
                    <span style={{ color: "#856404" }}>
                      Limited Time Mega Sale!
                    </span>{" "}
                    <span style={{ color: "#DC3545" }}>(40-70% OFF)</span>
                  </Typography>
                  <Typography fontSize={14} fontWeight={600} color={"#856404"}>
                    Hurry up! offer ends in <BackCountDown />
                  </Typography>
                </Card>
              )}
            </div>
          </Grid>
        </Grid>
      </Card>

      <Card
        className="text-white text-center py-2 bg-gradient-to-l from-blue-400 via-gray-900 to-blue-400"
        sx={{
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="body2"
          color={"white"}
          fontSize={25}
          fontWeight={600}
        >
          Add to cart
        </Typography>
      </Card>
      <Card
        className="text-white bg-gradient-to-r from-gray-50 to-gray-50"
        sx={{
          padding: "10px",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
          borderTopRightRadius: "0px",
          borderTopLeftRadius: "0px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        <ExamAddToCart data={data} />
      </Card>
      <Card
        className="text-white bg-gradient-to-l from-gray-900 via-blue-400 to-gray-900"
        sx={{
          mt: 2,
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          fontSize: 20,
          padding: "15px",
          color: "white",

          textAlign: "center",
        }}
      >
        <b>What is in the Premium File?</b>
      </Card>
      <Card
        sx={{
          padding: "10px",
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
        }}
      >
        {Array.isArray(data?.question_types) &&
          data?.question_types.map((item, i) => {
            const { question_type, question_type_count } = item;
            return (
              <>
                <Card
                  className="text-white bg-gradient-to-l from-sky-900 via-blue-500 to-sky-900"
                  key={i}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px",

                    border: "1px solid white",
                    borderRadius: "0px",
                    mb: "4px",
                  }}
                >
                  <div className="text-white">{question_type}</div>
                  <div className="text-white">
                    {question_type_count} Qusetions
                  </div>
                </Card>
              </>
            );
          })}
      </Card>
      <Card
        className="bg-gradient-to-l from-blue-400 via-gray-900 to-blue-400 "
        sx={{
          mt: 2,
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          fontSize: 20,
          padding: "12px",
          textAlign: "center",
          color: "white",
        }}
      >
        <b>Last Week Results</b>
      </Card>
      <Card
        sx={{
          padding: "4px",
          borderRadius: "0px",
        }}
      >
        <Box
          sx={{
            padding: "5px",
            bgcolor: "white",
            borderRadius: "4px",
          }}
        >
          <div>
            <div
              className="text-white w-full h-8 pt-1 rounded-full bg-gradient-to-l from-green-900 via-blue-400 to-green-900 font-medium  text-sm px-5 text-center"
              style={{ width: `${data?.exam_last_week_average_score}%` }}
            >
              <div className="flex justify-between">
                <div>Average Score In Real Exam</div>
                <div>{data?.exam_last_week_average_score}% </div>
              </div>
            </div>
          </div>

          <div>
            <div
              className="mt-1 text-white h-8 pt-1 w-full rounded-full bg-gradient-to-l from-blue-900 via-green-400 to-blue-900 font-medium  text-sm px-5 text-center"
              style={{ width: `${data?.exam_last_week_word_to_word}%` }}
            >
              <div className="flex justify-between">
                <div className="text-sm">Questions (word to word)</div>
                <div>{data?.exam_last_week_word_to_word}%</div>
              </div>
            </div>
          </div>
        </Box>
      </Card>
    </>
  );
};

export default ExamPricePageCard;
