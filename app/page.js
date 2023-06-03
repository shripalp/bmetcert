export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <h1 className="p-5 text-4xl font-extrabold">Home Page</h1>
        </div>
        <div className="flex flex-col p-5">
          <h2>News</h2>
          <p>Latest News</p>
          <h2 className="mt-5">members list:</h2>
          <a
            className="text-blue-800 font-bold hover:text-xl visited:text-purple-600"
            href="/2023_Members_List.pdf"
            target="_blank"
          >
            Current Members List (2023) (new page)
          </a>
          <a
            className="text-blue-800 font-bold hover:text-xl visited:text-purple-600"
            href="/members"
          >
            Current Members List (2023) (dynamic)
          </a>
        </div>
      </div>
    </main>
  );
}
