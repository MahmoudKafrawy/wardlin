export function Footer() {
  return (
    <footer className=" p-4 border-t h-52 bg-[#e3e6f2]">
      <div className="max-w-6xl mx-auto h-full">
        <div className="flex flex-col h-full">
          <div className="flex-1 flex justify-between items-start">
            <div>
              <p>Links</p>
              <ul>
                {[1, 2, 3, 4].map((_, index) => (
                  <li className="hover:underline cursor-pointer" key={index}>
                    Link {index + 1}
                  </li>
                ))}
              </ul>
            </div>
            <img src="wardlin_logo.jpg" className="w-20 object-contain" />
          </div>
          <div className="flex justify-center">
            <p className="text-secondary h-4">All right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
