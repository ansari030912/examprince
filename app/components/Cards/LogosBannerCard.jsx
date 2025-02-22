/* eslint-disable @next/next/no-img-element */

const LogosBannerCard = () => {
  return (
    <section class="py-14 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="mb-8 text-xl font-bold font-heading text-gray-400">
          Trusted by over 15,000 companies and millions of learners around the
          world
        </h2>
        <div class="flex flex-wrap -mx-4 justify-between">
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-6 lg:mb-0 ">
            <div class="p-3 rounded-md shadow-2xl bg-white">
              <img
                class="mx-auto"
                src="/logo/apple.png"
                width={"100px"}
                alt=""
              />
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-6 lg:mb-0 ">
            <div class="py-9 px-2 rounded-md shadow-2xl bg-white">
              <img
                class="mx-auto"
                src="/logo/amazon.png"
                width={"120px"}
                alt=""
                style={{ paddingTop: "10px" }}
              />
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-6 lg:mb-0 ">
            <div class="p-3 rounded-md shadow-2xl bg-white">
              <img
                class="mx-auto"
                src="/logo/google.png"
                width={"100px"}
                alt=""
              />
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-6 lg:mb-0 ">
            <div class="p-3 rounded-md shadow-2xl bg-white">
              <img class="mx-auto" src="/logo/pmi.png" width={"100px"} alt="" />
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-6 lg:mb-0 ">
            <div class="py-8 px-2 rounded-md shadow-2xl bg-white">
              <img
                class="mx-auto"
                src="/logo/cisco.png"
                width={"115px"}
                alt=""
              />
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-6 lg:mb-0 ">
            <div class="py-11 px-2 rounded-md shadow-2xl bg-white">
              <img
                class="mx-auto"
                src="/logo/microsoft.png"
                width={"130px"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosBannerCard;
