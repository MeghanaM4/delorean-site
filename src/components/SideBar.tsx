const SideBar = () => {
  return (
    <aside className="bg-slate-100 space-y-2 max-w-prose p-4 h-screen border-r-4 border-slate-500 border-dashed">
      <nav>
        <ul>
          {/* <li>
            <a href="/note" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
              Troubleshooting
            </a>
          </li> */}
          <li>
            <a href="/pcb" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
              What's a PCB?
            </a>
          </li>
          <li>
            <a href="/parts" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
              Your Parts
            </a>
          </li>
          <li>
            <a href="/guide" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
              Building Your Nixie Clock
            </a>
          </li>

          <li>
            <a href="/setup" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
              KiCAD + Wakatime Setup
            </a>
          </li>

          <li>
            <a href="/crashcourse" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
              KiCAD Crash Course
            </a>
          </li>

          <li>
            <a href="/submitting" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
              Submitting your project
            </a>
          </li>          

          <li>
            <a href="/faq" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-slate-900 hover:text-cyan-800">
              FAQ
            </a>
          </li>

          <li>
            <a href="" className="block py-2 px-4 rounded mt-2 hover:bg-slate-200 transition-all text-gray-400 hover:text-red-500">
              Highway Invite
            </a>
          </li>

        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
