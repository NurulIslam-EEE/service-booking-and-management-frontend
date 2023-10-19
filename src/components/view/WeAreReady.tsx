"use client";
import { useRouter } from "next/navigation";
import React from "react";

function WeAreReady() {
  const router = useRouter();
  return (
    <section style={{ marginTop: "10px" }} className="container we-ready py-4">
      <div className="img">
        <img src="https://i.ibb.co/h81fh9j/img7.jpg" alt="" width="100%" />
      </div>

      <div className="content">
        <h3 className="">
          # BEST <span>CONSTRUCTION, PLUBMING, HOME RENOVATION </span>{" "}
          CONTRACTOR
        </h3>
        <button onClick={() => router.push("/contact")}>Contact </button>
      </div>
    </section>
  );
}

export default WeAreReady;
