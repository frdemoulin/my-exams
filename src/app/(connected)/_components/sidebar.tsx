"use client";

import Link from "next/link";
import {
  FaArrowsTurnToDots,
  FaBarsProgress,
  FaCompactDisc,
  FaFileAudio,
  FaGears,
  FaHouse,
  FaMicrophone,
  FaMusic,
  FaRightToBracket,
  FaSliders,
  FaUsers,
  FaVolumeLow
} from "react-icons/fa6";

import { cn } from "@/lib/utils";
import { useActivePath } from "@/hooks/use-active-path";

export const Sidebar = () => {
  const isActivePath = useActivePath();

  const menuItems = [
    {
      title: 'Discographie',
      list: [
        {
          title: 'Artistes',
          path: '/artists',
          icon: <FaMicrophone className="mr-3" size={16} />
        },
        {
          title: 'Sorties',
          path: '/releases',
          icon: <FaCompactDisc className="mr-3" size={16} />
        },
        {
          title: 'Chansons',
          path: '/songs',
          icon: <FaMusic className="mr-3" size={16} />
        },
        {
          title: "Types de sorties",
          path: '/release-types',
          icon: <FaGears className="mr-3" size={16} />
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
          path: '/log-users',
          icon: <FaRightToBracket className="mr-3" size={16} />
        },
        {
          title: 'Utilisateurs',
          path: '/users',
          icon: <FaUsers className="mr-3" size={16} />
        },
      ]
    }
  ];

  return (
    <div className="h-full w-64 sticky bg-primary font-medium text-sm text-textlight p-4 mb-1">
      <div className="py-2">
        <ul>
          <Link
            href="/"
          >
            <li
              className={cn(
                "p-2 flex items-center hover:bg-blue-500/60 transition no-underline hover:no-underline rounded-sm",
                isActivePath("/") && "font-bold bg-blue-500/60"
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
              <div className="pt-1 pb-1 uppercase font-bold text-gray-400">{cat.title}</div>
              <ul>
                {cat.list.map((item, index, array) => (
                  <Link
                    href={item.path}
                    key={item.title}
                  >
                    <li
                      className={cn(
                        "p-2 flex items-center hover:bg-blue-500/60 transition no-underline hover:no-underline rounded-sm",
                        isActivePath(item.path) && "font-bold bg-blue-500/60"
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
