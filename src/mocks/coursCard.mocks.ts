import { Course } from "@/types/course.type";

const COURSE_RECORDS: Omit<Course, "creatorId">[] = [
  {
    id: "1",
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    thumbnail:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "purepearl studio",
    },
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    rating: 4.5,
    level: "Beginner",
    enrolledStudents: [
      {
        id: "s1",
        name: "User 1",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s2",
        name: "User 2",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s3",
        name: "User 3",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s4",
        name: "User 4",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      },
    ],
    totalEnrolledCount: 30, // 4 visible + 26+
    price: 25,
    billingType: "lifetime",
  },
  {
    id: "2",
    slug: "balancing-productivity-and-wellness",
    title: "Balancing Productivity and Wellness",
    thumbnail:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "purepearl studio",
    },
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    rating: 4.5,
    level: "Beginner",
    enrolledStudents: [
      {
        id: "s1",
        name: "User 1",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s2",
        name: "User 2",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s3",
        name: "User 3",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s4",
        name: "User 4",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      },
    ],
    totalEnrolledCount: 830, // 4 visible + 826+
    price: 25,
    billingType: "lifetime",
  },
  {
    id: "3",
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "purepearl studio",
    },
    lessonsCount: 189,
    duration: "7 hours 80 mins",
    commentsCount: 775,
    rating: 4.5,
    level: "Beginner",
    enrolledStudents: [
      {
        id: "s1",
        name: "User 1",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s2",
        name: "User 2",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s3",
        name: "User 3",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s4",
        name: "User 4",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      },
    ],
    totalEnrolledCount: 30, // 4 visible + 26+
    price: 25,
    billingType: "lifetime",
  },
  {
    id: "4",
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    thumbnail:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "purepearl studio",
    },
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    rating: 4.5,
    level: "Beginner",
    enrolledStudents: [
      {
        id: "s1",
        name: "User 1",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s2",
        name: "User 2",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s3",
        name: "User 3",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s4",
        name: "User 4",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      },
    ],
    totalEnrolledCount: 30, // 4 visible + 26+
    price: 25,
    billingType: "lifetime",
  },
  {
    id: "5",
    slug: "the-power-of-big-data",
    title: "The Power of Big Data",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "purepearl studio",
    },
    lessonsCount: 17,
    duration: "2 hours 10 mins",
    commentsCount: 59,
    rating: 4.5,
    level: "Beginner",
    enrolledStudents: [
      {
        id: "s1",
        name: "User 1",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s2",
        name: "User 2",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s3",
        name: "User 3",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s4",
        name: "User 4",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      },
    ],
    totalEnrolledCount: 30, // 4 visible + 26+
    price: 25,
    billingType: "lifetime",
  },
  {
    id: "6",
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    thumbnail:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "purepearl studio",
    },
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    rating: 4.5,
    level: "Beginner",
    enrolledStudents: [
      {
        id: "s1",
        name: "User 1",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s2",
        name: "User 2",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s3",
        name: "User 3",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s4",
        name: "User 4",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      },
    ],
    totalEnrolledCount: 30, // 4 visible + 26+
    price: 25,
    billingType: "lifetime",
  },
  {
    id: "7",
    slug: "complete-web-development-bootcamp",
    title: "Complete Web Development Bootcamp",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "purepearl studio",
    },
    lessonsCount: 86,
    duration: "12 hours 45 mins",
    commentsCount: 342,
    rating: 4.8,
    level: "Intermediate",
    enrolledStudents: [
      {
        id: "s1",
        name: "User 1",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s2",
        name: "User 2",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s3",
        name: "User 3",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s4",
        name: "User 4",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      },
    ],
    totalEnrolledCount: 1240,
    price: 49,
    billingType: "lifetime",
  },
  {
    id: "8",
    slug: "mastering-digital-photography",
    title: "Mastering Digital Photography",
    thumbnail:
      "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "purepearl studio",
    },
    lessonsCount: 42,
    duration: "6 hours 20 mins",
    commentsCount: 218,
    rating: 4.7,
    level: "Intermediate",
    enrolledStudents: [
      {
        id: "s1",
        name: "User 1",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s2",
        name: "User 2",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s3",
        name: "User 3",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s4",
        name: "User 4",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      },
    ],
    totalEnrolledCount: 685,
    price: 35,
    billingType: "lifetime",
  },
  {
    id: "9",
    slug: "social-media-marketing-masterclass",
    title: "Social Media Marketing Masterclass",
    thumbnail:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "purepearl studio",
    },
    lessonsCount: 58,
    duration: "8 hours 15 mins",
    commentsCount: 486,
    rating: 4.6,
    level: "Advanced",
    enrolledStudents: [
      {
        id: "s1",
        name: "User 1",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s2",
        name: "User 2",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s3",
        name: "User 3",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s4",
        name: "User 4",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      },
    ],
    totalEnrolledCount: 2180,
    price: 39,
    billingType: "month",
  },
  {
    id: "10",
    slug: "creative-illustration-masterclass",
    title: "Creative Illustration Masterclass",
    thumbnail:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "purepearl studio",
    },
    lessonsCount: 73,
    duration: "10 hours 30 mins",
    commentsCount: 164,
    rating: 4.9,
    level: "Advanced",
    enrolledStudents: [
      {
        id: "s1",
        name: "User 1",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s2",
        name: "User 2",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s3",
        name: "User 3",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s4",
        name: "User 4",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      },
    ],
    totalEnrolledCount: 940,
    price: 45,
    billingType: "year",
  },
  {
    id: "11",
    slug: "data-science-with-python",
    title: "Data Science with Python",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "purepearl studio",
    },
    lessonsCount: 112,
    duration: "16 hours 40 mins",
    commentsCount: 729,
    rating: 4.8,
    level: "Intermediate",
    enrolledStudents: [
      {
        id: "s1",
        name: "User 1",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s2",
        name: "User 2",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s3",
        name: "User 3",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s4",
        name: "User 4",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      },
    ],
    totalEnrolledCount: 1560,
    price: 59,
    billingType: "lifetime",
  },
  {
    id: "12",
    slug: "ui-ux-design-complete-guide",
    title: "UI/UX Design Complete Guide",
    thumbnail:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "purepearl studio",
    },
    lessonsCount: 64,
    duration: "9 hours 25 mins",
    commentsCount: 286,
    rating: 4.8,
    level: "Intermediate",
    enrolledStudents: [
      {
        id: "s1",
        name: "User 1",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s2",
        name: "User 2",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s3",
        name: "User 3",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s4",
        name: "User 4",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      },
    ],
    totalEnrolledCount: 1120,
    price: 45,
    billingType: "lifetime",
  },
  {
    id: "13",
    slug: "modern-javascript-from-zero",
    title: "Modern JavaScript from Zero",
    thumbnail:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "purepearl studio",
    },
    lessonsCount: 91,
    duration: "14 hours 10 mins",
    commentsCount: 514,
    rating: 4.9,
    level: "Beginner",
    enrolledStudents: [
      {
        id: "s1",
        name: "User 1",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s2",
        name: "User 2",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s3",
        name: "User 3",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s4",
        name: "User 4",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      },
    ],
    totalEnrolledCount: 2450,
    price: 39,
    billingType: "lifetime",
  },
  {
    id: "14",
    slug: "content-creation-masterclass",
    title: "Content Creation Masterclass",
    thumbnail:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "purepearl studio",
    },
    lessonsCount: 48,
    duration: "6 hours 45 mins",
    commentsCount: 198,
    rating: 4.6,
    level: "Beginner",
    enrolledStudents: [
      {
        id: "s1",
        name: "User 1",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s2",
        name: "User 2",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s3",
        name: "User 3",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s4",
        name: "User 4",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      },
    ],
    totalEnrolledCount: 760,
    price: 29,
    billingType: "month",
  },
  {
    id: "15",
    slug: "mastering-adobe-photoshop",
    title: "Mastering Adobe Photoshop",
    thumbnail:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "purepearl studio",
    },
    lessonsCount: 77,
    duration: "11 hours 35 mins",
    commentsCount: 377,
    rating: 4.7,
    level: "Intermediate",
    enrolledStudents: [
      {
        id: "s1",
        name: "User 1",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s2",
        name: "User 2",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s3",
        name: "User 3",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s4",
        name: "User 4",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      },
    ],
    totalEnrolledCount: 1380,
    price: 49,
    billingType: "lifetime",
  },
  {
    id: "16",
    slug: "entrepreneurship-startup-blueprint",
    title: "Entrepreneurship Startup Blueprint",
    thumbnail:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "purepearl studio",
    },
    lessonsCount: 53,
    duration: "7 hours 50 mins",
    commentsCount: 241,
    rating: 4.5,
    level: "Advanced",
    enrolledStudents: [
      {
        id: "s1",
        name: "User 1",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s2",
        name: "User 2",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s3",
        name: "User 3",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s4",
        name: "User 4",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      },
    ],
    totalEnrolledCount: 920,
    price: 55,
    billingType: "lifetime",
  },
  {
    id: "17",
    slug: "video-editing-for-creators",
    title: "Video Editing for Creators",
    thumbnail:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "purepearl studio",
    },
    lessonsCount: 69,
    duration: "10 hours 15 mins",
    commentsCount: 321,
    rating: 4.8,
    level: "Intermediate",
    enrolledStudents: [
      {
        id: "s1",
        name: "User 1",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s2",
        name: "User 2",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s3",
        name: "User 3",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s4",
        name: "User 4",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      },
    ],
    totalEnrolledCount: 1760,
    price: 42,
    billingType: "lifetime",
  },
  {
    id: "18",
    slug: "personal-branding-on-social-media",
    title: "Personal Branding on Social Media",
    thumbnail:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "purepearl studio",
    },
    lessonsCount: 39,
    duration: "5 hours 30 mins",
    commentsCount: 152,
    rating: 4.6,
    level: "Beginner",
    enrolledStudents: [
      {
        id: "s1",
        name: "User 1",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s2",
        name: "User 2",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s3",
        name: "User 3",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s4",
        name: "User 4",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      },
    ],
    totalEnrolledCount: 640,
    price: 25,
    billingType: "month",
  },
  {
    id: "19",
    slug: "advanced-excel-data-analysis",
    title: "Advanced Excel Data Analysis",
    thumbnail:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "purepearl studio",
    },
    lessonsCount: 61,
    duration: "8 hours 40 mins",
    commentsCount: 294,
    rating: 4.7,
    level: "Advanced",
    enrolledStudents: [
      {
        id: "s1",
        name: "User 1",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s2",
        name: "User 2",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s3",
        name: "User 3",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s4",
        name: "User 4",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      },
    ],
    totalEnrolledCount: 870,
    price: 35,
    billingType: "lifetime",
  },
  {
    id: "20",
    slug: "creative-writing-workshop",
    title: "Creative Writing Workshop",
    thumbnail:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "purepearl studio",
    },
    lessonsCount: 34,
    duration: "4 hours 55 mins",
    commentsCount: 126,
    rating: 4.5,
    level: "Beginner",
    enrolledStudents: [
      {
        id: "s1",
        name: "User 1",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s2",
        name: "User 2",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s3",
        name: "User 3",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s4",
        name: "User 4",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      },
    ],
    totalEnrolledCount: 520,
    price: 22,
    billingType: "lifetime",
  },
  {
    id: "21",
    slug: "artificial-intelligence-for-everyone",
    title: "Artificial Intelligence for Everyone",
    thumbnail:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "purepearl studio",
    },
    lessonsCount: 82,
    duration: "13 hours 20 mins",
    commentsCount: 638,
    rating: 4.9,
    level: "Intermediate",
    enrolledStudents: [
      {
        id: "s1",
        name: "User 1",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s2",
        name: "User 2",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s3",
        name: "User 3",
        avatarUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      },
      {
        id: "s4",
        name: "User 4",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      },
    ],
    totalEnrolledCount: 3240,
    price: 59,
    billingType: "year",
  },
];

export const MOCK_COURSES: Course[] = COURSE_RECORDS.map((course) => ({
  ...course,
  creatorId: "creator-1",
}));

export const FILTER_CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];
