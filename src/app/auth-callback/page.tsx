import { useRouter, useSearchParams } from "next/navigation"
import { trpc } from "../_trpc/clients"

const Page = async () => {
    const router = useRouter()

    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')

    const apiResponse = await fetch ('/api/whatever')

    const data = await apiResponse.json()

    const {} = trpc.test.useQuery()
}

export default Page;