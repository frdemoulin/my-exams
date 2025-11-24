import { redirect } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import {
    FaBook,
    FaCalendar,
    FaChartPie,
    FaCity,
    FaGraduationCap,
    FaList,
    FaStairs,
    FaUsers,
} from "react-icons/fa6";

import getSession from "@/lib/auth/get-session";
import { fetchDashboardStats, fetchRecentCurriculums, fetchRecentTeachings } from "@/core/dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDateTime } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Tableau de bord",
};

const DashboardPage = async () => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/log-in?callbackUrl=/dashboard");
    }

    const stats = await fetchDashboardStats();
    const recentCurriculums = await fetchRecentCurriculums();
    const recentTeachings = await fetchRecentTeachings();

    const statCards = [
        {
            title: "Diplômes",
            value: stats.diplomas,
            icon: <FaBook className="h-4 w-4" />,
            link: "/admin/diplomas",
        },
        {
            title: "Filières",
            value: stats.divisions,
            icon: <FaChartPie className="h-4 w-4" />,
            link: "/admin/divisions",
        },
        {
            title: "Niveaux",
            value: stats.grades,
            icon: <FaStairs className="h-4 w-4" />,
            link: "/admin/grades",
        },
        {
            title: "Matières",
            value: stats.subjects,
            icon: <FaBook className="h-4 w-4" />,
            link: "/admin/subjects",
        },
        {
            title: "Enseignements",
            value: stats.courses,
            icon: <FaGraduationCap className="h-4 w-4" />,
            link: "/admin/teachings",
        },
        {
            title: "Programmes",
            value: stats.curriculums.total,
            icon: <FaCalendar className="h-4 w-4" />,
            link: "/admin/curriculums",
            subtitle: `${stats.curriculums.active} actifs`,
        },
        {
            title: "Thèmes",
            value: stats.themes,
            icon: <FaList className="h-4 w-4" />,
            link: "/admin/themes",
        },
        {
            title: "Centres d'examens",
            value: stats.examinationCenters,
            icon: <FaCity className="h-4 w-4" />,
            link: "/admin/examination-centers",
        },
        {
            title: "Utilisateurs",
            value: stats.users,
            icon: <FaUsers className="h-4 w-4" />,
            link: "/admin/users",
        },
    ];

    return (
        <div className="w-full p-6 space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Tableau de bord</h1>
                <p className="text-muted-foreground">
                    Bienvenue, {user.name || user.email}
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {statCards.map((card) => (
                    <Link key={card.title} href={card.link}>
                        <Card className="hover:bg-accent transition-colors cursor-pointer">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    {card.title}
                                </CardTitle>
                                {card.icon}
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{card.value}</div>
                                {card.subtitle && (
                                    <p className="text-xs text-muted-foreground">
                                        {card.subtitle}
                                    </p>
                                )}
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>

            {/* Recent Items */}
            <div className="grid gap-4 md:grid-cols-2">
                {/* Recent Curriculums */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Programmes récents</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {recentCurriculums.length === 0 ? (
                            <p className="text-sm text-muted-foreground">
                                Aucun programme
                            </p>
                        ) : (
                            recentCurriculums.map((curriculum) => (
                                <Link
                                    key={curriculum.id}
                                    href={`/admin/curriculums/${curriculum.id}`}
                                    className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent transition-colors"
                                >
                                    <div className="flex-1">
                                        <p className="font-medium text-sm">
                                            {curriculum.longDescription}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {formatDateTime(curriculum.createdAt)}
                                        </p>
                                    </div>
                                    <Badge
                                        variant={
                                            curriculum.isActive ? "default" : "secondary"
                                        }
                                    >
                                        {curriculum.isActive ? "Actif" : "Inactif"}
                                    </Badge>
                                </Link>
                            ))
                        )}
                    </CardContent>
                </Card>

                {/* Recent Courses */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Enseignements récents</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {recentTeachings.length === 0 ? (
                            <p className="text-sm text-muted-foreground">Aucun enseignement</p>
                        ) : (
                            recentTeachings.map((teaching) => (
                                <Link
                                    key={teaching.id}
                                    href={`/admin/teachings/${teaching.id}`}
                                    className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent transition-colors"
                                >
                                    <div className="flex-1">
                                        <p className="font-medium text-sm">{teaching.longDescription}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {teaching.grade.shortDescription} •{" "}
                                            {teaching.subject.shortDescription}
                                        </p>
                                    </div>
                                    <span className="text-xs text-muted-foreground">
                                        {formatDateTime(teaching.createdAt)}
                                    </span>
                                </Link>
                            ))
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default DashboardPage;