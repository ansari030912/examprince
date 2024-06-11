/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { Box, Card, Grid, Typography } from "@mui/material";
import moment from "moment";
import { CertPrice } from ".";
import BackCountDown from "../TimeOut/BackCountDown";

const CertificationPricePageCard = ({ data }) => {
  return (
    <>
      <Card
        className="text-white bg-gradient-to-b from-blue-400 to-gray-900"
        sx={{
          color: "white",
          borderRadius: "0.375rem",
          fontSize: "0.875rem",
          textAlign: "center",
          cursor: "pointer",
          padding: "0.625rem 1.25rem",
          marginBottom: "0.5rem",
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
      <Card sx={{ bgcolor: "#1F2937", my: "10px", width: "100%" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3.5}>
            <div className="flex justify-center">
              <img
                className="p-8 rounded-t-lg "
                src="/package-small-min_optimized.png"
                alt="product image"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={8.5}>
            <div style={{ padding: "20px" }}>
              <Typography
                fontSize={20}
                fontWeight={700}
                className="text-purple-500"
                color={"white"}
              >
                {data.cert_title}
              </Typography>
              <Typography fontSize={16} fontWeight={700} color={"white"}>
                Latest updated date:{" "}
                {moment(data.cert_update_date).format("LL")}
              </Typography>
              <Typography fontSize={16} fontWeight={700} color={"white"}>
                Latest {data.cert_questions} Question & Answers
              </Typography>
              <Card sx={{ bgcolor: "#FFF3CD", p: "15px", textAlign: "center" }}>
                <Typography fontSize={16} fontWeight={700} color={"#856404"}>
                  Limited Time Mega Sale!
                </Typography>
                <Typography fontSize={20} fontWeight={700} color={"#DC3545"}>
                  40-70% OFF
                </Typography>
                <Typography fontSize={16} fontWeight={700} color={"#856404"}>
                  Hurry up! offer ends in <BackCountDown />
                </Typography>
                <Typography fontSize={18} fontWeight={700} color={"#0056B3"}>
                  *Descarga GRATIS el Reproductor de Test
                </Typography>
              </Card>
            </div>
          </Grid>
        </Grid>
      </Card>
      <Card className="text-white text-center py-2 bg-gradient-to-t from-blue-400 to-gray-900">
        <Typography
          variant="body2"
          color={"white"}
          fontSize={25}
          fontWeight={600}
        >
          Add to cart
        </Typography>
      </Card>
      <Card sx={{ backgroundColor: "#a7cbf9", padding: "10px" }}>
        <CertPrice data={data.cert_single_exam} />
      </Card>
      <Card
        className="text-white bg-gradient-to-l from-gray-400 to-gray-900"
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
        {Array.isArray(data.cert_single_exam.question_types) &&
          data.cert_single_exam.question_types.map((item, i) => {
            const { question_type, question_type_count } = item;
            return (
              <>
                <Card
                  className="text-white bg-gradient-to-l from-blue-400 to-gray-900"
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
                    {question_type_count} Questions
                  </div>
                </Card>
              </>
            );
          })}
      </Card>
      <Card
        className="bg-gradient-to-l from-gray-400 to-gray-900"
        sx={{
          mt: 2,
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          fontSize: 20,
          padding: "15px",
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
              className="text-white w-full h-8 pt-1 rounded-full bg-gradient-to-l from-blue-500 to-gray-800  focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium  text-sm px-5 text-center"
              style={{
                width: `${
                  data.cert_single_exam.cert_last_week_average_score
                    ? data.cert_single_exam.cert_last_week_average_score
                    : "96.3"
                }%`,
              }}
            >
              <div className="flex justify-between">
                <div>Average Score In Real Exam</div>
                <div>
                  {data.cert_single_exam.cert_last_week_average_score
                    ? data.cert_single_exam.cert_last_week_average_score
                    : "96.3"}
                  %{" "}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              className="mt-1 text-white h-8 pt-1 w-full rounded-full bg-gradient-to-l from-blue-500 to-gray-800  focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium  text-sm px-5 text-center"
              style={{
                width: `${
                  data.cert_single_exam.cert_last_week_word_to_word
                    ? data.cert_single_exam.cert_last_week_word_to_word
                    : "95.7"
                }%`,
              }}
            >
              <div className="flex justify-between">
                <div>Questions (word for word)</div>
                <div>
                  {data.cert_single_exam.cert_last_week_word_to_word
                    ? data.cert_single_exam.cert_last_week_word_to_word
                    : "95.7"}
                  %
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Card>
    </>
  );
};

export default CertificationPricePageCard;
