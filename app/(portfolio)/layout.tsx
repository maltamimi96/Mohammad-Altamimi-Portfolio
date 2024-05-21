import Header from "../components/Header"
export default function PortLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="bg-gray-900 text-white h-screen md:snap-y md:snap-mandatory scroll-smooth overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-cyan-500 overflow-x-hidden">
      <Header />
      <div className=" p-4 lg:p-0 max-w-7xl mx-auto">{children}</div>
    </main>
  )
}
