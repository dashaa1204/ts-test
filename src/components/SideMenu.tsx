type Content = { name: string; price: number; isVerified: boolean };
type Menu = {
  id: number;
  title: string;
  buttonText: string;
  content: Content[];
};

export default function SideMenu({
  menu,
  changeArticle,
}: {
  menu: Menu;
  changeArticle: (data: number) => void;
}) {
  return (
    <div className="flex minw-[16rem]">
      <ul className="flex-col border bg-slate-500 max-h-[100vh] w-80">
        <li className="min-h-[2.5rem] flex justify-center">
          <button onClick={() => changeArticle(menu.id)}>
            {menu.buttonText}
          </button>
        </li>
      </ul>
    </div>
  );
}
