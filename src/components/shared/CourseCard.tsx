import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ChartIcon } from "../icons/Icons";

export interface CourseData {
  id: string;
  slug: string;
  title: string;
  thumbnail: string;
  author: {
    name: string;
  };
  lessonsCount: number;
  duration: string;
  commentsCount: number;
  rating: number;
  level: string;
  enrolledStudents: {
    id: string;
    name: string;
    avatarUrl: string;
  }[];
  totalEnrolledCount: number;
  price: number;
  billingType: string;
}

interface CourseCardProps {
  course: CourseData;
}

export function CourseCard({ course }: CourseCardProps) {
  const visibleStudents = course.enrolledStudents.slice(0, 4);
  const remainingCount = course.totalEnrolledCount - visibleStudents.length;

  return (
    <Card className="group relative overflow-hidden rounded-[28px] border border-[#CED0D3] bg-white p-3 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-sm mx-auto flex flex-col justify-between">
      {/* Whole Card Clickable Link overlay */}
      <Link
        href={`/courses/${course.slug}`}
        className="absolute inset-0 z-10 rounded-[28px]"
        aria-label={`View course: ${course.title}`}
      />

      <div>
        {/* Thumbnail Image Container with Badges */}
        <div className="relative h-52 w-full overflow-hidden rounded-[20px]">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Overlaid Badges */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-1.5 z-20 pointer-events-none">
            <span className="backdrop-blur-md bg-white/40 text-slate-900 text-[0.6rem] lg:text-[0.5rem] xl:text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 shadow-sm">
              {course.lessonsCount} Lessons
            </span>
            <span className="backdrop-blur-md bg-white/40 text-slate-900 text-[0.6rem] lg:text-[0.5rem] xl:text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 shadow-sm">
              {course.duration}
            </span>
            <span className="backdrop-blur-md bg-white/40 text-slate-900 text-[0.6rem] lg:text-[0.5rem] xl:text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 shadow-sm">
              {course.commentsCount} Comments
            </span>
          </div>
        </div>

        {/* Header & Title Section */}
        <CardHeader className="p-4 pb-2 space-y-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
              {course.title}
            </h3>
            <div className="flex items-center space-x-1 shrink-0 pt-0.5">
              <span className="text-lg font-bold text-slate-800">
                {course.rating.toFixed(1)}
              </span>
              <Star className="w-5 h-5 fill-slate-300 text-slate-300" />
            </div>
          </div>
          <p className="text-sm font-medium text-slate-500">
            by{" "}
            <span className="text-blue-600 hover:underline relative z-20">
              {course.author.name}
            </span>
          </p>
        </CardHeader>

        {/* Content: Level Badge + Enrolled Avatar Stack */}
        <CardContent className="px-3">
          {/* Level Badge */}
          <div className="flex items-center justify-between">
            <Badge
              variant="secondary"
              className="bg-[#F5F5F6] text-slate-700 hover:bg-slate-100 font-medium text-xs px-3 py-3.5 rounded-full flex items-center gap-1.5 border-none"
            >
              <ChartIcon width={30} height={30} className="size-5" />
              {course.level}
            </Badge>

            {/* Student Avatars Stack */}
            <div className="flex items-center -space-x-2 overflow-hidden">
              {visibleStudents.map((student) => (
                <Avatar
                  key={student.id}
                  className="inline-block border-2 border-white w-8 h-8 rounded-full"
                >
                  <AvatarImage src={student.avatarUrl} alt={student.name} />
                  <AvatarFallback className="text-[10px] bg-slate-200">
                    {student.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              ))}
              {remainingCount > 0 && (
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D4FB20] text-black border-2 border-white text-xs font-extrabold z-10 shrink-0">
                  {remainingCount}+
                </div>
              )}
            </div>
          </div>

          <div className="flex items-baseline space-x-1 mt-2">
            <span className="text-2xl font-extrabold text-blue-600">
              ${course.price}
            </span>
            <span className="text-sm font-medium text-slate-400">
              /{course.billingType}
            </span>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
