import Footer from "src/components/Layout/Footer";
import Header from "src/components/Layout/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-white min-h-screen">
      <Header/>
      <body className="prose prose-sm md:prose-md lg:prose-lg text-blue-500 bg-white lg:mx-auto">{children}</body>
      <Footer/>
    </div>
  )
}
