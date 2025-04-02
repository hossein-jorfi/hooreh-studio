import Image from "next/image";
import Link from "next/link";

const MainLogo = () => {
  return (
    <Link href="#top">
      <Image src="/images/logo.png" alt="logo" width={50} height={0} />
    </Link>
  );
};

export default MainLogo;
