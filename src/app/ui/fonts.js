import { Montserrat, Jost, Questrial, Roboto, Bebas_Neue, Abel } from "next/font/google";

export const montserrat = Montserrat({ subsets: ["latin"] });

export const roboto = Roboto({ subsets: ["latin"], weight: "500" });

export const jost = Jost({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const questrial = Questrial({
  weight: ["400"],
  subsets: ["latin"],
});
export const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});
export const abel = Abel({
  weight: ["400"],
  subsets: ["latin"],
});
