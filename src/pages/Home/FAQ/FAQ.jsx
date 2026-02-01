import React from "react";

const FAQ = () => {
  return (
    <div className="pb-6">
      <header className="text-center py-10">
        <h1 className="text-2xl text-secondary font-semibold">Frequently Asked Question (FAQ)</h1>
      <p className="">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro. <br />
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>
      </header>
      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-base-100 border-base-300 border"
      >
        <div className="collapse-title font-semibold">
          How does this posture corrector work?
        </div>
        <div className="collapse-content text-sm">
          A posture corrector works by providing support and gentle alignment to
          your shoulders, back, and spine, encouraging you to maintain proper
          posture throughout the day. Here’s how it typically functions: A
          posture corrector works by providing support and gentle alignment to
          your shoulders.
        </div>
      </div>
    </div>
  );
};

export default FAQ;
