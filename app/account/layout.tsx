import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import VerifyToken from "../../util/helpers/VerifyToken";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await VerifyToken();
  const cookiesList = cookies();
  const hasCookie = cookiesList.has("token");

  const isError = () => {
    if (user) {
      if ((user as any).error) {
        return false;
      } else {
        return true;
      }
    }
  };

  return <>{isError() || hasCookie ? redirect("/") : <div>{children}</div>}</>;
}
