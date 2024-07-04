import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Courses = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="p-4">
      <div className="search-bar mb-6">
        <Input
          type="text"
          placeholder="Search for courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="course-card p-4 border rounded-lg">
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
          <h3 className="text-xl font-semibold mt-4">Course Title 1</h3>
          <p className="text-md mt-2">Short description of the course.</p>
          <Button variant="secondary" className="mt-4">View Details</Button>
        </div>
        <div className="course-card p-4 border rounded-lg">
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
          <h3 className="text-xl font-semibold mt-4">Course Title 2</h3>
          <p className="text-md mt-2">Short description of the course.</p>
          <Button variant="secondary" className="mt-4">View Details</Button>
        </div>
        <div className="course-card p-4 border rounded-lg">
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
          <h3 className="text-xl font-semibold mt-4">Course Title 3</h3>
          <p className="text-md mt-2">Short description of the course.</p>
          <Button variant="secondary" className="mt-4">View Details</Button>
        </div>
      </div>
    </div>
  );
};

export default Courses;