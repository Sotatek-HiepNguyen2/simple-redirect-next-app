import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Layout({children}) {
  if (cookies()?.get('isLogin')?.value) {
    console.log("Login======", {token: cookies()?.get('isLogin')?.value});
    redirect('/private')
  }

  return (
    <div>
      <h1>{children}</h1>
    </div>
  )
}