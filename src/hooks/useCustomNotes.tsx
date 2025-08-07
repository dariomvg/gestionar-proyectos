"use client";

import { notify } from "@/libs/toast";
import { supabase } from "@/supabase/supabase";
import { CustomNoteTypes } from "@/types/types.notes";
import { useEffect, useState } from "react";

export const useCustomNotes = (id: number): CustomNoteTypes => {
  const [value, setValue] = useState<string>("");

  const updateNotes = async () => {
    const { data: projects, error } = await supabase
      .from("projects")
      .update({ notes: value })
      .eq("id", id);
    if (error) {
      console.error("Error fetching project:", error);
      return [];
    }
    notify()
  };

  useEffect(() => {
    if (id !== null) {
      const findNotesProject = async () => {
        const { data: projects, error } = await supabase
          .from("projects")
          .select("notes")
          .eq("id", id);
        if (error) {
          console.error("Error fetching project:", error);
          return [];
        }
        setValue(projects[0]?.notes || "");
      };
      findNotesProject()
    }
  }, [id]);

  return { value, setValue, updateNotes };
};
