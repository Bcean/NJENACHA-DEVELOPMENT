import React from "react";

export const MeetingCard = ({ branchName, meetingTime, president, tel }) => {
  return (
    <div className="border border-black rounded h-fit w-[350px] flex flex-col gap-3 p-[2%]">
      <h1 className="text-3xl">{branchName}</h1>
      <h3 className="font-light">
        <strong>Meeting Time:</strong>
        {meetingTime}
      </h3>
      <h3 className="font-light">
        <strong>President:</strong>
        {president}
      </h3>
      <h3 className="font-light">
        <strong>Tel:</strong>
        {tel}
      </h3>
    </div>
  );
};
