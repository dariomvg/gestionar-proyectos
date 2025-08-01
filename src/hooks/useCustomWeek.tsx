"use client";
import { daysOfWeek } from "@/libs/dataPageWeek";
import { notify } from "@/libs/toast";
import { supabase } from "@/supabase/supabase";
import { CustomWeekTypes } from "@/types/types.week";
import { ChangeEvent, useEffect, useState } from "react";

export const useCustomWeek = (id: number): CustomWeekTypes => {
  const [week, setWeek] = useState<
    { id: number; day: string; content: string }[]
  >([]);

  const createWeek = async (days: number) => {
    const { error } = await supabase
      .from("projects")
      .insert([{ days_week: days }])
      .eq("id", id);
    if (error) {
      console.error("Error creating week:", error);
      return;
    }
    const newWeek = await addNewWeek(days);
    if (newWeek) setWeek(newWeek);
  };

  const addNewWeek = async (days: number) => {
    const quantityWeek = daysOfWeek.slice(0, days);
    const newWeek = quantityWeek.map((day) => ({
      project_id: id,
      day,
      content: "",
    }));
    const { data, error } = await supabase
      .from("week")
      .insert(newWeek)
      .select("id, day, content");
    if (error) {
      console.error("Error adding new week:", error);
      return;
    }
    return data;
  };

  const deleteWeek = async () => {
    try {
      await supabase.from("projects").update({ days_week: 0 }).eq("id", id);

      await supabase.from("week").delete().eq("project_id", id);
    } catch (error) {}
  };

  const saveWeek = async () => {
    try {
      await Promise.all(
        week.map((item) =>
          supabase
            .from("week")
            .update({ content: item.content })
            .eq("id", item.id)
        )
      );
      notify();
    } catch (error) {
      console.error("Error saving week:", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWeek({ ...week, [name]: value });
  };

  useEffect(() => {
    if (id) {
      const getWeek = async () => {
        const { data, error } = await supabase
          .from("week")
          .select("id, day, content")
          .eq("project_id", id);
        if (error) {
          console.log("Error fetching week", error);
        }
        setWeek(data ? data : []);
      };
      // getWeek()
    }
  }, [id]);

  return {
    createWeek,
    deleteWeek,
    saveWeek,
    handleInputChange,
    week,
  };
};
