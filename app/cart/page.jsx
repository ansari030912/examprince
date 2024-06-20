"use client";
import { Box, Typography } from "@mui/material";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";

const CartPage = () => {
  const [loginResponse, setLoginResponse] = useState(null);
  const [cartResponse, setCartResponse] = useState(null);
  const [examData, setExamData] = useState(null);
  // const searchParams = useSearchParams();
  // const queryEmail = searchParams?.get("referralCode");
  // console.log("🚀 ~ CheckOutCard ~ queryEmail:", queryEmail);
  const discountAmount =
    Math.floor(cartResponse?.full_price) - Math?.floor(cartResponse?.price);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const storedLoginResponse = localStorage.getItem("loginResponse");
      if (storedLoginResponse) {
        setLoginResponse(JSON.parse(storedLoginResponse));
      }
    }
    if (typeof localStorage !== "undefined") {
      const storedCartResponse = localStorage.getItem("ExamCartAdded");
      if (storedCartResponse) {
        setCartResponse(JSON.parse(storedCartResponse));
      }
    }
    if (typeof localStorage !== "undefined") {
      const localExamData = localStorage.getItem("CartExamData");
      if (localExamData) {
        setExamData(JSON.parse(localExamData));
      }
    }
  }, []);

  const handleRemoveData = () => {
    localStorage.removeItem("ExamCartAdded");
    localStorage.removeItem("CartExamData");
    window.location.reload();
  };

  return (
    <section className="pt-9 pb-16 bg-white" style={{ borderRadius: "12px" }}>
      <div className="container mx-auto px-4">
        {cartResponse ? (
          <>
            <div className="flex flex-wrap gap-2 mb-8">
              <Link href="/" className="group">
                <div className="flex flex-wrap items-center">
                  <span className="text-xs text-gray-500 group-hover:text-gray-900 transition duration-200">
                    Home
                  </span>
                  <div className="text-gray-500 group-hover:text-gray-900 transition duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M12.9465 9.40832L8.22986 4.69999C8.15239 4.62188 8.06022 4.55989 7.95867 4.51758C7.85712 4.47527 7.7482 4.45349 7.63819 4.45349C7.52818 4.45349 7.41926 4.47527 7.31771 4.51758C7.21616 4.55989 7.124 4.62188 7.04653 4.69999C6.89132 4.85613 6.8042 5.06734 6.8042 5.28749C6.8042 5.50764 6.89132 5.71885 7.04653 5.87499L11.1715 10.0417L7.04653 14.1667C6.89132 14.3228 6.8042 14.534 6.8042 14.7542C6.8042 14.9743 6.89132 15.1855 7.04653 15.3417C7.12371 15.4204 7.21574 15.483 7.31731 15.526C7.41887 15.5689 7.52794 15.5912 7.63819 15.5917C7.74845 15.5912 7.85752 15.5689 7.95908 15.526C8.06064 15.483 8.15268 15.4204 8.22986 15.3417L12.9465 10.6333C13.0311 10.5553 13.0986 10.4606 13.1448 10.3552C13.191 10.2497 13.2148 10.1359 13.2148 10.0208C13.2148 9.90574 13.191 9.7919 13.1448 9.68648C13.0986 9.58107 13.0311 9.48636 12.9465 9.40832Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </Link>
              <Link href="#" className="group">
                <div className="flex flex-wrap items-center">
                  <span className="text-xs text-gray-500 group-hover:text-gray-900 transition duration-200">
                    Checkout
                  </span>
                  <div className="text-gray-500 group-hover:text-gray-900 transition duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M12.9465 9,.40832L8.22986 4.69999C8.15239 4.62188 8.06022 4.55989 7.95867 4.51758C7.85712 4.47527 7.7482 4.45349 7.63819 4.45349C7.52818 4.45349 7.41926 4.47527 7.31771 4.51758C7.21616 4.55989 7.124 4.62188 7.04653 4.69999C6.89132 4.85613 6.8042 5.06734 6.8042 5.28749C6.8042 5.50764 6.89132 5.71885 7.04653 5.87499L11.1715 10.0417L7.04653 14.1667C6.89132 14.3228 6.8042 14.534 6.8042 14.7542C6.8042 14.9743 6.89132 15.1855 7.04653 15.3417C7.12371 15.4204 7.21574 15.483 7.31731 15.526C7.41887 15.5689 7.52794 15.5912 7.63819 15.5917C7.74845 15.5912 7.85752 15.5689 7.95908 15.526C8.06064 15.483 8.15268 15.4204 8.22986 15.3417L12.9465 10.6333C13.0311 10.5553 13.0986 10.4606 13.1448 10.3552C13.191 10.2497 13.2148 10.1359 13.2148 10.0208C13.2148 9.90574 13.191 9.7919 13.1448 9.68648C13.0986 9.58107 13.0311 9.48636 12.9465 9.40832Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="w-full lg:w-7/12 p-4">
                <div className="px-4 py-6 border border-gray-100 rounded-lg">
                  <h6 className="mb-4 text-lg font-semibold text-center">
                    Billing Address
                  </h6>

                  <div className="mb-4">
                    <label
                      htmlFor="input-01-5"
                      className="mb-1.5 inline-block text-sm"
                    >
                      Phone number
                    </label>
                    <input
                      id="input-01-5"
                      name="phone-number"
                      type="text"
                      className="py-3 px-4 w-full text-sm placeholder-gray-500 outline-none border focus:border-gray-300 focus:ring focus:ring-gray-100 border-gray-100 rounded-lg transition duration-200"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="input-01-6"
                      className="mb-1.5 inline-block text-sm"
                    >
                      Street name and house number
                    </label>
                    <input
                      id="input-01-6"
                      name="street-name"
                      type="text"
                      className="py-3 px-4 w-full text-sm placeholder-gray-500 outline-none border focus:border-gray-300 focus:ring focus:ring-gray-100 border-gray-100 rounded-lg transition duration-200"
                      placeholder="-"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="input-01-7"
                      className="mb-1.5 inline-block text-sm"
                    >
                      City
                    </label>
                    <input
                      id="input-01-7"
                      name="city"
                      type="text"
                      className="py-3 px-4 w-full text-sm placeholder-gray-500 outline-none border focus:border-gray-300 focus:ring focus:ring-gray-100 border-gray-100 rounded-lg transition duration-200"
                      placeholder="Your city"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="input-01-8"
                      className="mb-1.5 inline-block text-sm"
                    >
                      Postal code
                    </label>
                    <input
                      id="input-01-8"
                      name="postal-code"
                      type="text"
                      className="py-3 px-4 w-full text-sm placeholder-gray-500 outline-none border focus:border-gray-300 focus:ring focus:ring-gray-100 border-gray-100 rounded-lg transition duration-200"
                      placeholder="Your postal code"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="select-01-2"
                      className="mb-1.5 inline-block text-sm"
                    >
                      Country
                    </label>
                    <select
                      name="country"
                      id="select-01-2"
                      className="appearance-none block py-3 px-4 w-full text-sm text-gray-500 placeholder-gray-500 outline-none border focus:border-gray-300 focus:ring focus:ring-gray-100 border-gray-100 rounded-lg transition duration-200"
                    >
                      <option value="" selected="" disabled="" hidden="">
                        Select country
                      </option>
                      <option value="poland">Poland</option>
                      <option value="france">France</option>
                      <option value="italy">Italy</option>
                      <option value="australia">Australia</option>
                    </select>
                  </div>
                  <label className="relative flex items-center gap-2 mb-4">
                    <input
                      className="custom-checkbox-1 opacity-0 absolute h-4 w-4"
                      type="checkbox"
                      name="checkout-info"
                    />
                    <span className="border border-gray-900 w-4 h-4 flex justify-center items-center rounded-sm">
                      <svg
                        className="fill-current hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M12.4736 4.80668C12.4117 4.7442 12.3379 4.6946 12.2567 4.66075C12.1754 4.62691 12.0883 4.60948 12.0003 4.60948C11.9123 4.60948 11.8252 4.62691 11.7439 4.66075C11.6627 4.6946 11.5889 4.7442 11.527 4.80668L6.5603 9.78001L4.47363 7.68668C4.40928 7.62452 4.33332 7.57565 4.25009 7.54284C4.16685 7.51004 4.07797 7.49395 3.98851 7.4955C3.89906 7.49705 3.81079 7.5162 3.72873 7.55186C3.64668 7.58753 3.57246 7.639 3.5103 7.70335C3.44814 7.7677 3.39926 7.84366 3.36646 7.92689C3.33366 8.01013 3.31757 8.09901 3.31912 8.18847C3.32067 8.27792 3.33982 8.36619 3.37548 8.44824C3.41114 8.5303 3.46262 8.60452 3.52696 8.66668L6.08696 11.2267C6.14894 11.2892 6.22267 11.3388 6.30391 11.3726C6.38515 11.4065 6.47229 11.4239 6.5603 11.4239C6.6483 11.4239 6.73544 11.4065 6.81668 11.3726C6.89792 11.3388 6.97166 11.2892 7.03363 11.2267L12.4736 5.78668C12.5413 5.72425 12.5953 5.64848 12.6322 5.56415C12.6692 5.47982 12.6883 5.38875 12.6883 5.29668C12.6883 5.20461 12.6692 5.11354 12.6322 5.02921C12.5953 4.94488 12.5413 4.86911 12.4736 4.80668Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-sm">
                      Save my information for future checkout
                    </span>
                  </label>
                </div>
              </div>
              <div className="w-full lg:w-5/12 p-4">
                <div className="px-4 py-6 border border-gray-200 rounded-2xl">
                  <h6 className="mb-4 text-2xl font-semibold text-center">
                    Your order
                  </h6>
                  <div className="pb-6 border-b border-dashed">
                    <div className="flex flex-wrap items-end -m-2">
                      <div className="w-full p-2">
                        <div className="flex -m-2">
                          <div className="w-auto p-2">
                            <img
                              className="rounded-lg"
                              src="/package-small-min_optimized.png"
                              alt=""
                              width={"100px"}
                            />
                          </div>
                          <div className="p-2">
                            <p className="mb-1.5 font-semibold text-blue-500 text-sm">
                              {examData?.exam_title}
                            </p>
                            <p className="mb-1.5 text-sm text-green-600">
                              {examData?.exam_title === cartResponse?.title
                                ? ""
                                : cartResponse?.title}
                            </p>
                            <div className="flex justify-between">
                              <p className="text-base">x1</p>
                              <span className="text-xl font-semibold">
                                $ {cartResponse?.full_price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleRemoveData}
                      className="py-3 px-7 mt-6 w-full text-sm text-white font-semibold bg-red-500 hover:bg-red-600 focus:bg-red-500 rounded-5xl focus:ring-4 focus:ring-gray-200 transition duration-300"
                    >
                      Clear Cart
                    </button>
                  </div>
                  <div className="py-6 border-b border-dashed">
                    <h6 className="mb-4 text-lg font-semibold">
                      Discount Code
                    </h6>
                    <form action="#">
                      <div className="flex flex-wrap items-center -m-2 mb-0.5">
                        <div className="w-full lg:flex-1 p-2">
                          <input
                            type="text"
                            name="voucher"
                            className="py-3 px-4 w-full text-sm placeholder-gray-500 bg-gray-50 outline-none focus:ring focus:ring-gray-100 border-gray-100 rounded-lg transition duration-200"
                            placeholder="Enter your voucher"
                          />
                        </div>
                        <div className="w-full lg:w-auto p-2">
                          <button className="py-3 px-7 w-full text-sm text-white font-semibold bg-gray-900 hover:bg-gray-800 focus:bg-gray-900 rounded-5xl focus:ring-4 focus:ring-gray-200 transition duration-300">
                            Apply
                          </button>
                        </div>
                      </div>
                    </form>
                    <p className="text-sm">
                      New customer?{" "}
                      <Link
                        href="/register"
                        className="inline-block text-green-800 hover:text-green-900 font-semibold"
                      >
                        register
                      </Link>{" "}
                      to get better deals
                    </p>
                  </div>
                  <div className="py-5 border-b border-dashed">
                    <div className="flex flex-wrap justify-between -m-2">
                      <div className="w-auto p-2">
                        <span className="text-sm text-gray-500">Subtotal</span>
                      </div>
                      <div className="w-auto p-2">
                        <span className="font-semibold text-xl text-red-600">
                          $ {cartResponse?.full_price}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-between -m-2">
                      <div className="w-auto p-2">
                        <span className="text-sm text-gray-500">Off</span>
                      </div>
                      <div className="w-auto p-2">
                        <span className="font-semibold text-green-500 text-xl">
                          {cartResponse?.off} %
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-between -m-2">
                      <div className="w-auto p-2">
                        <span className="text-sm text-gray-500">Discount</span>
                      </div>
                      <div className="w-auto p-2">
                        <span className="font-semibold text-green-500 text-xl">
                          $ {discountAmount}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="flex flex-wrap items-center justify-between -m-2">
                      <div className="w-auto p-2">
                        <p className="font-semibold text-2xl">Total Price</p>
                      </div>
                      <div className="w-auto p-2">
                        <p className="text-2xl font-semibold text-green-500">
                          $ {cartResponse?.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="py-3 px-7 mt-6 w-full text-sm text-white font-semibold bg-blue-500 hover:bg-blue-600 focus:bg-blue-500 rounded-5xl focus:ring-4 focus:ring-gray-200 transition duration-300">
                  Check Out
                </button>
              </div>
            </div>
          </>
        ) : (
          <Box
            className="bg-gray-50 rounded-lg p-10"
            sx={{ padding: "20px", textAlign: "center" }}
          >
            <Typography className="text-gray-600 text-4xl" fontWeight={"bold"}>
              Cart is Empty
            </Typography>

            <Typography className="text-gray-500 text-2xl" fontWeight={"bold"}>
              Please Add Your Product First
            </Typography>
          </Box>
        )}
      </div>
    </section>
  );
};

export default CartPage;
