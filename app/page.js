"use client";
import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page with the post-login redirect URL
    router.push('/api/auth/login?post_login_redirect_url=/dashboard');
  }, [router]);

  return (
    <div>
      {/* You can still add content or buttons here if needed */}
    </div>
  );
}
