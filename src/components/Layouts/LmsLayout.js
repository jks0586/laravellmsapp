import { useAuth } from '@/hooks/auth'
import LmsSidebar from './LmsSidebar'

const LmsLayout = ({ header, children }) => {
    // const { user } = useAuth({ middleware: 'auth' })

    return (
        <div className="flex">
            <aside className="h-screen sticky top-0">
                <LmsSidebar/>
            </aside>
            <main className='w-full'>
            {children}
            </main>
        </div>
    )
}

export default LmsLayout
