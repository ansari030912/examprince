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
import React, { useEffect, useState } from "react";

export default function CertificationContentCard({ data }) {
  // State for storing expanded accordion panel
  const [expanded, setExpanded] = useState(null);
  // State for managing tab value
  const [value, setValue] = useState(data.exam_article ? "article" : "faqs");
  // State for storing decoded HTML content
  const [decodedHtml, setDecodedHtml] = useState("");

  // Effect to decode HTML entities when data changes
  useEffect(() => {
    const decodedContent = decodeHtmlEntities(data.exam_article);
    setDecodedHtml(decodedContent);
  }, [data.exam_article]);

  // Function to decode HTML entities
  const decodeHtmlEntities = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };
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

      // Add line breaks before <strong> elements
      const strongs = doc.querySelectorAll("strong");
      strongs.forEach((strong) => {
        const br = document.createElement("br");
        strong.insertAdjacentElement("beforebegin", br);
      });

      // Add line breaks after <p> elements
      const paragraphs = doc.querySelectorAll("p");
      paragraphs.forEach((paragraph) => {
        const br = document.createElement("br");
        paragraph.insertAdjacentElement("afterend", br);
      });

      // Return the modified HTML content
      return doc.body.innerHTML;
    } else {
      // Return the original HTML content if DOMParser is not available
      return html;
    }
  };

  // CSS styles to apply to different HTML elements
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

  // Event handler for tab change
  const handlePageChange = (event, newValue) => {
    setValue(newValue);
  };

  // Event handler for accordion panel change
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
          {data.exam_article && (
            <Tab
              value="article"
              label="Article"
              className="text-gray-600 text-md font-bold"
            />
          )}
          {data.exam_faqs && (
            <Tab
              value="faqs"
              label="Faqs"
              className="text-gray-600 text-md font-bold"
            />
          )}
          {data.exam_certs && (
            <Tab
              value="certifications"
              label="Certification"
              className="text-gray-600 text-md font-bold"
            />
          )}
        </Tabs>
      </Card>
      <div>
        {value === "article" && (
          <Card
            sx={{
              padding: "15px",
            }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: parseHtmlWithStyles(decodedHtml),
              }}
            />
          </Card>
        )}
      </div>
      {value === "faqs" && (
        <Card
          className="text-white bg-gradient-to-b to-gray-300 from-gray-900"
          sx={{
            padding: "15px",
          }}
        >
          <Typography variant="h5" fontWeight={600} padding={1} color={"white"}>
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
                <Typography>{faq.faq_q}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ bgcolor: "#111827", color: "white" }}>
                <Typography>{faq.faq_a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Card>
      )}
      {value === "certifications" && (
        <Card sx={{ bgcolor: "#111827", color: "white", padding: "10px" }}>
          <Typography variant="h5" fontWeight={600} padding={1} color={"white"}>
            {data.exam_vendor_title} Certifications
          </Typography>
          <Typography>
            {Array.isArray(data.exam_certs) &&
              data?.exam_certs?.map((item) => (
                <Link
                  href={`/certification/${item.cert_perma}`}
                  key={item.cert_id}
                >
                  <Card
                    className="hover:bg-gray-600 hover:underline"
                    sx={{
                      mt: "4px",
                      bgcolor: "#111827",
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
