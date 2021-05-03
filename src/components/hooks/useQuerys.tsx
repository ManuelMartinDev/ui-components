import { useMediaQuery } from "./useMediaQuery";
import { Theme } from "../commonInterfaces/themes";
export function useQuerys(theme: Theme) {
  const mobile = useMediaQuery(theme.breakpoints.mobile);
  const tablet = useMediaQuery(theme.breakpoints.tablet);
  const desktop = useMediaQuery(theme.breakpoints.desktop);
  return [mobile, tablet, desktop];
}
