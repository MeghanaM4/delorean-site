const SideBar = () => {
  return (
    <aside className="bg-athenaReg space-y-2 max-w-prose p-4 h-screen border-r-4 border-athenaYellow">
      <nav>
        <ul>
          {/* <li>
            <a href="/note" className="block py-2 px-4 rounded hover:bg-slate-200 transition-all text-white hover:text-cyan-800">
              Troubleshooting
            </a>
          </li> */}
          <li>
            <a href="/pcb" className="block py-2 px-4 rounded-xl hover:bg-green-200 transition-all text-white hover:text-slate-800">
              What's a PCB?
            </a>
          </li>
          <li>
            <a href="/parts" className="block py-2 px-4 rounded-xl hover:bg-violet-200 transition-all text-white hover:text-slate-800">
              Your Parts
            </a>
          </li>
          <li>
            <a href="/guide" className="block py-2 px-4 rounded-xl hover:bg-yellow-200 transition-all text-white hover:text-slate-800">
              Building Your Nixie Clock
            </a>
          </li>

          <li>
            <a href="/setup" className="block py-2 px-4 rounded-xl hover:bg-blue-200 transition-all text-white hover:text-slate-800">
              KiCAD + Wakatime Setup
            </a>
          </li>

          <li>
            <a href="/crashcourse" className="block py-2 px-4 rounded-xl hover:bg-blue-200 transition-all text-white hover:text-slate-800">
              KiCAD Crash Course
            </a>
          </li>

          <li>
            <a href="/submitting" className="block py-2 px-4 rounded-xl hover:bg-purple-200 transition-all text-white hover:text-slate-800">
              Submitting your project
            </a>
          </li>          

          <li>
            <a href="/faq" className="block py-2 px-4 rounded-xl hover:bg-orange-200 transition-all text-white hover:text-slate-800">
              FAQ
            </a>
          </li>

          <li>
            <a href="/resources" className="block py-2 px-4 rounded-xl hover:bg-amber-300 transition-all text-white">
              Resources
            </a>
          </li>

          {/* <li>
            <a href="" className="block py-2 px-4 rounded-xl hover:bg-slate-200 transition-all text-gray-400 hover:text-red-500">
              Highway Invite
            </a>
          </li> */}

        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
