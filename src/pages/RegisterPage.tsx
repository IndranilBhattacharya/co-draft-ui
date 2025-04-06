import { Dices } from "lucide-react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import multiavatar from "@multiavatar/multiavatar/esm";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LandingGreeting from "@/components/LandingGreeeting";
import RegistrationHeader from "@/components/RegistrationHeader";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { RegisterUserFormInputs, userSchema } from "../schema/userSchema";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const {
    setValue,
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

          <div className="w-1/2 flex flex-col m-auto items-center justify-center">
            <section className="gap-4 flex items-center">
              <div
                dangerouslySetInnerHTML={{ __html: svgCode }}
                className="w-[5vw] aspect-square border border-muted-foreground/50 rounded-full shadow-2xl"
              />
              <Button size="sm" type="button" variant="secondary">
                <Dices /> Reroll
              </Button>
            </section>

            <section className="mt-8 w-full">
              <Input
                autoFocus
                type="text"
                id="userName"
                {...register("userName")}
                placeholder="What Should We Call You?"
              />
              {errors.userName && (
                <p className="mt-2 text-start text-xs text-red-400">
                  {errors.userName.message}
                </p>
              )}
            </section>
            <Button className="mt-4 w-full">Let's Go</Button>
          </div>
        </form>
      </div>
    </>
  );
}
