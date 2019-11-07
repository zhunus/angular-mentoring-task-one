import { addDays } from 'date-fns';

export default [
  {
    id: 0,
    title: 'Svelte course',
    creationDate: addDays(new Date(), -2),
    description:
      "Learn about where you can find course-item descriptions, what information they include, how they work, and details about various components of a course-item description. Course descriptions report information about a university or college's classes. They're published both in course-item catalogs that outline degree requirements and in course-item schedules that contain descriptions for all courses offered during a particular semester.",
    duration: 1000 * 60 * 60 + 30 * 60 * 1000,
    topRated: true
  },
  {
    id: 1,
    title: 'Angular tips and tricks',
    creationDate: addDays(new Date(), 4),
    description:
      "Learn about where you can find course-item descriptions, what information they include, how they work, and details about various components of a course-item description. Course descriptions report information about a university or college's classes. They're published both in course-item catalogs that outline degree requirements and in course-item schedules that contain descriptions for all courses offered during a particular semester.",
    duration: 1000 * 60 * 60 + 30 * 60 * 1000,
    topRated: false
  },
  {
    id: 2,
    title: 'ReactJS crash course',
    creationDate: addDays(new Date(), -10),
    description:
      "Learn about where you can find course-item descriptions, what information they include, how they work, and details about various components of a course-item description. Course descriptions report information about a university or college's classes. They're published both in course-item catalogs that outline degree requirements and in course-item schedules that contain descriptions for all courses offered during a particular semester.",
    duration: 1000 * 60 * 60 + 30 * 60 * 1000,
    topRated: false
  },
  {
    id: 3,
    title: 'No body likes Vue',
    creationDate: addDays(new Date(), -23),
    description:
      "Learn about where you can find course-item descriptions, what information they include, how they work, and details about various components of a course-item description. Course descriptions report information about a university or college's classes. They're published both in course-item catalogs that outline degree requirements and in course-item schedules that contain descriptions for all courses offered during a particular semester.",
    duration: 1000 * 60 * 60 + 30 * 60 * 1000,
    topRated: false
  }
];
