import {
    AccordionContent,
    Accordion,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQs } from "@/lib/consts"


const FAQ = () => {
    return (
        <section id="faq" className="w-full md:w-3/4 mx-auto pt-5 flex flex-col gap-8 px-4">

            <div className="w-full md:w-fit mx-auto">
                <h2 className="text-2xl font-bold md:w-fit mx-auto">Do you any questions ?</h2>
                <h3 className="text-xl font-medium">Below you will find the most common questions you may have on blogzz</h3>
            </div>

            <Accordion type="multiple" defaultValue={[FAQs[0].question]} className="">
                {FAQs.map((faq) => (
                    <AccordionItem value={faq.question} key={faq.id}>
                    <AccordionTrigger className="text-xl font-bold">{faq.question}</AccordionTrigger>
                    <AccordionContent className=" text-lg ">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>

        </section>
    )
}

export default FAQ