import { GitHub } from "@mui/icons-material";
import { Divider } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flexCenter bg-customBlack shadow-shadowBlack text-white p-2">
      <p className="font-bold">All right reserved 2024</p>
      <Divider
        className="bg-white ml-2 mr-2 rounded-3xl border-3"
        flexItem
        orientation="vertical"
      />
      <GitHub className="mr-1" />
      <Link
        href="https://github.com/kristishh"
        target="_blank"
        className="hover:underline"
      >
        kristishh
      </Link>
    </footer>
  );
};

export default Footer;
