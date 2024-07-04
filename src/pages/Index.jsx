import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center">
      <section className="hero bg-gray-200 py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to CodeLearn</h1>
        <p className="text-xl mb-8">Learn to code with our interactive courses</p>
        <Button variant="primary" size="lg">Get Started</Button>
      </section>
      <section className="introduction py-10">
        <h2 className="text-3xl font-semibold mb-4">Why CodeLearn?</h2>
        <p className="text-lg mb-4">CodeLearn offers a variety of coding courses designed to help you learn and grow as a developer.</p>
      </section>
      <section className="featured-courses py-10">
        <h2 className="text-3xl font-semibold mb-4">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="course-card p-4 border rounded-lg">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <h3 className="text-xl font-semibold mt-4">Course Title 1</h3>
            <p className="text-md mt-2">Short description of the course.</p>
          </div>
          <div className="course-card p-4 border rounded-lg">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <h3 className="text-xl font-semibold mt-4">Course Title 2</h3>
            <p className="text-md mt-2">Short description of the course.</p>
          </div>
          <div className="course-card p-4 border rounded-lg">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
            <h3 className="text-xl font-semibold mt-4">Course Title 3</h3>
            <p className="text-md mt-2">Short description of the course.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;