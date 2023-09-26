import PlanPage from "@/components/PlanPage";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import { Carousel } from "antd";
import PlanGoal from "@/components/PlanGoal";
import DashboardChart from "@/components/dashboard/DashboardChart";

const contentStyle2: React.CSSProperties = {
  height: "350px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  borderRadius: "15px",
  border: "none",
  width: "100%",
  position: "relative",
  zIndex: "200",
};
type Props = {};

const page = async (props: Props) => {
  const session = await getAuthSession();
  if (!session) {
    redirect("/");
  }

  const getPlans = await prisma.plan.findMany({
    where: {
      userId: session.user.id,
    },
  });

  return (
    <div className=" flex flex-col gap-10">
      <div className="">
        <h1 className="text-4xl font-medium pb-2">
          Planning leads to better results
        </h1>
        <div className="">
          <h1 className="text-5xl font-extrabold ">Plans</h1>
          <PlanPage planData={getPlans} />
        </div>
      </div>
    </div>
  );
};

export default page;
