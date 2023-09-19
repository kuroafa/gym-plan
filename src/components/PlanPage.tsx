"use client";
import type { DragEndEvent } from "@dnd-kit/core";
import { DndContext, PointerSensor, useSensor } from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useState } from "react";
import { Tabs } from "antd";
import { Plan } from "@prisma/client"; // Assuming you have the Plan type defined
import { allWorkouts } from "./utils/Data";
import LatestPlan from "./LatestPlan";
import { Button } from "./ui/button";
import DeleteButton from "./buttons/DeleteButton";

interface DraggableTabPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  "data-node-key": string;
}

const DraggableTabNode = ({ className, ...props }: DraggableTabPaneProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: props["data-node-key"],
    });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Transform.toString(transform && { ...transform, scaleX: 1 }),
    transition,
    cursor: "move",
  };

  return React.cloneElement(props.children as React.ReactElement, {
    ref: setNodeRef,
    style,
    ...attributes,
    ...listeners,
  });
};

type Props = {
  planData: Plan[];
};
const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  zIndex: 1,
};

const PlanPage = ({ planData }: Props) => {
  const [items, setItems] = useState([
    ...planData.map((plan) => ({
      key: plan.id.toString(),
      label: <div className="md:text-xl font-semibold bg-lime-500 text-black p-2 rounded-xl"> {plan.day}</div>,
      children: (
        <div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <div className=" p-2 rounded-xl">
              <div className="flex justify-between">
                <p className="text-6xl mb-2 ">{plan.day}</p>
               
              </div>

              <p className="text-3xl mb-2">Plan: {plan.planName}</p>
              <div className="flex flex-col gap-1">
                <p className="text-2xl">
                  Fitness Goal: {plan.fitnessGoals.replace("_", " ")}
                </p>
                <p className="text-2xl">Note: {plan.description}</p>
                <div className="mt-2">
                  <DeleteButton id={plan.id} />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2 shadow-2xl shadow-black rounded-xl p-2">
              <LatestPlan planData={planData} />
              <div className="flex flex-col gap-2 mb-5 ml-3 ">
                <h1 className="text-3xl font-medium border-b w-fit border-lime-500">
                  Recommended Workouts
                </h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-2 sm:grid-cols-2 grid-cols-1 ">
                
                  {allWorkouts.map((work) => {
                    return (
                      <>
                        {plan.fitnessGoals === work.fitnessGoal && (
                          <div className="relative z-[200]">
                             <div className="rounded-xl" style={overlayStyle}></div>
                            <div className="shadow-2xl p-2 rounded-lg relative z-[200]    hover:shadow-2xl hover:shadow-black  cursor-pointer ">
                               
                              <h1 className="xl:text-2xl text-2xl font-medium text-black">
                                {work.exercise}
                              </h1>
                              {/* <div className="gap-1">
                                <p className="text-2xl text-gray-700">
                                  Sets:{" "}
                                  <span className="font-bold text-2xl">
                                    {work.sets}
                                  </span>
                                </p>
                                <p className="text-2xl text-gray-700">
                                  Reps:{" "}
                                  <span className="font-bold text-2xl">
                                    {work.reps}
                                  </span>
                                </p>
                              </div> */}
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    })),
  ]);

  const sensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setItems((prev) => {
        const activeIndex = prev.findIndex((i) => i.key === active.id);
        const overIndex = prev.findIndex((i) => i.key === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 ml-2">
        <Tabs
          items={items}
          renderTabBar={(tabBarProps, DefaultTabBar) => (
            <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
              <SortableContext
                items={items.map((i) => i.key)}
                strategy={horizontalListSortingStrategy}
              >
                <DefaultTabBar {...tabBarProps}>
                  {(node) => (
                    <DraggableTabNode {...node.props} key={node.key}>
                      {node}
                    </DraggableTabNode>
                  )}
                </DefaultTabBar>
              </SortableContext>
            </DndContext>
          )}
        />
      </div>
    </>
  );
};

export default PlanPage;
