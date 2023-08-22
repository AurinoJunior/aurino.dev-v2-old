import { remark } from 'remark'
import html from 'remark-html'

export const customRemarkHTML = async (bodyContent: string) => {
  const processedContent = await remark().use(html).process(bodyContent)
  return processedContent.toString()
}
