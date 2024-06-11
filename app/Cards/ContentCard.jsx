/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

export default function ContentCard({ data, referral }) {
  const [expanded, setExpanded] = useState(null);
  const [value, setValue] = useState(
    // data?.exam_article ? "article" :
    "faqs"
  );
  const [decodedHtml, setDecodedHtml] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedReferral = localStorage.getItem("referral");
      if (!storedReferral) {
        localStorage.setItem("referral", referral);
      }
    }
  }, [referral]);

  useEffect(() => {
    const decodedContent = decodeHtmlEntities(data?.exam_article);
    setDecodedHtml(decodedContent);
  }, [data?.exam_article]);

  const decodeHtmlEntities = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };
  useEffect(() => {
    if (
      data?.is_disabled ||
      data?.cert_title === "null" ||
      data?.cert_id === 0
    ) {
      router.push("/");
    }
  }, [data]);
  const parseHtmlWithStyles = (html) => {
    if (
      typeof window !== "undefined" &&
      typeof window.DOMParser !== "undefined"
    ) {
      const parser = new window.DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const elements = doc.body.children;

      for (let i = 0; i < elements.length; i++) {
        const tagName = elements[i].tagName.toLowerCase();
        if (tagName in styles) {
          const elementStyles = styles[tagName];
          const element = elements[i];
          for (const [key, value] of Object.entries(elementStyles)) {
            element.style[key] = value;
          }
        }
      }

      const strongs = doc.querySelectorAll("strong");
      strongs.forEach((strong) => {
        const br = document.createElement("br");
        strong.insertAdjacentElement("beforebegin", br);
      });

      const paragraphs = doc.querySelectorAll("p");
      paragraphs.forEach((paragraph) => {
        const br = document.createElement("br");
        paragraph.insertAdjacentElement("afterend", br);
      });
      return doc.body.innerHTML;
    } else {
      return html;
    }
  };

  const styles = {
    h1: {
      fontSize: "2.2rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "1.6rem",
      fontWeight: "bold",
    },
    h5: {
      fontSize: "1.4rem",
      fontWeight: "bold",
    },
    h6: {
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    p: {
      fontSize: "1.2rem",
    },
  };

  const handlePageChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <>
      <Card
        sx={{
          mt: "10px",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
        }}
      >
        <Tabs value={value} onChange={handlePageChange}>
          {/* {data?.exam_article && (
            <Tab
              value="article"
              label="Article"
              className="text-gray-600 text-md font-bold"
            />
          )} */}
          {data?.exam_faqs && (
            <Tab
              value="faqs"
              label="Faqs"
              className="text-gray-600 text-md font-bold"
            />
          )}
          {data?.exam_certs && (
            <Tab
              value="certifications"
              label="Certification"
              className="text-gray-600 text-md font-bold"
            />
          )}
        </Tabs>
      </Card>
      {/* <div>
        {value === "article" && (
          <Card
            sx={{
              padding: "25px",
            }}
          >
            <div
              style={{ padding: "10px", textAlign: "justify" }}
              dangerouslySetInnerHTML={{
                __html: parseHtmlWithStyles(decodedHtml),
              }}
            />
          </Card>
        )}
      </div> */}
      {value === "faqs" && (
        <Card
          className="text-white "
          sx={{
            padding: "15px",
            bgcolor: "#345277",
          }}
        >
          <Typography
            variant="h2"
            fontWeight={600}
            fontSize={32}
            padding={1}
            color={"white"}
          >
            Frequently Asked Questions
          </Typography>
          {data?.exam_faqs?.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{ marginBottom: "10px", border: "1px solid white" }} // Use sx prop for inline styling
            >
              <AccordionSummary
                sx={{ bgcolor: "white" }}
                aria-controls={`panel${index}d-content`}
                id={`panel${index}d-header`}
              >
                <div>
                  <svg
                    color="white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </div>
                <Typography
                  sx={{ textAlign: "justify" }}
                  variant="h3"
                  fontSize={20}
                >
                  {faq.faq_q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ bgcolor: "#111827", color: "white" }}>
                <Typography sx={{ textAlign: "justify" }}>
                  {faq.faq_a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Card>
      )}
      {value === "certifications" && (
        <Card sx={{ bgcolor: "#345277", color: "white", padding: "10px" }}>
          <Typography variant="h5" fontWeight={600} padding={1} color={"white"}>
            {data?.exam_vendor_title} Certifications
          </Typography>
          <Typography>
            {Array.isArray(data.exam_certs) &&
              data?.exam_certs?.map((item) => (
                <Link
                  href={`/vendor-exam-questions/${data?.exam_vendor_perma}/${item?.cert_perma}`}
                  key={item.cert_id}
                >
                  <Card
                    className="hover:bg-sky-900 hover:underline"
                    sx={{
                      mt: "4px",
                      bgcolor: "#345277",
                      color: "white",
                      padding: "10px",
                      border: "1px solid white",
                      borderRadius: "0px",
                    }}
                  >
                    {item.cert_title}
                  </Card>
                </Link>
              ))}
          </Typography>
        </Card>
      )}
    </>
  );
}
