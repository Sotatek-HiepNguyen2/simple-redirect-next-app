'use client'

import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";

export default function Home() {
  const router = useRouter()
  const params = useSearchParams()
  const redirectUrl = params.get('redirect') || '/private'

  return (
    <main>
      <button onClick={() => { Cookies.set('isLogin', true); router.replace(redirectUrl)}}>Login</button>
      <br />
      <Link href="/">Home page</Link>
    </main>
  );
}
