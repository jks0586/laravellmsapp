import LmsLayout from '@/components/Layouts/LmsLayout'
import AppLayout from '@/components/Layouts/LmsLayout'
import Head from 'next/head'

const Index = () => {
    return (

        <LmsLayout>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            In LMS Section
                        </div>
                    </div>
                </div>
            </div>
        </LmsLayout>
    )
}

export default Index
