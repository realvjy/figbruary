import PromptsPage from "@/components/prompts";
import { getCurrentDate } from "@/lib/utils";
import { redirect } from "next/navigation";

export default function Page() {
  return <PromptsPage />;
}
