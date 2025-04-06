import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import multiavatar from "@multiavatar/multiavatar/esm";

import LandingGreeting from "@/components/LandingGreeeting";
import RegistrationHeader from "@/components/RegistrationHeader";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { RegisterUserFormInputs, userSchema } from "../schema/userSchema";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserFormInputs>({
    resolver: zodResolver(userSchema),
  });

  let svgCode = multiavatar("Binx Bond");

  const onSubmit = async (data: RegisterUserFormInputs) => {};

  return (
    <>
      <BackgroundBeams />
      <div className="z-10 absolute inset-y-[2.5vw] inset-x-[5vw] flex items-center">
        <LandingGreeting />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 w-1/2 h-full flex flex-col bg-foreground/5 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border-b border-white/10"
        >
          <RegistrationHeader />

          <div className="flex flex-col my-auto items-center justify-center">
            <div
              className="w-[4vw] aspect-square border border-muted-foreground/50 rounded-full shadow-2xl"
              dangerouslySetInnerHTML={{ __html: svgCode }}
            />
          </div>
        </form>
      </div>
    </>
  );
}
