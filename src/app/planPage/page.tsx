import PlanPage from "@/components/PlanPage";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import { Carousel } from "antd";
import PlanGoal from "@/components/PlanGoal";
import DashboardChart from "@/components/DashboardChart";

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
  
      <div className="grid  mt-3  gap-4 grid-cols-1">
        <div className=" relative z-[200]">
          <Carousel autoplay effect="fade">
            <div className="grid w-full relative  z-[200] md:grid-cols-2 grid-cols-1 gap-5">
              <img style={contentStyle2} src="/slide1.jpg" alt="slide1" />
            </div>{" "}
            <div className="grid relative z-[200] md:grid-cols-2 grid-cols-1 gap-5">
              <img style={contentStyle2} src="/slide2.jpg" alt="slide1" />
            </div>{" "}
            <div className="grid relative z-[200] md:grid-cols-2 grid-cols-1 gap-5">
              <img style={contentStyle2} src="/slide3.jpg" alt="slide1" />
            </div>{" "}
            <div className="grid relative z-[200] md:grid-cols-2 grid-cols-1 gap-5">
              <img style={contentStyle2} src="/slide4.jpg" alt="slide1" />
            </div>{" "}
            <div className="grid relative  z-[200] md:grid-cols-2 grid-cols-1 gap-5">
              <img style={contentStyle2} src="/slide5.jpg" alt="slide1" />
            </div>
          </Carousel>
        </div>
      </div>  
        <div className="">
        <h1 className="text-4xl font-medium pb-2">
          Planning leads to better results
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          <div className="">
            <h1 className="text-5xl font-extrabold ">Plans</h1>
            <PlanPage planData={getPlans} />
          </div>
          <div className="md:col-span-2 col-span-1 sm:mt-10">
            <DashboardChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
