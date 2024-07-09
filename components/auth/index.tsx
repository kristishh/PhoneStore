"use client";

import { useSession, useClerk } from "@clerk/nextjs";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import "../../app/globals.css";

const Auth = () => {
  const router = useRouter();
  const session = useSession();
  const { signOut } = useClerk();

  const handleLogin = () => {
    router.push("/sign-in");
  };

  return (
    <>
      {!session.isSignedIn ? (
        <Button
          className="gradient-text normal-case font-bold"
          variant="contained"
          aria-label="log in"
          size="small"
          onClick={handleLogin}
        >
          Login
        </Button>
      ) : (
        <Button
          size="medium"
          className="text-red-600 normal-case"
          onClick={async () => await signOut()}
        >
          Log out
        </Button>
      )}
    </>
  );
};

export default Auth;
