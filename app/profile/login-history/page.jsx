"use client";
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import { Box, TablePagination, Typography } from "@mui/material";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

const LoginHistoryPage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
      const response = await axios.get(`${Base_URL}/v1/account/login-history`, {
        headers: {
          "x-api-key": X_API_Key,
          Authorization: `Bearer ${loginResponse._token}`,
        },
      });
      setData(response.data.history);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box
      className="container mx-auto"
      sx={{ bgcolor: "white", padding: "15px", overflowX: "auto" }}
    >
      <Typography variant="h4" mb={2} fontWeight={600}>
        Login History
      </Typography>
      <hr style={{ marginBottom: "10px" }} />
      {(rowsPerPage > 0
        ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : data
      ).map((item, index) => (
        <div key={index} className="w-full">
          <div className="md:flex md:justify-between md:items-center w-full mb-2 p-4 bg-gray-50 rounded">
            <div className="flex items-center">
              <span className="inline-flex w-10 h-12 mr-2 justify-center items-center bg-purple-50 rounded">
                <svg
                  width="20"
                  height="24"
                  viewbox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12H5C4.73478 12 4.48043 12.1054 4.29289 12.2929C4.10536 12.4804 4 12.7348 4 13C4 13.2652 4.10536 13.5196 4.29289 13.7071C4.48043 13.8946 4.73478 14 5 14H9C9.26522 14 9.51957 13.8946 9.70711 13.7071C9.89464 13.5196 10 13.2652 10 13C10 12.7348 9.89464 12.4804 9.70711 12.2929C9.51957 12.1054 9.26522 12 9 12ZM13 2H11.82C11.6137 1.41645 11.2319 0.910998 10.7271 0.552938C10.2222 0.194879 9.61894 0.00173951 9 0H7C6.38106 0.00173951 5.7778 0.194879 5.27293 0.552938C4.76807 0.910998 4.38631 1.41645 4.18 2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V5C16 4.20435 15.6839 3.44129 15.1213 2.87868C14.5587 2.31607 13.7956 2 13 2ZM6 3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2H9C9.26522 2 9.51957 2.10536 9.70711 2.29289C9.89464 2.48043 10 2.73478 10 3V4H6V3ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H4V5C4 5.26522 4.10536 5.51957 4.29289 5.70711C4.48043 5.89464 4.73478 6 5 6H11C11.2652 6 11.5196 5.89464 11.7071 5.70711C11.8946 5.51957 12 5.26522 12 5V4H13C13.2652 4 13.5196 4.10536 13.7071 4.29289C13.8946 4.48043 14 4.73478 14 5V17ZM11 8H5C4.73478 8 4.48043 8.10536 4.29289 8.29289C4.10536 8.48043 4 8.73478 4 9C4 9.26522 4.10536 9.51957 4.29289 9.70711C4.48043 9.89464 4.73478 10 5 10H11C11.2652 10 11.5196 9.89464 11.7071 9.70711C11.8946 9.51957 12 9.26522 12 9C12 8.73478 11.8946 8.48043 11.7071 8.29289C11.5196 8.10536 11.2652 8 11 8Z"
                    fill="#707087"
                  ></path>
                </svg>
              </span>

              <span className="md:font-medium text-blue-500 hover:text-blue-600 hover:underline">
                <span
                  style={{
                    fontSize: "16px",
                    whiteSpace: "normal",
                    overflowWrap: "break-word",
                  }}
                >
                  {item.ip}
                </span>
              </span>
            </div>
            <div className="flex md:items-center justify-end gap-2">
              <span className="text-sm text-nowrap mr-3 py-1 px-2 bg-indigo-50 text-indigo-500 rounded-full">
                {moment.utc(item.date).format("MMM DD yyyy : hh:mm A")}
              </span>
            </div>
          </div>
        </div>
      ))}
      <TablePagination
        sx={{
          bgcolor: "white",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          border: "0px",
          mb: "-10px",
        }}
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
        colSpan={12}
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        fullWidth
      />
    </Box>
  );
};

export default LoginHistoryPage;
