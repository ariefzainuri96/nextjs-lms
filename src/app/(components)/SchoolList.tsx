import { validateRequest } from "@/lib/auth/lucia";
import { ISchool, School } from "@/lib/models/school";
import Link from "next/link";
import React from "react";
import { DeleteSchoolModal } from "./DeleteSchoolModal";
import { AddOrEditSchool } from "./AddOrEditSchool";

const SchoolList = async () => {
  const { user } = await validateRequest();
  const schools: ISchool[] = await School.where({
    user_id: user?.id,
  });

  return (
    <div className="mt-2 grid grid-cols-3 gap-2">
      {schools.map((element, index) => {
        return (
          <Link key={index} href={`/school/${element._id}`}>
            <div className="btn-outlined flex flex-col items-start">
              <p className="line-clamp-2 text-wrap">
                {`${element.school_name}\n`}
              </p>
              <div className="mt-2 flex flex-row gap-2">
                <DeleteSchoolModal schoolId={element._id} />
                <AddOrEditSchool
                  schoolName={element.school_name}
                  schoolId={element._id}
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SchoolList;
