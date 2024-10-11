import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <Navbar />
            <main className="pt-14 max-w-8xl bg-background text-foreground mx-auto">
                <div className="flex gap-x-5">
                    <div className="w-64 shrink-0 hidden md:block">
                        <Sidebar />
                    </div>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default DashboardLayout;