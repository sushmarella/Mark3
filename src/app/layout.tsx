

//this imports the css stules from the global.css file in the app folder, this is where you define css styles or set up tailwind
import "./globals.css";
//this imports the sidebar page to use, routing through the components folder
import Sidebar from "../components/sidebar";
import SearchBar from "@/components/searchbar";
import Home from "@/components/main";
//this exports the main layout component in app, it takes the prop children, which is immutable from the ReadOnly. R
//React.reactnode is a typescript type that represents valid content that can be rendered in NextJS
//boilerplate code fr
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //specifies the body of the doc, with flex0, so its fixed
    //renders the sidebar component
    //renders the children prop(page.tsx or whichever page you navigate onto)\
    //flex puts everything in a row sidebar is just before the rest, vertical top is default
    <html lang="en">
        <body>{children}</body>
    </html>
  );
}