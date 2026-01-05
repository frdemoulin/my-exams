import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
import { BreadcrumbWrapper } from "./_components/breadcrumb-wrapper";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
};

const DashboardLayout = async ({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) => {
    const session = await auth();
    const { locale: rawLocale } = await params;
    const locale = rawLocale ?? routing.defaultLocale;

    const localePrefix = locale === routing.defaultLocale ? "" : `/${locale}`;
    const loginPath = `${localePrefix}/log-in`;
    const homePath = `${localePrefix}/`;

    if (!session?.user) {
        redirect(loginPath);
    }

    const role = (session.user as any).role;
    if (role !== "ADMIN") {
        redirect(homePath);
    }

    return (
        <div className="h-full">
            <Navbar />
            <main className="pt-14 max-w-8xl bg-background text-foreground mx-auto">
                <div className="flex gap-x-5">
                    <div className="w-64 shrink-0 hidden md:block">
                        <Sidebar />
                    </div>
                    <BreadcrumbWrapper>
                        {children}
                    </BreadcrumbWrapper>
                </div>
            </main>
        </div>
    )
}

export default DashboardLayout;
