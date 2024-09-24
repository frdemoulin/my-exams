"use client";

import Link from "next/link";
import {
  FaArrowsTurnToDots,
  FaBarsProgress,
  FaBook,
  FaChartPie,
  FaCity,
  FaFileAudio,
  FaGears,
  FaHouse,
  FaRightToBracket,
  FaSliders,
  FaStairs,
  FaUsers,
  FaVolumeLow
} from "react-icons/fa6";

import { cn } from "@/lib/utils";
import { useActivePath } from "@/hooks/use-active-path";

export const Sidebar = () => {
  const isActivePath = useActivePath();

  const menuItems = [
    {
      title: 'Examens',
      list: [
        {
          title: "Centres d'examens",
          path: '/admin/examination-centers',
          icon: <FaCity className="mr-3" size={16} />
        },
        {
          title: 'Diplômes',
          path: '/admin/diplomas',
          icon: <FaBook className="mr-3" size={16} />
        },
        {
          title: 'Niveaux scolaires',
          path: '/admin/grades',
          icon: <FaStairs className="mr-3" size={16} />
        },
        {
          title: "Filières",
          path: '/admin/divisions',
          icon: <FaChartPie className="mr-3" size={16} />
        },
      ]
    },
    {
      title: 'Paramétrage',
      list: [
        {
          title: 'Accordages',
          path: '/tunings',
          icon: <FaSliders className="mr-3" size={16} />
        },
      ]
    },
    {
      title: 'Reprises',
      list: [
        {
          title: 'Blocs',
          path: '/blocks',
          icon: <FaBarsProgress className="mr-3" size={16} />
        },
        {
          title: 'Fichiers audio',
          path: '/audio-files',
          icon: <FaFileAudio className="mr-3" size={16} />
        },
        {
          title: 'Intros / outros',
          path: '/intro-outros',
          icon: <FaArrowsTurnToDots className="mr-3" size={16} />
        },
        {
          title: 'Reprises',
          path: '/covers',
          icon: <FaVolumeLow className="mr-3" size={16} />
        },
        {
          title: 'Types de fichier audio',
          path: '/backing-track-kinds',
          icon: <FaGears className="mr-3" size={16} />
        },
      ]
    },
    {
      title: 'Utilisateurs',
      list: [
        {
          title: 'Journal de connexion',
          path: '/admin/log-users',
          icon: <FaRightToBracket className="mr-3" size={16} />
        },
        {
          title: 'Utilisateurs',
          path: '/admin/users',
          icon: <FaUsers className="mr-3" size={16} />
        },
      ]
    }
  ];

  return (
    <div className="h-full w-64 sticky bg-slate-50 font-medium text-sm text-textlight p-4 mb-1 overflow-hidden">
      <div className="py-2 h-screen overflow-y-auto">
        <ul>
          <Link
            href="/"
          >
            <li
              className={cn(
                "px-2 py-1 my-2 flex items-center transition no-underline hover:no-underline border-l-2 border-slate-50 hover:border-l-2 hover:border-blue-700",
                isActivePath("/") && "font-bold text-blue-700 border-l-2 border-blue-700"
              )}
              key="home"
            >
              <FaHouse
                className="mr-3"
                size={16}
              />
              Accueil
            </li>
          </Link>
          {menuItems.map((cat) => (
            <li className="pt-2" key={cat.title}>
              <div className="pt-1 pb-1 uppercase">{cat.title}</div>
              <ul>
                {cat.list.map((item, index, array) => (
                  <Link
                    href={item.path}
                    key={item.title}
                  >
                    <li
                      className={cn(
                        "px-2 py-1 my-2 flex items-center text-slate-500 border-slate-50 border-l-2 hover:border-l-2 hover:text-black transition no-underline hover:no-underline hover:border-blue-700",
                        isActivePath(item.path) && "font-bold text-blue-700 border-l-2 border-blue-700"
                      )}
                      key={item.title}
                    >
                      {item.icon}

                      {item.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
