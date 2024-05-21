/* eslint-disable @next/next/no-img-element */
import AllVendorsCard from "../components/Cards/AllVendorsCard";

const page = () => {
  return (
    <>
      <section class="pt-6 pb-6 px-6 bg-white">
        <div className="flex justify-center mb-4">
          <img src="/MEGASALE DA-min.png" alt="" />
        </div>
      </section>
      <div className="m-auto container">
        <AllVendorsCard />
      </div>
    </>
  );
};

export default page;
