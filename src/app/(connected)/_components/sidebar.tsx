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
  FaList,
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
      title: 'Scolarité',
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
          title: "Filières",
          path: '/admin/divisions',
          icon: <FaChartPie className="mr-3" size={16} />
        },
        {
          title: 'Matières',
          path: '/admin/subjects',
          icon: <FaBook className="mr-3" size={16} />
        },
        {
          title: 'Niveaux scolaires',
          path: '/admin/grades',
          icon: <FaStairs className="mr-3" size={16} />
        },
        {
          title: 'Thèmes',
          path: '/admin/topics',
          icon: <FaList className="mr-3" size={16} />
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
    <div className="h-full w-64 sticky font-medium text-sm text-textlight p-4 mb-1 overflow-hidden">
      <div className="h-screen overflow-y-auto">
        <ul>
          {menuItems.map((cat) => (
            <li key={cat.title}>
              <div className="pt-1 pb-1 uppercase">{cat.title}</div>
              <ul className="border-l border-slate-300 dark:border-slate-800">
                {cat.list.map((item, index, array) => (
                  <Link
                    href={item.path}
                    key={item.title}
                  >
                    <li
                      className={cn(
                        "px-2 py-1 my-2 flex items-center border-l -ml-px border-transparent transition no-underline hover:no-underline hover:border-slate-500 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300",
                        isActivePath(item.path) && "text-primary dark:text-primary border-l hover:text-primary dark:hover:text-primary border-primary hover:border-primary dark:hover:border-primary"
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
