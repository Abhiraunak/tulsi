import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { JSX } from "react";

interface FaqProps {
    ques: string;
    ans: string | JSX.Element;
}

export default function Faq({ ques, ans }: FaqProps) {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>{ques}</AccordionTrigger>
                    <AccordionContent>
                        {typeof ans === "string" ? (
                            <p>{ans}</p>
                        ) : (
                            ans
                        )}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
