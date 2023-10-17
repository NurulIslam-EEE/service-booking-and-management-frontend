"use client";
import PublicHeader from "@/components/view/Header/PublicHeader";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <PublicHeader />
      <div className="items-center flex justify-center">
        <div className="">
          <div className="relative h-90vh items-center flex justify-center">
            <div className="absolute notfound-content">
              <div className="flex justify-center items-center ">
                <div className="not-found-btn-tex">
                  <h1 className="">Opps! Not Found</h1>

                  <button
                    onClick={() => {
                      router.push("/");
                    }}
                    className=""
                  >
                    Back To Home
                  </button>
                </div>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        {/* <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div> */}
      </div>
    </>
  );
};

export default NotFound;
