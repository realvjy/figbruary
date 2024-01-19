import PromptsPage from "@/components/prompts";
import { getCurrentDate } from "@/lib/utils";
import { redirect } from "next/navigation";

export default function Page() {
  const date = getCurrentDate();
  if (!(date.month == 2)){
    redirect("/")
  }
  return <PromptsPage />;
}
