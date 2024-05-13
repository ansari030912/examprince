import "./globals.css";

export const metadata = {
  title: "My Exams Courses",
  description: "get your certified exams...",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
