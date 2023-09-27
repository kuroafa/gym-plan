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
import { allWorkouts } from "../utils/Data";
import LatestPlan from "./LatestPlan";
import DeleteButton from "../buttons/DeleteButton";
import { Button } from "@mui/material";
import PlanForm from "../forms/PlanForm";
import PlanPageTabs from "../PlanPageTabs";

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
      label: (
        <div className="md:text-xl font-semibold  text-black p-2 rounded-xl">
          {" "}
          {plan.day}
        </div>
      ),
      children: (
        <div>
          <div className="grid  grid-cols-1 gap-5">
            <div className=" p-2 rounded-xl">
              <div className="flex justify-between">
                <p className="text-3xl mb-2 font-bold">{plan.day}</p>
              </div>

              <p className="text-xl mb-2">{plan.planName}</p>
              <div className="flex flex-col gap-1">
                <p className="text-xl">
                  {plan.fitnessGoals.replace("_", " ").toLowerCase()}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Note:</span> {plan.description}
                </p>
                <div className="mt-2">
                  <DeleteButton id={plan.id} />
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
      <div className="grid grid-cols-1   rounded-2xl">
        {planData.length ? (
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
        ) : (
          <div className="h-[200px] rounded-lg flex flex-col items-center justify-center ">
            <h2 className="text-lg mb-2 font-medium">
              Ready to start taking on your Training journey? Create new workout
              sessions now!
            </h2>
            <Button variant="outlined" className="text-black">
              Create new session
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default PlanPage;
