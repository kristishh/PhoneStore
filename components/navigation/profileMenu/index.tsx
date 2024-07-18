import { useClerk } from "@clerk/nextjs";
import { Button, Popover, Typography } from "@mui/material";

type ProfileOptionType = {
  label: string;
  path?: string;
  onClickMethod?: string;
};

const profileListOptions: ProfileOptionType[] = [
  { label: "Profile", path: "/profile" },
  {
    label: "Orders",
    path: "/my-orders",
  },
  {
    label: "Log out",
  },
];

type ProfileMenuProps = {
  showMenu: boolean;
  anchorEl: HTMLButtonElement;
  handleProfileMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ProfileMenu = ({
  handleProfileMenu,
  showMenu,
  anchorEl,
}: ProfileMenuProps) => {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <>
      <Popover
        id={"Popover"}
        open={showMenu}
        anchorEl={anchorEl}
        onClose={handleProfileMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {profileListOptions.map((profileOption, index) => {
          return (
            <Button
              key={`${profileOption.label}-${index}`}
              aria-label={profileOption.label}
              onClick={() =>
                profileOption.label === "Log out" && handleSignOut()
              }
              className={`flexCenter m-2 normal-case ${
                profileOption.label === "Log out"
                  ? "text-red-600"
                  : "text-white"
              }`}
            >
              {profileOption.label}
            </Button>
          );
        })}
      </Popover>
    </>
  );
};

export default ProfileMenu;
