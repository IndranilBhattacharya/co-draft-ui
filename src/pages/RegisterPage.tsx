import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { BackgroundBeams } from "../components/ui/BackgroundBeams";
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

  const onSubmit = async (data: RegisterUserFormInputs) => {};

  return (
    <div className="flex w-screen bg-black">
      <BackgroundBeams />

      <div className="absolute inset-0 z-10">
        <div className="flex flex-col pt-[30vh] pb-[5vh] px-[5vw] h-screen items-start">
          <div className="gap-2 flex flex-col items-start">
            <div className="text-6xl font-bold">CoDraft</div>
            <div className="text-xl text-muted-foreground">
              Instant collaboration. No clutter. Just draft and go.
            </div>
          </div>
          <div className="mt-auto">
            © 2025 Indranil Bhattacharya. All Rights Reserved.
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-1/2"></form>
      </div>
    </div>
  );
}
