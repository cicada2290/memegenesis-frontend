import { title, subtitle } from '@/components/primitives'
import DefaultLayout from '@/layouts/default'
import { Accordion, AccordionItem } from "@nextui-org/react"

export default function IndexPage() {
  return (
    <>
      <DefaultLayout>
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="inline-block max-w-lg text-center justify-center">
            <h1 className={title()}>Meme&nbsp;</h1>
            <h1 className={title({ color: 'violet' })}>Genesis&nbsp;</h1>
            <br />
            <h4 className={subtitle({ class: 'mt-4' })}>
              Beautiful, fast and modern React UI library.
            </h4>
          </div>
          <div className="w-96">
            <Accordion variant="shadow">
              <AccordionItem key="1" aria-label="Accordion 1" title="Day1" subtitle="Create wallet">
                <p>Day1 content</p>
              </AccordionItem>
              <AccordionItem key="2" aria-label="Accordion 2" title="Day2" subtitle="Enable rippling">
                <p>Day2 content</p>
              </AccordionItem>
              <AccordionItem key="3" aria-label="Accordion 3" title="Day3" subtitle="Mint memecoin">
                <p>Day3 content</p>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </DefaultLayout>
    </>
  )
}
