import { cookies, headers } from "next/headers"
import { redirect } from "next/navigation"

export default function PrivateApp({children}){
  const isLogin = cookies()?.get('isLogin')?.value

  if (!isLogin) {
    console.log("failed ================");
    redirect(`/public?${new URLSearchParams({redirect: '/products'}).toString()}`)
  }

    return (
        <div>
            {children}
        </div>
    )
}