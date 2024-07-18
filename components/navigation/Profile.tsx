"use client";

import { useSession } from "@clerk/nextjs";
import { Button, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import "../../app/globals.css";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";
import ProfileMenu from "./profileMenu";

const Profile = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const router = useRouter();
  const session = useSession();

  const handleLogin = () => {
    router.push("/sign-in");
  };

  const handleProfileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setShowProfileMenu(!showProfileMenu);
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
        <>
          <IconButton onClick={handleProfileMenu}>
            <AccountCircle />
          </IconButton>
          {anchorEl && (
            <ProfileMenu
              handleProfileMenu={handleProfileMenu}
              showMenu={showProfileMenu}
              anchorEl={anchorEl}
            />
          )}
        </>
      )}
    </>
  );
};

export default Profile;
