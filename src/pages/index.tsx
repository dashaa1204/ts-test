import SideMenu from "@/components/SideMenu";

export default function Home() {
  let sideMenus = [
    {
      title: "string",
      buttonText: "string",
      content: [
        { name: "string", price: 123, isVerified: false },
        { name: "string", price: 123, isVerified: false },
        { name: "string", price: 123, isVerified: false },
      ],
    },
    {
      title: "string",
      buttonText: "string",
      content: [
        { name: "string", price: 123, isVerified: false },
        { name: "string", price: 123, isVerified: false },
        { name: "string", price: 123, isVerified: false },
      ],
    },
    {
      title: "string",
      buttonText: "string",
      content: [
        { name: "string", price: 123, isVerified: false },
        { name: "string", price: 123, isVerified: false },
        { name: "string", price: 123, isVerified: false },
      ],
    },
  ];

  return (
    <div>
      {sideMenus.map((menu) => (
        <SideMenu menu={menu} />
      ))}
    </div>
  );
}
