"use client";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import React, { useEffect } from "react";
import { Tabs } from "@mui/material";
import DashboardChart from "../DashboardChart";
import { Goal, Plan, Trainer, User } from "@prisma/client";
import { styled } from "@mui/system";
import { buttonClasses } from "@mui/base/Button";
import { tabClasses } from "@mui/base/Tab";
import BMIcalculator from "../BMIcalculator";
import Bmi from "../Bmi";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import GoalForm from "../../forms/GoalForm";
import HerotabOne from "./HerotabOne";
import HerotabTwo from "./HerotabTwo";
import HerotabThree from "./HerotabThree";
import HerotabFour from "./HerotabFour";

type Props = {
  trainerData: Trainer[];
  userData: Pick<User, "age" | "gender" | "height" | "weight">;
  planData: Pick<
    Plan,
    "day" | "description" | "fitnessGoals" | "id" | "planName" | "userId"
  >;
  goalData: Goal[]
};

const HeroTabs = ({ trainerData, userData, planData, goalData }: Props) => {
  const [value, setValue] = React.useState("one");


  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };


  return (
    <div className="grid grid-cols-1">
      <TabContext value={value}>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit" // Set text color to inherit
            indicatorColor="primary" // Set indicator color to primary (you can customize primary color in your theme)
            aria-label="secondary tabs example"
          >
            <Tab className="font-semibold" value="one" label="for you" />
            <Tab className="font-semibold" value="two" label="recommended" />
            <Tab className="font-semibold" value="three" label="New Plan" />
            <Tab className="font-semibold" value="four" label="New session" />
          </Tabs>
        </Box>
        <TabPanel value="one">
          <HerotabOne goalData={goalData} trainerData={trainerData} planData={planData} userData={userData}/>
        </TabPanel>
        <TabPanel value="two">
          <HerotabTwo planData={planData}/>
        </TabPanel>
        <TabPanel value="three"><HerotabThree planData={planData}/></TabPanel>
        <TabPanel value="four"><HerotabFour/></TabPanel>
      </TabContext>
    </div>
  );
};

export default HeroTabs;
