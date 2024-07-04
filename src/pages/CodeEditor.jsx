import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const CodeEditor = () => {
  const [code, setCode] = useState("// Write your code here");
  const [output, setOutput] = useState("");

  const handleRunCode = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(code);
      setOutput(result);
      toast.success("Code executed successfully!");
    } catch (error) {
      setOutput(error.message);
      toast.error("Error executing code!");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-4">Code Editor</h1>
      <Editor
        height="60vh"
        defaultLanguage="javascript"
        defaultValue="// Write your code here"
        value={code}
        onChange={(value) => setCode(value)}
        theme="vs-dark"
      />
      <Button variant="primary" size="lg" className="mt-4" onClick={handleRunCode}>
        Run
      </Button>
      <div className="output mt-4 p-4 border rounded-lg bg-gray-100">
        <h2 className="text-2xl font-semibold mb-2">Output</h2>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;