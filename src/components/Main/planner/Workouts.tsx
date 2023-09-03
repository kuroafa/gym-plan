"use client";
import PlanForm from "@/components/PlanForm";
import DeleteButton from "@/components/buttons/DeleteButton";
import { Plan, Workout } from "@prisma/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Avatar, Divider, List, Skeleton } from "antd";
import Link from "next/link";
import WorkoutForm from "@/components/WorkoutForm";
type Props = {
  workoutData: Pick<
    Workout,
    "workOutName" | "id" | "numberPerSet" | "sets" | "planId"| 'day'
  >[];
};

interface DataType {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

const Workouts = ({ workoutData }: Props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <div>
      <Divider orientation="left">
        <h1 className="text-2xl ">Workout&apos;s</h1>
      </Divider>
      <div
        id="scrollableDiv"
        style={{
          height: 400,
          overflow: "auto",
          padding: "0 20px",
          border: "1px solid rgba(140, 140, 140, 0.35)",
        }}
      >
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={data.length < 50}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain>That is all the workouts created without a plan</Divider>}
          scrollableTarget="scrollableDiv"
        >
          <List
            dataSource={workoutData}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src="/weightlift.png" />}
                  title={
                    <Link
                      className="text-lg font-semibold"
                      href={`/planProfile/${item.id}`}
                    >
                      {item.workOutName?.toLocaleUpperCase()}
                    </Link>
                  }
                  description={
                    item.day ? (
                      <p className="text-[16px]">{item.day}</p>
                    ) : (
                      <p>No Days</p>
                    )
                  }
                />
                <div className="flex gap-1 items-center">
                  <div className="ml-3">
                  </div>
                  <div>Edit |</div>

                  <DeleteButton id={item.id} />
                </div>
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Workouts;
