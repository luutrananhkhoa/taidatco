import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./../globals.css";
import 'tailwindcss/tailwind.css'

const roboto = Roboto({ weight: ["500"], subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "Phù Điêu Bê Tông Trang Trí Nghệ Thuật – Sáng Tạo Và Độc Đáo",
  description: "Mô tả sự độc đáo và tính nghệ thuật của các sản phẩm, đồng thời nhấn mạnh vào khía cạnh sáng tạo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
