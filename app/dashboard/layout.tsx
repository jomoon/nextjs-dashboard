import SideNav from "../ui/dashboard/sidenav";

// 这里是什么语法
export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hiddden">
            <div className="w-full flex-none md:w-64">
                {/* 引入了 SideNav 组建 侧边导航 */}
                <SideNav/>
            </div>
            {/* child是这个 dashboard目录下的所有子页面 */}
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    )
}