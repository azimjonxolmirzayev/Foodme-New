import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState("premium-monthly");

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-6  rounded-sm border border-stroke bg-white shadow-default dark:border-sky-200 dark:bg-boxdark">
      <form
        id="payment-form"
        method="POST"
        action="/"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Choose Your Plan
          </h2>
          <p className="text-gray-600">Select the best plan that suits you.</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <label htmlFor="plan-monthly" className="flex items-center mb-2">
            <input
              id="plan-monthly"
              type="radio"
              name="plan"
              value="premium-monthly"
              checked={selectedPlan === "premium-monthly"}
              onChange={handlePlanChange}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2 text-gray-700">
              Monthly - <strong>100,000 UZS</strong> / month
            </span>
          </label>

          <label htmlFor="plan-six-monthly" className="flex items-center mb-2">
            <input
              id="plan-six-monthly"
              type="radio"
              name="plan"
              value="premium-six-monthly"
              checked={selectedPlan === "premium-six-monthly"}
              onChange={handlePlanChange}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2 text-gray-700">
              Half-year - <strong>95,000 UZS</strong> / month
            </span>
          </label>

          <label htmlFor="plan-yearly" className="flex items-center">
            <input
              id="plan-yearly"
              type="radio"
              name="plan"
              value="premium-yearly"
              checked={selectedPlan === "premium-yearly"}
              onChange={handlePlanChange}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2 text-gray-700">
              Yearly - <strong>90,000 UZS</strong> / year
              <span className="text-green-500 ml-2">
                - save <strong>120,000 UZS</strong> per year
              </span>
            </span>
          </label>
        </div>

        {selectedPlan !== "standard-free" && (
          <div className="space-y-2">
            <label
              htmlFor="card-element"
              className="block text-gray-700 font-medium"
            >
              Credit or Debit Card
            </label>
            <input
              id="card-element"
              name="card-element"
              placeholder="Card number"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:border-indigo-500"
            />
          </div>
        )}

        <div className="text-center mt-6">
          <button
            id="card-button"
            name="submitPayment"
            type="submit"
            className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition duration-200"
          >
            {selectedPlan === "premium-monthly"
              ? "Sign up monthly for 100,000 UZS"
              : selectedPlan === "premium-six-monthly"
              ? "Sign up half-yearly for 95,000 UZS"
              : "Sign up yearly for 90,000 UZS"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PricingPlans;
