import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
import React from "react";

// Base Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Student Subclass
class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // calls Person constructor
    this.course = course;
  }

  displayInfo() {
    return `${super.displayInfo()}, Course: ${this.course}`;
  }
}

// Teacher Subclass
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  displayInfo() {
    return `${super.displayInfo()}, Subject: ${this.subject}`;
  }
}

// React Component
export default function App() {
  const student = new Student("Alice", 20, "Computer Science");
  const teacher = new Teacher("Mr. Smith", 40, "Mathematics");

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">👩‍🎓 Person Class Hierarchy</h1>
      <div className="space-y-2">
        <p>{student.displayInfo()}</p>
        <p>{teacher.displayInfo()}</p>
      </div>
    </div>
  );
}
