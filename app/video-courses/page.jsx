import AllVideoCourses from "../components/Cards/AllVideoCourses";
import HotExams from "../components/IndexPages/HotExams";

const page = ({ searchParams }) => {
  const referral = searchParams?.ref || "";
  const randomReviewCount = Math.floor(Math.random() * (999 - 700 + 1)) + 700;
  return (
    <>
      <AllVideoCourses referral={referral} />
      <HotExams />
    </>
  );
};

export default page;
