"use client";

import Link from "next/link";
import "../globals.css";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "@/hooks/useAuthentication";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "@/atom/authAtom";
import { PiSignOutBold } from "react-icons/pi";
import { useRouter } from "next/navigation";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { logout } = useAuth();
  const accessToken = useRecoilValue(accessTokenState);
  const router = useRouter();
  const configMenu = [
    {
      name: "Account Information",
      link: "/my-profile",
    },
    {
      name: "My orders",
      link: "/my-profile/my-order",
    },
  ];
  return (
    <section className="grid grid-cols-7 px-5 py-7 gap-1 w-screen min-h-[50vh]">
      <nav className="col-span-2 !z-[1]">
        <div>
          <div className="uppercase h-[56px] py-4 px-3 text-base font-semibold text-[#4a4a4a] bg-[#f7f7f7] flex items-center mb-5">
            MY account
          </div>
          <div className="flex flex-col ">
            {configMenu.map((item) => (
              <Link href={item.link} key={item.name}>
                <div className="px-3 py-1 text-sm text-[#000 h-[35px] font-medium">
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
          <div
            className=" cursor-pointer mt-3 px-3 py-1 h-12 border-t flex items-center"
            onClick={() => {
              router.push("/");
              logout(accessToken as string);
            }}
          >
            <PiSignOutBold className="mr-1" size={18} /> Logout
          </div>
        </div>
      </nav>
      <div className="col-span-5 px-4">{children}</div>
    </section>
  );
}
