import { SignIn as ClerkSignIn } from "@clerk/nextjs";
import "../../globals.css";

const SignIn = () => {
  return (
    <>
      <ClerkSignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </>
  );
};

export default SignIn;
