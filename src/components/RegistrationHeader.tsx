import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { CircleHelp } from "lucide-react";

export default function RegistrationHeader() {
  return (
    <article className="flex flex-col items-start">
      <header className="w-full flex items-center justify-between">
        <h2 className="text-lg font-medium">
          You're <strong>Unique</strong>. So Is Your{" "}
          <strong>Registration</strong>.
        </h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger aria-label="Why is registration unique?">
              <CircleHelp />
            </TooltipTrigger>
            <TooltipContent>
              <p>
                You're automatically verified via device fingerprint. All that's
                left is personalization.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </header>
      <p className="text-muted-foreground text-sm">
        Pick your avatar, choose your name, and you're done.
      </p>
    </article>
  );
}
