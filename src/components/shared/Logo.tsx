import Image from "next/image";
import Link from "next/link";

function Logo({ isOnlyTest = true }: { isOnlyTest?: boolean }) {
  return (
    <Link href={"/"} className="flex items-center gap-2.5">
      <Image
        src={"/elements/logo.png"}
        alt="logo icon"
        width={28}
        height={31}
        className="w-7 h-8"
      />
      {isOnlyTest && (
        <h3 className="font-clashDisplay text-2xl font-bold mt-1">ByteSpace</h3>
      )}
    </Link>
  );
}

export default Logo;
