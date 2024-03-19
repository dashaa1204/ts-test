import SideMenu from "@/components/SideMenu";
import Article from "@/components/Article";
import { useState } from "react";

export default function Home() {
  const [article, setArticle] = useState<number>(0);
  let sideMenus = [
    {
      id: 0,
      title: "TypeScript for the New Programmer",
      buttonText: "TypeScript for the New Programmer",
      content: [
        {
          name: "What is JavaScript? A Brief History",
          price: 3123123,
          isVerified: false,
        },
        {
          name: "TypeScript: A Static Type Checker",
          price: 321312,
          isVerified: false,
        },
        {
          name: "Learning JavaScript and TypeScript",
          price: 222222,
          isVerified: false,
        },
      ],
    },
    {
      id: 1,
      title: "TS for JS programmer",
      buttonText: "TS for JS programmer",
      content: [
        { name: "Types by Inference", price: 4444, isVerified: false },
        { name: "Defining Types", price: 55555, isVerified: false },
        { name: "Composing Types", price: 6666, isVerified: false },
      ],
    },
    {
      id: 2,
      title: "TS for JAVA/C# programmer",
      buttonText: "TS for JAVA/C# programmer",
      content: [
        { name: "Co-learning JavaScript", price: 3213121, isVerified: false },
        { name: "Rethinking the Class", price: 31231231, isVerified: false },
        { name: "OOP in TypeScript", price: 3213123, isVerified: false },
      ],
    },
  ];

  return (
    <div className="flex">
      <div className="min-w-[400px]">
        {sideMenus.map((menu, key) => (
          <SideMenu menu={menu} changeArticle={setArticle} key={key} />
        ))}
      </div>
      <div className="flex flex-col">
        <Article data={sideMenus[article]} />
      </div>
    </div>
  );
}
