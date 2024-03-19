type Content = { name: string; price: number; isVerified: boolean };
type Menu = {
  id: number;
  title: string;
  buttonText: string;
  content: Content[];
};

export default function Article({ data }: { data: Menu }) {
  return (
    <div className="flex flex-col max-w-[1200px] gap-10">
      <h1 className="text-xl font-bold">{data.title}</h1>
      <div className="flex gap-10">
        {data.content.map((e, key) => {
          return (
            <div
              className="flex flex-col gap-5 justify-center items-center"
              key={key}
            >
              <p>{e.name}</p>
              <p>{e.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
