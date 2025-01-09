import PromptsPage from "@/components/2024/prompts";
import { getCurrentDate } from "@/lib/utils";
import { redirect } from "next/navigation";

export default function Page() {
  return <PromptsPage />;
}
