import { Dices } from "lucide-react";
import { RootState } from "@/redux/store";
import { useForm } from "react-hook-form";
import { useCallback, useEffect } from "react";
import { setAvatar } from "@/redux/slices/authSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import multiavatar from "@multiavatar/multiavatar/esm";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import UserDetail from "@/interfaces/UserDetail";
import LandingGreeting from "@/components/LandingGreeeting";
import RegistrationHeader from "@/components/RegistrationHeader";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { RegisterUserFormInputs, userSchema } from "@/schema/userSchema";

export default function RegisterPage() {
  const userDetails = useSelector<RootState>(
    (state) => state.auth.userDetails
  ) as UserDetail;

  const dispatch = useDispatch();
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserFormInputs>({
    resolver: zodResolver(userSchema),
  });

  // generate unique id specific to user device for avatar generation
  const generateAvatar = useCallback(() => {
    if (!userDetails?.visitorId) return;

    // generate uniquely signatured avatar
    const avatarId = `${userDetails.visitorId}${Date.now()}`;
    setValue("avatar", avatarId);
    dispatch(setAvatar(avatarId));
  }, [dispatch, setValue, userDetails.visitorId]);

  // on mount of Registratio page, we first set
  useEffect(() => {
    generateAvatar();
  }, [generateAvatar]);

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
                dangerouslySetInnerHTML={{
                  __html: multiavatar(userDetails.avatar),
                }}
                className="w-[5vw] aspect-square border border-muted-foreground/50 rounded-full shadow-2xl"
              />
              <Button
                size="sm"
                type="button"
                variant="secondary"
                onClick={generateAvatar}
              >
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
