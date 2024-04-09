import { cookies, headers } from "next/headers"
import { permanentRedirect, redirect } from "next/navigation"

export default function PrivateApp({children}){
  const isLogin = cookies()?.get('isLogin')?.value

  
  if (!isLogin) {
    console.log("Private", {isLogin});
    redirect('/login?redirect=/private')
  }


    return (
        <div>
            <h1>Private App</h1>
            {children}
        </div>
    )
}