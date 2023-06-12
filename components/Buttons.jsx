export const RegularButton = ({ disabled, children, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="px-6 h-fit py-2 transition-all duration-300 disabled:bg-slate-400/75 bg-pink-700 rounded-lg hover:bg-pink-800/70"
    >
      {children}
    </button>
  );
};

export const FullWButton = ({ children, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="w-full py-2 transition-all disabled:bg-slate-400/75 duration-300 bg-pink-600 rounded-md font-medium text-xl hover:bg-pink-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const BurgerButton = ({ onClick, isOpen }) => {
  return (
    <button className="relative group z-20" onClick={onClick}>
      <div
        className={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-sky-500 ring-0 ring-sky-600 hover:ring-8 ${
          isOpen ? "ring-4 ring-opacity-30" : ""
        }  duration-200 shadow-md`}
      >
        <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
          <div
            className={`bg-white h-[2px] w-7 transform transition-all  ${
              isOpen ? "translate-y-6" : ""
            } duration-300 origin-left  delay-100`}
          ></div>
          <div
            className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${
              isOpen ? "translate-y-6" : ""
            }  delay-75`}
          ></div>
          <div
            className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
              isOpen ? "translate-y-6" : ""
            }  `}
          ></div>

          <div
            className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${
              isOpen ? "translate-x-0 w-12 " : ""
            } flex w-0 `}
          >
            <div
              className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${
                isOpen ? "rotate-45 " : ""
              } `}
            ></div>
            <div
              className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 ${
                isOpen ? "-rotate-45 " : ""
              } delay-300 `}
            ></div>
          </div>
        </div>
      </div>
    </button>
  );
};
