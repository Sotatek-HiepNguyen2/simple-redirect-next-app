'use client'

import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function Private(){
    const {t} = useTranslation()
  const router = useRouter()
    return (
        <div>
            <button onClick={() => { Cookies.remove('isLogin'); router.push('/login')}}>Logout</button>
            <br />            
            <Link href="/products">Products</Link>
        </div>
    )
}