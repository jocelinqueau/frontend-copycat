const Logo = () => {
  return (
    <div className="h-[32px] w-[32px] relative group">
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        className="fill-current absolute top-4 left-[10px] group-hover:translate-x-1 transition-transform duration-500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.92 0A4.916 4.916 0 000 4.913a4.916 4.916 0 004.92 4.913 4.916 4.916 0 004.919-4.913A4.916 4.916 0 004.919 0z"></path>
      </svg>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        className="fill-current absolute top-[2px] left-0 group-hover:rotate-180 transition-transform duration-500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2.107 0L0 11.93l11.4-4.143L2.108 0z"></path>
      </svg>
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        className="fill-current absolute right-1 top-[2px] group-hover:rotate-180 transition-transform duration-500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2.547 0L0 9.49l9.504 2.543 2.547-9.49L2.547 0z"></path>
      </svg>
    </div>
  );
};

export default Logo;
