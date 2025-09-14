# 👩‍🏫 Person Class Hierarchy with Student and Teacher Subclasses

## 📌 Title
Person Class Hierarchy with Student and Teacher Subclasses

## 🎯 Objective
Understand and apply the concept of **inheritance in JavaScript (ES6 classes)** by creating a base class and extending it into specialized subclasses.  
This builds strong foundational skills in **object-oriented programming** within a modern JavaScript context.

---

## 📖 Task Description
- Create a **base class** `Person` with properties like **name** and **age**, and a method to display basic information.  
- Create two subclasses:
  - `Student` → includes an additional property like `course` or `grade`.
  - `Teacher` → includes an additional property like `subject` or `department`.  
- Each subclass should **override or extend methods** to display complete details.  
- Finally, create **instances of both subclasses** and demonstrate calling their methods to show how **inheritance and method overriding** work.

---

## 🏗️ Example Code

### `App.jsx`
```jsx
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
    super(name, age);
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
    <div style={styles.container}>
      <h1>👩‍🎓 Person Class Hierarchy</h1>
      <p>{student.displayInfo()}</p>
      <p>{teacher.displayInfo()}</p>
    </div>
  );
}

const styles = {
  container: { padding: "20px", fontFamily: "Arial, sans-serif" },
};

