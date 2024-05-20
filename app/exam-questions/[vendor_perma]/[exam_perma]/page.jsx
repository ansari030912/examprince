/* eslint-disable @next/next/no-img-element */
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import ExamAddToCart from "@/app/components/Cards/ExamAddToCart";
import HotExams from "@/app/components/IndexPages/HotExams";
import { Box, Grid } from "@mui/material";

const page = async ({ params, searchParams }) => {
  const referral = searchParams?.ref || "";

  const releatedExams = await fetch(
    `${Base_URL}/v1/related_exams/${params?.vendor_perma}`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );

  const releatedData = await releatedExams.json();

  const examResponce = await fetch(
    `${Base_URL}/v1/exam/${params.exam_perma}?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );
  const examData = await examResponce.json();

  const response = await fetch(`${Base_URL}/v1/hot_exams`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const data = await response.json();

  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;

  return (
    <>
      <ExamAddToCart examData={examData} />
      {/*
      <br />
      <DataCard data={data} examData={examData} releatedData={releatedData} />
      <br />
    <CommentCard examData={examData} /> */}
      <hr style={{ border: "4px solid #F7F7F7" }} />
      <HotExams />
    </>
  );
};

export default page;
export async function generateMetadata({ params }) {
  const response = await fetch(
    `${Base_URL}/v1/exam/${params.exam_perma}?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": X_API_Key,
      },
    }
  );
  const data = await response.json();
  return {
    title: `Updated ${data.exam_title} Exam Question and Answers by Tech Professionals`,
    description: `Examprince is a premium provider of Real and Valid Exam Question and Answers of ${data.exam_title} IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024 and become certified professional.`,
    robots: {
      index: data.index_tag ? data.index_tag : false,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://examprince.com/exam-questions/${params.vendor_perma}/${params.exam_perma}`,
        },
      ],
    },
  };
}
