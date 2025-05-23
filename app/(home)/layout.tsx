import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className="w-full flex justify-center">
        <Header />
      </div>
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  )
}
