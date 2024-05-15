import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import { Box, Typography } from "@mui/material";
import RecentUpdateExamCard from "../Cards/RecentUpdateExamCard";

export const RecentUpdatedExams = async () => {
  const response = await fetch(`${Base_URL}/v1/recently-updated`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return (
    <section class="py-8">
      <div class="container mx-auto my-4 px-4">
        <div className="px-5 py-10 text-center">
          <Typography variant="h2" fontSize={38} fontWeight={600}>
            A Diverse Range of Courses
          </Typography>
          <Typography variant="caption" fontSize={22}>
            Explore our extensive library of over 210,000 online courses, with
            fresh content added every month to keep you ahead of the curve.
          </Typography>
        </div>
        <Box
          sx={{
            width: "100%",
            padding: "15px 30px 0px 30px",
            border: "1px solid gray",
            marginTop: "10px",
            boxShadow: "inset 0px 0px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Typography variant="h3" fontSize={32} fontWeight={600}>
            Recently Updated Exams
          </Typography>
          <Typography variant="caption" fontSize={20} width={"70%"}>
            Welcome to ExamPrince! Here, you can find recently updated exams
            provided by IT professionals to help you pass your certification
            exams with confidence. Our expert-curated content ensures you have
            the latest and most accurate information to succeed.
          </Typography>
          <br />
          <br />
          <button className="border-2 border-gray-800 bg-gray-700 text-white p-2">
            <b>View All Vendors</b>
          </button>
          <br />
          <br />
          <br />
          <RecentUpdateExamCard data={data} />
        </Box>
      </div>
    </section>
  );
};
