# 🚀 DevStack

DevStack is a responsive React application where users can explore different development technologies and build their own personalized technology stack.

## 🌐 Live Site

Add your live site link here:

https://sanjidaakter1.github.io/devstack

## 📦 GitHub Repository

Add your GitHub repository link here:

https://github.com/sanjidaakter1/devstack

---

## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React Icons
- React Toastify
- JSON
- Vite

---

## ✨ Features

### 1. 🔍 Explore Technologies

Users can explore different technologies from categories such as:

- Frontend
- Backend
- Database
- Programming Language
- Styling
- DevOps

Each technology card shows its name, description, category, difficulty level, rating, and badge.

### 2. 🧰 Build Your Own Stack

Users can add technologies to their personal stack.

The application also prevents duplicate technologies from being added to the stack.

Users can:

- Add a technology
- Remove a technology
- Remove all technologies
- See the number of selected technologies

### 3. 📱 Responsive Design

The application is fully responsive and works across:

- Mobile
- Tablet
- Desktop

The technology cards automatically adjust based on the screen size.

---

## 🔔 Notifications

React Toastify is used to display notifications for user actions.

Notifications are shown when:

- A technology is added
- A duplicate technology is added
- A technology is removed
- All technologies are removed
- Technology data fails to load

---

## ⏳ Loading State

A loading spinner is displayed while the technology data is being loaded from the JSON file.

---

## 🎨 Design

The project uses a shared brand gradient:

**Orange → Pink → Violet**

The same gradient is used for:

- Brand name
- Hero heading highlight
- Primary buttons

The gradient is defined in one place so it can easily be changed throughout the application.

---

# 🧠 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

It makes React UI code easier to read and write.

JSX is converted into JavaScript by the build tools and allows developers to describe the UI structure directly inside React components.

---

## 2. What is the difference between props and state?

Props are data passed from a parent component to a child component.

State is data managed inside a component that can change over time.

Props are read-only from the child component's perspective, while state can be updated using React state functions.

For example, in this project, technology data and callback functions are passed through props, while the selected stack is managed using state.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to store and update data in a component.

I used `useState` in this project to manage:

- Technology data
- Selected technology stack
- Loading state

Example:

```tsx
const [stack, setStack] = useState<Tech[]>([]);
```

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is a React Hook used to perform side effects.

I used `useEffect` to load the technology data from the JSON file when the application starts.

This is needed because fetching data is a side effect.

Example:

```tsx
useEffect(() => {
  const loadTechnologies = async () => {
    const response = await fetch("/technologies.json");

    const data: Tech[] = await response.json();

    setTechnologies(data);
  };

  loadTechnologies();
}, []);
```

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React understand which items have changed, been added, or removed.

In this project, I used the technology `id` as the key.

Example:

```tsx
{
  technologies.map((tech) => <TechCard key={tech.id} tech={tech} />);
}
```

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used conditional rendering in the `StackSidebar` to show an empty message when no technology is selected.

Example:

```tsx
{
  stack.length === 0 ? (
    <p>Your stack is empty.</p>
  ) : (
    <div>
      {stack.map((tech) => (
        <p key={tech.id}>{tech.name}</p>
      ))}
    </div>
  );
}
```

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using props.

In this project, the parent passes the technology data and callback function to `TechCard`.

Example:

```tsx
<TechCard tech={tech} isAdded={isAdded} onAdd={handleAdd} />
```

Here, `tech`, `isAdded`, and `onAdd` are passed from the parent to the child.

The child can send something back to the parent by calling the callback function received through props.

Example:

```tsx
<button onClick={() => onAdd(tech)}>Add to Stack</button>
```
