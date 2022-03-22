import Link from "next/link";
import { useRouter } from "next/router";

function CoffeeStore() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      Coffee Store {router.query.id}
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <Link href="/coffee-store/dynamic">
        <a>Go to dynamic page</a>
      </Link>
    </div>
  );
}
export default CoffeeStore;
