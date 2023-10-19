import { cookies } from "next/headers";
import LoadingBeforeLogin from "../../util/helpers/LoadingBeforeLogin";
import VerifyToken from "../../util/helpers/VerifyToken";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await VerifyToken();
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  const isError = () => {
    if (user) {
      if ((user as any).error) {
        return false;
      } else {
        return true;
      }
    }
  };

  return (
    <>{!isError() || !token ? <LoadingBeforeLogin /> : <div>{children}</div>}</>
  );
}
