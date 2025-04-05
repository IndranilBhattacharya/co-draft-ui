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

      <div className="z-10 absolute inset-y-[2.5vw] inset-x-[5vw] flex items-center">
        <div className="w-1/2 h-full flex flex-col pt-[25vh] pb-[5vh] items-start">
          <div className="gap-2 flex flex-col items-start">
            <div className="text-7xl font-bold">
              <span className="bg-gradient-to-r from-gray-300 to-gray-700 bg-clip-text text-transparent">
                Co
              </span>
              <span>Draft</span>
            </div>
            <div className="text-xl text-muted-foreground">
              Instant collaboration. No clutter. Just draft and go.
            </div>
          </div>
          <div className="mt-auto text-xs">
            © 2025 Indranil Bhattacharya. All Rights Reserved.
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/2 h-full bg-foreground/5 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border-b border-white/10"
        ></form>
      </div>
    </div>
  );
}
