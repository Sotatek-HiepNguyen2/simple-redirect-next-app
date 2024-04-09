'use client'

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Private(){
  const router = useRouter()
    return (
        <div>
            <h1>PPPPPPPPPPPPP</h1>
            <button onClick={() => { Cookies.remove('isLogin'); router.replace('/login')}}>Logout</button>
        </div>
    )
}