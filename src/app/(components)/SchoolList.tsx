import { validateRequest } from "@/lib/auth/lucia";
import { ISchool, School } from "@/lib/models/school";
import Link from "next/link";
import React from "react";

const SchoolList = async () => {
  const { user } = await validateRequest();
  const schools: ISchool[] = await School.where({
    user_id: user?.id,
  });

  return (
    <div className="mt-2 grid grid-cols-4 gap-2">
      {schools.map((element, index) => {
        return (
          <Link key={index} href={`/school/${element._id}`}>
            <div className="btn-outlined">
              <p>{element.school_name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SchoolList;
