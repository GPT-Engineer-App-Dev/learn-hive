import { Button } from "@/components/ui/button";

const CourseDetail = () => {
  return (
    <div className="p-4">
      <div className="course-header mb-6">
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
        <h1 className="text-4xl font-bold mt-4">Course Title</h1>
      </div>
      <div className="course-description mb-6">
        <p className="text-lg">Detailed description of the course.</p>
      </div>
      <div className="course-lessons mb-6">
        <h2 className="text-2xl font-semibold mb-4">Lessons</h2>
        <ul className="list-disc list-inside">
          <li>Lesson 1</li>
          <li>Lesson 2</li>
          <li>Lesson 3</li>
        </ul>
      </div>
      <Button variant="primary" size="lg">Enroll Now</Button>
    </div>
  );
};

export default CourseDetail;