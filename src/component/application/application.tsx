import React from "react";

export const Application = () => {
  return (
    <>
      <h1>Job application Form</h1>
      <h2>Section1</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name..." />
        </div>
        <div>
          <label htmlFor="bio">Bio:</label>
          <textarea id="bio" placeholder="Enter your Bio..." />
        </div>
        <div>
          <label htmlFor="job-location">Name:</label>
          <select name="" id="job-location">
            <option value="">Select Country</option>

            <option value="US">United State Country</option>

            <option value="GB">United KingDom Country</option>

            <option value="CA">Canada Country</option>

            <option value="IN">India Country</option>

            <option value="Np">Nepal Country</option>

            <option value="Pk">Pakista Country</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I agree to the term and
            conditions.
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
