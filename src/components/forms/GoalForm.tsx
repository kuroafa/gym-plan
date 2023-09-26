"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button, Input } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { GoalCreation, GoalSchema } from "@/lib/type";
import { DatePicker } from "antd";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

type Props = {};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const GoalForm = (props: Props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  const {
    reset,
    formState: { errors, isLoading },
  } = useForm();
  const form = useForm<GoalCreation>({
    resolver: zodResolver(GoalSchema),
    defaultValues: {
      goal: "",
      calories: "",
      isCompleted: false,
    },
  });

  const onSubmit = async (data: GoalCreation) => {
    try {
      const response = await fetch("/api/Goals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to make Goal");
      }
    } catch (error) {
      console.error("Could not create Goal:", error);
    }
    form.setValue("goal", "");
    router.refresh();
  };

  // Define styles using makeStyles
  const useStyles = makeStyles({
    loginModal: {
      position: "absolute",
      margin: "auto",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      width: "80%",
      height: "50%",
      overflowY: "none",
      outline: "none",
      borderRadius: 40,
      backgroundColor: "white",

      backgroundImage: `url("/gymgirl.png")`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      position: "relative",
    },
  });

  // Apply the styles to Dialog and Button using the classes prop
  const classes = useStyles();

  return (
    <div>
      <div className="grid grid-cols-1">
        <button
          onClick={handleClickOpen}
          className="bg-indigo-500 text-white rounded-[30px] p-2"
        >
          Set goal
        </button>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        classes={{ paper: classes.loginModal }} // Apply the custom class to the paper element
      >
        <DialogTitle className="lg:text-3xl  text-2xl font-bold">
          {"Set your physical goals"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="z-[-1] mt-20 flex flex-col  p-3 rounded-[30px] gap-2 items-start"
              >
                <div className="grid md:grid-cols-1   gap-[20px] ">
                  <div className="grid grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="goal"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="text-sm  "
                              placeholder="Weight(lb)"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription className="text-md font-bold text-black">
                            Target weight
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="calories"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="text-sm  "
                              placeholder="Calories"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription className="text-md font-bold text-black ">
                            Daily calories
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <button
                    className="rounded-[30px] bg-lime-300 text-black text-lg py-5"
                    variant="outlined"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </Form>
          </DialogContentText>
         
        </DialogContent>
        <DialogActions>
          <button
            className="bg-black p-3 text-xl rounded-[30px] text-white font-semibold "
            onClick={handleClose}
          >
            Close
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default GoalForm;
