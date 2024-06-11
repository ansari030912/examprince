/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Alert, Divider, Snackbar } from "@mui/material";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { X_API_Key } from "../../AllUrls/ApiKey";
import { BaseUrl } from "../../AllUrls/BaseUrl";

const CommentCard = ({ data }) => {
  const router = useRouter();
  const [comments, setComments] = useState({
    total_pages: 0,
    current_page: 0,
    comments: [],
  });
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [commentText, setCommentText] = useState("");
  const [userIP, setUserIP] = useState();
  const [showMore, setShowMore] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${BaseUrl}/v1/exam_comments/${data?.exam_perma}?page=${1}`,
        {
          headers: {
            "x-api-key": X_API_Key,
          },
        }
      );

      setComments({
        total_pages: response.data.total_pages,
        current_page: response.data.current_page,
        comments: response.data.comments,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchUserIP = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/v1/my-ip`, {
          headers: {
            "x-api-key": X_API_Key,
          },
        });
        await setUserIP(response.data);
      } catch (error) {
        console.error("Error fetching user's IP address:", error);
      }
    };

    fetchUserIP();
  }, [data]);

  useEffect(() => {
    if (
      data?.is_disabled ||
      data?.exam_title === "null" ||
      data?.exam_title === 0 ||
      data?.cert_title === "null" ||
      data?.cert_id === 0 ||
      !data?.index_tag
    ) {
      router.push("/");
    } else {
      fetchData();
    }
  }, [data]);

  const handleSubmit = async (event) => {
    setOpen(true);
    event.preventDefault();

    try {
      const response = await axios.post(
        `${BaseUrl}/v1/exam_comment/${data.exam_perma}`,
        {
          name: name,
          email: email,
          comment: commentText,
          ip: userIP,
        },
        {
          headers: {
            "x-api-key": X_API_Key,
          },
        }
      );

      const newComment = response.data;

      setName("");
      setEmail("");
      setCommentText("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const decodeHtmlEntities = (text) => {
    return text
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&nbsp;/g, " ")
      .replace(/&iexcl;/g, "¡")
      .replace(/&cent;/g, "¢")
      .replace(/&pound;/g, "£")
      .replace(/&curren;/g, "¤")
      .replace(/&yen;/g, "¥")
      .replace(/&brvbar;/g, "¦")
      .replace(/&sect;/g, "§")
      .replace(/&uml;/g, "¨")
      .replace(/&copy;/g, "©")
      .replace(/&ordf;/g, "ª")
      .replace(/&laquo;/g, "«")
      .replace(/&not;/g, "¬")
      .replace(/&shy;/g, "­")
      .replace(/&reg;/g, "®")
      .replace(/&macr;/g, "¯")
      .replace(/&deg;/g, "°")
      .replace(/&plusmn;/g, "±")
      .replace(/&sup2;/g, "²")
      .replace(/&sup3;/g, "³")
      .replace(/&acute;/g, "´")
      .replace(/&micro;/g, "µ")
      .replace(/&para;/g, "¶")
      .replace(/&middot;/g, "·")
      .replace(/&cedil;/g, "¸")
      .replace(/&sup1;/g, "¹")
      .replace(/&ordm;/g, "º")
      .replace(/&raquo;/g, "»")
      .replace(/&frac14;/g, "¼")
      .replace(/&frac12;/g, "½")
      .replace(/&frac34;/g, "¾")
      .replace(/&iquest;/g, "¿")
      .replace(/&Agrave;/g, "À")
      .replace(/&Aacute;/g, "Á")
      .replace(/&Acirc;/g, "Â")
      .replace(/&Atilde;/g, "Ã")
      .replace(/&Auml;/g, "Ä")
      .replace(/&Aring;/g, "Å")
      .replace(/&AElig;/g, "Æ")
      .replace(/&Ccedil;/g, "Ç")
      .replace(/&Egrave;/g, "È")
      .replace(/&Eacute;/g, "É")
      .replace(/&Ecirc;/g, "Ê")
      .replace(/&Euml;/g, "Ë")
      .replace(/&Igrave;/g, "Ì")
      .replace(/&Iacute;/g, "Í")
      .replace(/&Icirc;/g, "Î")
      .replace(/&Iuml;/g, "Ï")
      .replace(/&ETH;/g, "Ð")
      .replace(/&Ntilde;/g, "Ñ")
      .replace(/&Ograve;/g, "Ò")
      .replace(/&Oacute;/g, "Ó")
      .replace(/&Ocirc;/g, "Ô")
      .replace(/&Otilde;/g, "Õ")
      .replace(/&Ouml;/g, "Ö")
      .replace(/&times;/g, "×")
      .replace(/&Oslash;/g, "Ø")
      .replace(/&Ugrave;/g, "Ù")
      .replace(/&Uacute;/g, "Ú")
      .replace(/&Ucirc;/g, "Û")
      .replace(/&Uuml;/g, "Ü")
      .replace(/&Yacute;/g, "Ý")
      .replace(/&THORN;/g, "Þ")
      .replace(/&szlig;/g, "ß")
      .replace(/&agrave;/g, "à")
      .replace(/&aacute;/g, "á")
      .replace(/&acirc;/g, "â")
      .replace(/&atilde;/g, "ã")
      .replace(/&auml;/g, "ä")
      .replace(/&aring;/g, "å")
      .replace(/&aelig;/g, "æ")
      .replace(/&ccedil;/g, "ç")
      .replace(/&egrave;/g, "è")
      .replace(/&eacute;/g, "é")
      .replace(/&ecirc;/g, "ê")
      .replace(/&euml;/g, "ë")
      .replace(/&igrave;/g, "ì")
      .replace(/&iacute;/g, "í")
      .replace(/&icirc;/g, "î")
      .replace(/&iuml;/g, "ï")
      .replace(/&eth;/g, "ð")
      .replace(/&ntilde;/g, "ñ")
      .replace(/&ograve;/g, "ò")
      .replace(/&oacute;/g, "ó")
      .replace(/&ocirc;/g, "ô")
      .replace(/&otilde;/g, "õ")
      .replace(/&ouml;/g, "ö")
      .replace(/&divide;/g, "÷")
      .replace(/&oslash;/g, "ø")
      .replace(/&ugrave;/g, "ù")
      .replace(/&uacute;/g, "ú")
      .replace(/&ucirc;/g, "û")
      .replace(/&uuml;/g, "ü")
      .replace(/&yacute;/g, "ý")
      .replace(/&thorn;/g, "þ")
      .replace(/&yuml;/g, "ÿ");
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900 antialiased mt-3">
        <div className="w-full mx-auto px-4">
          <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
            <div className="max-w-2xl mx-auto px-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                  Add Comments
                </h2>
              </div>
              <form onSubmit={handleSubmit} className="mb-6">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block p-3 w-full border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700  dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 p-3 block w-full border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="comment" className="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows="6"
                    className=" p-3 w-full text-sm text-gray-900 border-0 bg-gray-100 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Write a comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-primary-900 hover:bg-gray-800"
                >
                  Post comment
                </button>
              </form>
              <div className="text-white font-bold text-2xl mt-2">
                Recent Comments
              </div>
            </div>
          </section>
          {comments?.comments
            .slice(0, showMore ? comments.comments.length : 3)
            .map((item, index) => {
              const { date, name, country, comment } = item;
              const decodedComment = decodeHtmlEntities(comment);
              return (
                <>
                  <Divider
                    key={`divider-${index}`}
                    sx={{ color: "white", bgcolor: "white" }}
                  />
                  <article
                    key={`article-${index}`}
                    className="p-6 text-base bg-white rounded-lg dark:bg-gray-900"
                  >
                    <footer className="mb-2">
                      <div className="flex justify-between">
                        <p>
                          <p className="text-md text-black dark:text-white font-bold">
                            {name}
                          </p>
                          <p className="text-sm text-black dark:text-white">
                            -- {country}
                          </p>
                        </p>
                        <p className="text-sm text-black dark:text-white">
                          <time pubdate={date}>
                            {moment(date).format("LL")}
                          </time>
                        </p>
                      </div>
                    </footer>
                    <p className=" text-black dark:text-white text-sm">
                      {decodedComment}
                    </p>
                    {country && (
                      <p className="text-sm text-black dark:text-white text-right"></p>
                    )}
                  </article>
                </>
              );
            })}
          {comments.comments.length > 3 && (
            <div className="p-4">
              <button
                onClick={toggleShowMore}
                className="bg-blue-500 hover:bg-blue-700 text-white dark:text-white font-bold py-2 px-4 rounded"
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </section>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Comment added successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default CommentCard;
