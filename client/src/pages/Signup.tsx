import { SignupFormDemo } from "../components/Formdemo";
import { FloatingDockDemo } from "../components/MenuBarHome";

const Signup = () => {
  return (
    <div className="bg-neutral-900 flex flex-col h-[100vh] justify-center items-center p-8">
        <SignupFormDemo></SignupFormDemo>
        <FloatingDockDemo />
    </div>
  );
};

export default Signup;
