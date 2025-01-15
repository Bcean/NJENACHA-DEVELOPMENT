import React from "react";
import { MeetingCard } from "../Components/MeetingCard";
import { PresidentCard } from "../Components/PresidentCard";

export const Contact = () => {
  return (
    <main className="h-[125vh] w-full flex flex-col gap-8  items-center justify-center text-center">
      <h1 className="text-6xl">
        <strong>Contact Us</strong>
      </h1>
      <h6 className="font-light text-2xl">
        Below are the seven branches, their meeting days, their respective
        presidents, and their contact numbers.
      </h6>
      <div className="grid grid-rows-1 grid-cols-4 px-[3%]  justify-items-center items-center w-full h-[25%]">
        <MeetingCard
          branchName="Doula Branch"
          meetingTime="Third Sunday of each month"
          president="Mr Fondong Rufus"
          tel="675700912"
        ></MeetingCard>
        <MeetingCard
          branchName="Buea Branch"
          meetingTime="Second Sunday of each month"
          president="Mr Tankeng Charles"
          tel="677629209"
        ></MeetingCard>
        <MeetingCard
          branchName="Yaounde Branch"
          meetingTime="Second Sunday of each month"
          president="Mr, Zelefac Benard"
          tel="677955255"
        ></MeetingCard>
        <MeetingCard
          branchName="Mutengene Branch"
          meetingTime="Third Sunday of each month"
          president="Ms Fondong Helen"
          tel="674800098"
        ></MeetingCard>
      </div>
      <div className="flex w-full  px-[3%]  justify-around items-center  h-[25%] ">
        <MeetingCard
          branchName="Limbe Branch"
          meetingTime="Third Sunday of each month"
          president=" Mr Akafu Prisco"
          tel="677146481"
        ></MeetingCard>
        <MeetingCard
          branchName="Kumba Branch"
          meetingTime="Last Sunday of each month"
          president="Mr Nkemazeh Ignasius"
          tel="679317464"
        ></MeetingCard>
        <MeetingCard
          branchName="USA Branch"
          meetingTime="Second Sunday of each month"
          president="Mr Denis Alaandem"
          tel="4438584263"
        ></MeetingCard>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-4xl">
          <strong>You can also reach our general president here</strong>
        </h1>
        <h6 className="font-light text-2xl">
          He coordinates and oversees the activities of all branche
        </h6>
        <PresidentCard></PresidentCard>
      </div>
    </main>
  );
};
