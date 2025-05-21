import { useContext } from "react";

import { AnimationsContext } from "@/providers";

export const useAnimations = () => useContext(AnimationsContext);
