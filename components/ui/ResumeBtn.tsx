import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const ResumeBtn = ({
  title,
  icon,
}: {
  title?: string;
  icon: React.ReactNode;
}) => {
  return (
    <div>
      <button className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-white-100 bg-[linear-gradient(110deg,#000103,5%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-normal text-white-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 outline-none text-[15px]">
        {title === "RESUME" ? (
          <>
            {title}
            {icon}
          </>
        ) : (
          title
        )}
      </button>
    </div>
  );
};

export default ResumeBtn;
