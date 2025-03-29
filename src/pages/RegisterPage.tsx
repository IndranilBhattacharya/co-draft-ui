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

      <form onSubmit={handleSubmit(onSubmit)}></form>
    </div>
  );
}
