import PlanPage from "@/components/PlanPage";
import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import { Carousel } from "antd";

const contentStyle2: React.CSSProperties = {
  height: "370px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  borderRadius: "30px",
  border: "none",
  width: "650px",
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
    <div className=" flex flex-col gap-5">
      <div className="">
        <h1 className="text-4xl font-medium">
          Planning leads to better results
        </h1>
        <PlanPage planData={getPlans} />
      </div>{" "}
      <div className=" mb-5 relative z-[200]">
        <Carousel autoplay effect="fade">
          <div className="grid w-full relative p-2 z-[200] md:grid-cols-2 grid-cols-1 gap-5">
            <img style={contentStyle2} src="/slide1.jpg" alt="slide1" />

            <div className=" pb-8 ">
              <h1 className="lg:text-6xl text-3xl">Hard Work</h1>
              <p className="md:text-3xl text-xl">
                Always plan for success. You only Fail when you{" "}
                <span className="font-bold">STOP.</span>
              </p>
            </div>
          </div>{" "}
          <div className="grid relative p-2 z-[200] md:grid-cols-2 grid-cols-1 gap-5">
            <img style={contentStyle2} src="/slide2.jpg" alt="slide1" />

            <div className=" pb-8">
              <h1 className="lg:text-6xl text-3xl">Hard Work</h1>
              <p className="md:text-3xl text-xl">
                Always plan for success. You only Fail when you{" "}
                <span className="font-bold">STOP.</span>
              </p>
            </div>
          </div>{" "}
          <div className="grid relative p-2 z-[200] md:grid-cols-2 grid-cols-1 gap-5">
            <img style={contentStyle2} src="/slide3.jpg" alt="slide1" />

            <div className="  pb-8">
              <h1 className="lg:text-6xl text-3xl">Hard Work</h1>
              <p className="md:text-3xl text-xl">
                Always plan for success. You only Fail when you{" "}
                <span className="font-bold">STOP.</span>
              </p>
            </div>
          </div>{" "}
          <div className="grid relative p-2 z-[200] md:grid-cols-2 grid-cols-1 gap-5">
            <img style={contentStyle2} src="/slide4.jpg" alt="slide1" />

            <div className=" pb-8">
              <h1 className="lg:text-6xl text-3xl">Hard Work</h1>
              <p className="md:text-3xl text-xl">
                Always plan for success. You only Fail when you{" "}
                <span className="font-bold">STOP.</span>
              </p>
            </div>
          </div>{" "}
          <div className="grid relative p-2 z-[200] md:grid-cols-2 grid-cols-1 gap-5">
            <img style={contentStyle2} src="/slide5.jpg" alt="slide1" />

            <div className=" pb-8">
              <h1 className="lg:text-6xl text-3xl">Hard Work</h1>
              <p className="md:text-3xl text-xl">
                Always plan for success. You only Fail when you{" "}
                <span className="font-bold">STOP.</span>
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default page;
