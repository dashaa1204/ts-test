type Content = { name: string; price: number; isVerified: boolean };
type Menu = { title: string; buttonText: string; content: Content[] };

export default function SideMenu({ menu }: { menu: Menu }) {
  return (
    <div className="flex">
      <div className="flex-col w-[30%] border bg-slate-500">
        <button>{menu.buttonText}</button>
      </div>
    </div>
  );
}
