import AddIcon from "@mui/icons-material/Add";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Image from "next/image";
import { useState } from "react";
import { StarPurple, StarWhite } from "../general/Stars";

const FAQs = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const questions = [
    {
      question: "Can I work on a project I started before the hackathon?",
      answer:
        "Lorem ipsum dolor rem, ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatum perferendis eligendi molestias blanditiis dolor magnam dolorum alias quo sapiente modi, saepe voluptates su",
    },
    {
      question: "What happens if I need help during the hackathon?",
      answer:
        "Lorem ipsum dolor rem, ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatum perferendis eligendi molestias blanditiis dolor magnam dolorum alias quo sapiente modi, saepe voluptates su",
    },
    {
      question: "What happens if I don't have an idea for a project?",
      answer:
        "Lorem ipsum dolor rem, ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatum perferendis eligendi molestias blanditiis dolor magnam dolorum alias quo sapiente modi, saepe voluptates su",
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer:
        "Lorem ipsum dolor rem, ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatum perferendis eligendi molestias blanditiis dolor magnam dolorum alias quo sapiente modi, saepe voluptates su",
    },
    {
      question: "What happens after the hackathon ends",
      answer:
        "Lorem ipsum dolor rem, ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatum perferendis eligendi molestias blanditiis dolor magnam dolorum alias quo sapiente modi, saepe voluptates su",
    },
  ];

  return (
    <div id="FAQs" className="border-t border-b border-gray-700">
      <div className="universal_x grid sm:grid-cols-2 gap-10 items-center py-10 md:py-20">
        <section className="relative">
          <StarPurple positions="-left-10 -top-16 w-6" />

          <h2 className="second_font text-center sm:text-left font-bold text-2xl md:text-4xl">
            Frequently Asked
            <span className="block text-primaryPurple">Question</span>{" "}
          </h2>

          <p className="mt-3 text-center md:text-left">
            We got answers to the questions that you might want to ask about
            <span className="font-semibold"> getlinked Hackathon 1.0</span>
          </p>

          <div className="mt-7 md:mt-14 space- y-3 md:space-y-6">
            {questions.map((question, index) => (
              <Accordion
                data-aos="fade-up"
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                className="!bg-transparent !shadow-none border-b border-primaryPurple !rounded-none"
              >
                <AccordionSummary
                  expandIcon={<AddIcon className="text-primaryPurple" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="!p-0"
                >
                  <h4 className="text-white">{question.question}</h4>
                </AccordionSummary>
                <AccordionDetails className="!p-0">
                  <p className="text-white pb-2">{question.answer}</p>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </section>

        <section
          data-aos="fade-in"
          className="relative justify-self-center md:justify-self-auto"
        >
          <StarPurple positions="left-1/2 bottom-50" />
          <StarWhite positions="right-60 bottom-0" />

          <Image
            src="/img/question_man.png"
            alt="curious man"
            width={710}
            height={622}
            className="w-[200%]"
          />
        </section>
      </div>
    </div>
  );
};

export default FAQs;
