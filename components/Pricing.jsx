import { AiFillCheckCircle } from "react-icons/ai";
import { cn } from "@/lib/utils";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section className="flex pb-16 items-center justify-center">
      <div className="flex flex-col items-center gap-20">
        <div className="flex flex-col items-center mx-auto">
          <div className="items-center flex flex-col gap-10">
            <h2 className="text-[#252B42] text-4xl font-bold tracking-wider">
              Pricing
            </h2>
            <p className="text-[#737373] text-center font-medium tracking-wide">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          {/* Start of Card */}
          <div
            className={cn(
              "flex-col flex md:flex-row justify-center items-center gap-8 w-full"
            )}
          >
            <div className="flex w-full md:w-1/3 flex-col items-center">
              <div className="flex flex-col w-full items-center justify-center pt-7 pb-8 px-[0.5px]">
                <div className="flex flex-col w-full text-center items-center gap-4 sm:gap-9 py-6 px-5 lg:py-12 lg:px-10 border-[#DEDEDE] border rounded-xl">
                  <h3 className="text-[#252B42] font-bold tracking-wide">
                    FREE
                  </h3>
                  <h5>Take advantage of the market</h5>

                  <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-bold tracking-wide text-green-500">
                      $0
                    </h1>
                    <h5 className="font-bold tracking-normal text-green-500">
                      Per Month
                    </h5>
                  </div>
                  <button className="flex py-3 px-9 items-center rounded-lg bg-green-700 hover:bg-green-700/70">
                    <p className="text-white text-md items-center font-bold">
                      Try for Free
                    </p>
                  </button>
                  <div className="hidden sm:flex flex-col justify-between h-full min-h-[295px]">
                    <div className="flex flex-col items-start gap-4">
                      <div className="flex items-center gap-2.5">
                        <AiFillCheckCircle
                          className="text-green-500 flex"
                          size={30}
                        />
                        <h6 className="text-md flex text-md flex-col">
                          Search Stocks
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                      <div className="flex items-center gap-2.5">
                        <AiFillCheckCircle
                          className="text-green-500 flex"
                          size={30}
                        />
                        <h6 className="text-md flex text-md flex-col">
                          Analyze Trends
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                      <div className="flex items-center gap-2.5">
                        <AiFillCheckCircle
                          className="text-gray-500 flex"
                          size={30}
                        />
                        <h6 className="text-md flex text-md flex-col">
                          Unlimited product
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                      <div className="flex items-center gap-2.5">
                        <AiFillCheckCircle
                          className="text-gray-500 flex"
                          size={30}
                        />
                        <h6 className="text-md flex text-md flex-col">
                          Unlimited product
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                      <div className="flex items-center gap-2.5">
                        <AiFillCheckCircle
                          className="text-gray-500 flex"
                          size={30}
                        />
                        <h6 className="text-md flex text-md flex-col">
                          Unlimited product
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full md:w-1/3 flex-col items-center">
              <div className="flex flex-col w-full items-center justify-center pt-7 pb-8 px-[0.5px]">
                <div className="flex flex-col w-full text-center items-center gap-4 sm:gap-9 py-6 px-5 lg:py-12 lg:px-10 border-[#DEDEDE] border rounded-xl">
                  <h3 className="text-[#252B42] font-bold tracking-wide">
                    Standard Plan
                  </h3>
                  <h5>Take advantage of the market</h5>

                  <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-bold tracking-wide text-green-500">
                      $9.99
                    </h1>
                    <h5 className="font-bold tracking-normal text-green-500">
                      Per Month
                    </h5>
                  </div>
                  <button className="flex py-3 px-9 items-center rounded-lg bg-green-700 hover:bg-green-700/70">
                    <p className="text-white text-md items-center font-bold">
                      Subscribe
                    </p>
                  </button>
                  <div className="hidden sm:flex flex-col justify-between h-full min-h-[295px]">
                    <div className="flex flex-col items-start gap-4">
                      <div className="flex items-center gap-2.5">
                        <AiFillCheckCircle
                          className="text-green-500 flex"
                          size={30}
                        />
                        <h6 className="text-md flex text-md flex-col">
                          Search Stocks
                        </h6>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                      <div className="flex items-center gap-2.5">
                        <AiFillCheckCircle
                          className="text-green-500 flex"
                          size={30}
                        />
                        <h6 className="text-md flex text-md flex-col">
                          Analyze Trends
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                      <div className="flex items-center gap-2.5">
                        <AiFillCheckCircle
                          className="text-green-500 flex"
                          size={30}
                        />
                        <h6 className="text-md flex text-md flex-col">
                          Unlimited product
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                      <div className="flex items-center gap-2.5">
                        <AiFillCheckCircle
                          className="text-gray-500 flex"
                          size={30}
                        />
                        <h6 className="text-md flex text-md flex-col">
                          Unlimited product
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                      <div className="flex items-center gap-2.5">
                        <AiFillCheckCircle
                          className="text-gray-500 flex"
                          size={30}
                        />
                        <h6 className="text-md flex text-md flex-col">
                          Unlimited product
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full md:w-1/3 flex-col items-center">
              <div className="flex flex-col w-full items-center justify-center pt-7 pb-8 px-[0.5px]">
                <div className="flex flex-col w-full text-center items-center gap-4 sm:gap-9 py-6 px-5 lg:py-12 lg:px-10 border-[#DEDEDE] border rounded-xl">
                  <h3 className="text-[#252B42] font-bold tracking-wide">
                    Premium Plan
                  </h3>
                  <h5>Take advantage of the market</h5>

                  <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-bold tracking-wide text-green-500">
                      $19.99
                    </h1>
                    <h5 className="font-bold tracking-normal text-green-500">
                      Per Month
                    </h5>
                  </div>
                  <button className="flex py-3 px-9 items-center rounded-lg bg-green-700 hover:bg-green-700/70">
                    <p className="text-white text-md items-center font-bold">
                      Subscribe
                    </p>
                  </button>
                  <div className="hidden sm:flex flex-col justify-between h-full min-h-[295px]">
                    <div className="flex flex-col items-start gap-4">
                      <div className="flex items-center gap-2.5">
                        <AiFillCheckCircle
                          className="text-green-500 flex"
                          size={30}
                        />
                        <h6 className="text-md flex text-md flex-col">
                          Search Stocks
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                      <div className="flex items-center gap-2.5">
                        <AiFillCheckCircle
                          className="text-green-500 flex"
                          size={30}
                        />
                        <h6 className="text-md flex text-md flex-col">
                          Analyze Trends
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                      <div className="flex items-center gap-2.5">
                        <AiFillCheckCircle
                          className="text-green-500 flex"
                          size={30}
                        />
                        <h6 className="text-md flex text-md flex-col">
                          Unlimited product
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                      <div className="flex items-center gap-2.5">
                        <AiFillCheckCircle
                          className="text-green-500 flex"
                          size={30}
                        />
                        <h6 className="text-md flex text-md flex-col">
                          Unlimited product
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                      <div className="flex items-center gap-2.5">
                        <AiFillCheckCircle
                          className="text-green-500 flex"
                          size={30}
                        />
                        <h6 className="text-md flex text-md flex-col">
                          Unlimited product
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
