import { BackFooter } from "@/components/BackFooter"
import { BackHeader } from "@/components/BackHeader"
import { AuthProvider } from "./AuthProvider"

export default async function RSLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="mx-auto width-full">
            <AuthProvider>
              <BackHeader />
                {children}
              <BackFooter />
            </AuthProvider>
      </div>
    )
}