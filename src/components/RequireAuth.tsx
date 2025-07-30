"use client"; 
import { useAuth } from "@/contexts/ContextAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user?.email) {
      router.push("/");
    }
  }, [user, router]);

  return <>{user?.email ? children : null}</>;
}