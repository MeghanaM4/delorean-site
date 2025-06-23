import OrpheusFlag from "/OrpheusFlag.svg";

const DocPage = ({ Content, SideBar }: { Content: any; SideBar: any }) => {
  return (
    <div className="bg-[#ffe0e3] flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-athenaDark py-1 text-white fixed top-0 z-10 w-full border-b-4 border-athenaYellow">
        <div>
          <h1 className="text-2xl font-bold font-mono flex justify-between ml-4">
            <a
              href="/"
              className="text-black bg-athenaYellow px-2 py-1 my-2"
            >
              delorean
            </a>

            <a href="https://hackclub.com" target="_blank">
              <img src={OrpheusFlag} className="max-w-12 sm:max-w-24 hidden sm:right-20 sm:block absolute"
              ></img>
            </a>
            
            <a href="https://github.com/meghanam4/delorean" target="_blank">
              <img
                src="https://www.pngkey.com/png/full/178-1787366_coming-soon-github-white-icon-png.png"
                className="w-8 h-8 fill-current transition-all text-slate-950 hover:text-cyan-800 inline-block my-2 mr-6"
              ></img>
            </a>

          </h1>
        </div>
      </header>

      <div className="flex flex-1 pt-16">
        <aside className="hidden sm:block w-48 fixed top-16 h-full">
          <SideBar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 prose-ul:list-disc prose-ol:list-decimal prose-sm prose-headings:my-2 prose-headings:font-semibold font-sans max-w-4xl mx-auto sm:ml-48">
          <Content />
        </main>
      </div>
    </div>
  );
};

export default DocPage;
