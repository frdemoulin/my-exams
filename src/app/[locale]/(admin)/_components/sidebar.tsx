"use client";

import Link from "next/link";
import {
  FaArrowsTurnToDots,
  FaBarsProgress,
  FaBook,
  FaCalendar,
  FaChartPie,
  FaCity,
  FaFileAudio,
  FaGears,
  FaGraduationCap,
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
      title: '',
      list: [
        {
          title: 'Accueil',
          path: '/admin',
          icon: <FaHouse className="mr-3" size={16} />
        },
      ]
    },
    {
      title: 'Scolarité',
      list: [
        {
          title: 'Diplômes',
          path: '/admin/diplomas',
          icon: <FaBook className="mr-3" size={16} />
        },
        {
          title: 'Domaines',
          path: '/admin/domains',
          icon: <FaList className="mr-3" size={16} />
        },
        {
          title: 'Enseignements',
          path: '/admin/teachings',
          icon: <FaGraduationCap className="mr-3" size={16} />
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
          title: 'Programmes',
          path: '/admin/curriculums',
          icon: <FaCalendar className="mr-3" size={16} />
        },
        {
          title: 'Thèmes',
          path: '/admin/themes',
          icon: <FaList className="mr-3" size={16} />
        },
      ]
    },
    {
      title: 'Annales',
      list: [
        {
          title: "Centres d'examen",
          path: '/admin/examination-centers',
          icon: <FaCity className="mr-3" size={16} />
        },
        {
          title: "Contrôle éditorial",
          path: "/admin/editorial",
          icon: <FaGears className="mr-3" size={16} />
        },
        {
          title: "Exercices",
          path: '/admin/exercises',
          icon: <FaArrowsTurnToDots className="mr-3" size={16} />
        },
        {
          title: "Sujets d'examen",
          path: '/admin/exam-papers',
          icon: <FaFileAudio className="mr-3" size={16} />
        },
      ]
    },
    {
      title: 'Statistiques',
      list: [
        {
          title: "Statistiques de contenu",
          path: '/admin/stats',
          icon: <FaBarsProgress className="mr-3" size={16} />
        },
        {
          title: "Statistiques d'usage",
          path: "/admin/usage-stats",
          icon: <FaBarsProgress className="mr-3" size={16} />
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
    <div className="h-full w-64 sticky font-medium text-sm text-body p-4 mb-1 overflow-hidden">
      <div className="h-screen overflow-y-auto">
        <ul>
          {menuItems.map((cat) => (
            <li key={cat.title}>
              {cat.title ? <div className="pt-1 pb-1 text-xs font-semibold uppercase tracking-wide text-heading">{cat.title}</div> : null}
              <ul className="border-l border-default">
                {cat.list.map((item, index, array) => (
                  <Link
                    href={item.path}
                    key={item.title}
                  >
                    <li
                      className={cn(
                        "flex items-center gap-2 px-2 py-2 border-l-2 -ml-[2px] border-transparent text-body no-underline hover:text-heading",
                        isActivePath(item.path)
                          ? "border-brand text-fg-brand hover:!text-fg-brand-strong"
                          : "hover:border-default"
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
