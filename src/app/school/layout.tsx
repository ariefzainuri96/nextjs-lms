import { headers } from "next/headers";
import Link from "next/link";

export default function SchoolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const header_url = headersList.get("x-url") || "";
  const params = new URL(header_url).searchParams;
  const id = params.get("schoolId");

  return (
    <div className="h-screen max-h-screen w-screen overflow-hidden">
      <div className={"flex h-full w-full flex-col overflow-hidden"}>
        <div className="mt-4 flex flex-row gap-4 overflow-x-auto px-4">
          <Link
            className="btn-outlined"
            href={`/school/student-list?schoolId=${id}`}
            replace
          >
            Daftar Murid
          </Link>
          <Link
            className="btn-outlined"
            href={`/school/class-list?schoolId=${id}`}
            replace
          >
            Daftar Kelas
          </Link>
        </div>
        <main className="flex-1 bg-white">{children}</main>
      </div>
    </div>
  );
}
