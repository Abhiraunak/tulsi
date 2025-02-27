import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqProps{
    ques : string;
    ans: string;
}

export default function Faq({ques, ans} : FaqProps) {
    return (
        <div>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>{ques}</AccordionTrigger>
                    <AccordionContent>
                        {ans}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}