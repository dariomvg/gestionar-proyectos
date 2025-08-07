"use client";
import { useAuth } from "@/contexts/ContextAuth";
import { daysOfWeek } from "@/libs/dataPageWeek";
import { notify } from "@/libs/toast";
import { supabase } from "@/supabase/supabase";
import { CustomWeekTypes } from "@/types/types.week";
import { useEffect, useState } from "react";

export const useCustomWeek = (id: number): CustomWeekTypes => {
  const [week, setWeek] = useState<
    { id: number; day: string; content: string }[]
  >([]);

  const { user } = useAuth();

  const createWeek = async (days: number) => {
    const quantityWeek = daysOfWeek.slice(0, days);
    const newWeek = quantityWeek.map((day) => ({
      project_id: id,
      day,
      content: "",
      user_id: user.user_id,
    }));
    const { data, error } = await supabase
      .from("week")
      .insert(newWeek)
      .select("id, day, content");
    if (error) {
      console.error("Error adding new week:", error);
      return;
    }
    if (data.length > 0) {
      console.log("New week added:", data);
      setWeek(data);
    }
  };

  const deleteWeek = async () => {
    const { error } = await supabase.from("week").delete().eq("project_id", id);

    if (error) {
      console.log("Error: no se pudo eliminar la semana", error);
      return;
    }
    setWeek([]);
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

  const handleInputChange = (value: string, id: number) => {
    setWeek(
      week.map((item) => (item.id === id ? { ...item, content: value } : item))
    );
  };

  useEffect(() => {
    if (id !== null) {
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
      getWeek();
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
