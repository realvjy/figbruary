import PromptList from '@/components/2023/PromptList'
import { getMetaDataForPage } from "@/lib/utils";



export const metadata = getMetaDataForPage('prompts');

export default function Prompts() {

  return (
    <>
      <PromptList />
    </>
  )
}


