export const courseModules = [
  {
    id: 1,
    title: "1. What is React?",
    path: "/module/1",
    content: {
      title: "What is React & How It Works",
      sections: [
        {
          heading: "What is React?",
          items: [
            "React is a declarative, efficient, and flexible JavaScript library for building user interfaces.",
            "It allows you to compose complex UIs from small and isolated pieces of code called 'components'.",
            "Created by Meta (originally Facebook) in 2013 and maintained by a massive open-source community.",
            "Ideal for building Single Page Applications (SPAs) where lightning-fast updates are key."
          ]
        },
        {
          heading: "The Virtual DOM",
          items: [
            "React creates an in-memory data-structure cache called the Virtual DOM.",
            "When data changes, React calculates the difference (diffing) between the Virtual DOM and the Real DOM.",
            "Only the changed sub-components are updated in the browser, minimizing expensive DOM operations."
          ],
          image: "/assets/vdom_diagram.png"
        },
        {
          heading: "How React Works Internally",
          subCards: [
            {
              icon: "🎨",
              title: "Declarative UI",
              text: "Tell React what you want (the state), and it handles the DOM updates automatically."
            },
            {
              icon: "🔄",
              title: "Reconciliation",
              text: "React's efficient 'diffing' algorithm that only updates the parts of the UI that changed."
            },
            {
              icon: "⬇️",
              title: "Unidirectional Flow",
              text: "Data flows in one direction: from parent to child. This makes debugging much easier."
            }
          ]
        }
      ],
      goal: "Understand React philosophy and why it changed the web development world.",
      challenge: {
        title: "React Concept Quiz",
        problem: "Which property of React allows it to only update the parts of the DOM that actually changed?",
        type: "quiz",
        options: ["Direct DOM Access", "Virtual DOM & Diffing", "jQuery Integration", "Manual Page Refresh"],
        correct: 1,
        hint: "It starts with 'V' and uses a 'diffing' algorithm."
      }
    }
  },
  {
    id: 2,
    title: "2. JS Prerequisites",
    path: "/module/2",
    content: {
      title: "JavaScript You MUST Know Before React",
      sections: [
        {
          heading: "Modern JavaScript (ES6+)",
          items: [
            "React development is 90% JavaScript. Mastering modern ES6+ syntax is non-negotiable.",
            "Understanding how data is stored and manipulated will prevent 99% of React bugs."
          ],
          subCards: [
            {
              icon: "📦",
              title: "Variables",
              text: "Always use 'const' by default. Use 'let' only if the value actually changes. Never use 'var'."
            },
            {
              icon: "🏹",
              title: "Arrow Functions",
              text: "Succinct syntax for writing functions. Crucial for React components and callbacks."
            },
            {
              icon: "🧩",
              title: "Destructuring",
              text: "Easily extract values from objects and arrays into unique variables."
            }
          ]
        },
        {
          heading: "Essential Syntax & Methods",
          items: [
            "You will use these every single day in React projects:"
          ],
          code: "// Template Literals\nconst msg = `Hello ${name}`;\n\n// Spread Operator\nconst newArr = [...oldArr, 4];\n\n// Array Map (Vital for Lists)\nitems.map(item => item.name);"
        },
        {
          heading: "Async & Modules",
          items: [
            "React apps are almost always 'Async' because they talk to APIs.",
            "We use 'import' and 'export' to organize our components into manageable files."
          ],
          code: "const getData = async () => {\n  const res = await fetch(url);\n  return await res.json();\n};"
        }
      ],
      goal: "Be comfortable reading and writing modern JavaScript before touching a single React hook.",
      challenge: {
        title: "ES6 Destructuring Challenge",
        problem: "Complete the function to extract 'name' and 'city' from the 'user' object using destructuring.",
        initialCode: "function getInfo(user) {\n  // YOUR CODE HERE\n  \n  return `${name} from ${city}`;\n}",
        solution: /const\s*{\s*name\s*,\s*city\s*}\s*=\s*user/i,
        type: "code",
        hint: "Use curly braces {} on the left side of the assignment."
      }
    }
  },
  {
    id: 3,
    title: "3. Environment & Tooling",
    path: "/module/3",
    content: {
      title: "React Environment & Tooling",
      sections: [
        {
          heading: "The Modern Stack",
          items: [
            "To build React apps, we need a developer 'Ecosystem'. Gone are the days of just one HTML file.",
            "Modern tools handle performance, bundling, and local development seamlessly."
          ],
          image: "/assets/tooling_stack.png",
          subCards: [
            {
              icon: "🟢",
              title: "Node.js",
              text: "The engine that runs our development tools. It allows us to use NPM/Yarn."
            },
            {
              icon: "📦",
              title: "NPM / Yarn",
              text: "Package managers that let us install libraries (like React itself) with one command."
            },
            {
              icon: "⚡",
              title: "Vite",
              text: "A blazing fast build tool that provides a near-instant development experience."
            }
          ]
        },
        {
          heading: "Scaffolding with Vite",
          items: [
            "We use Vite because it's significantly faster than the old 'Create React App'."
          ],
          code: "npm create vite@latest my-react-app -- --template react\ncd my-react-app\nnpm install\nnpm run dev"
        },
        {
          heading: "Project Structure 101",
          items: [
            "Once you open your project, these are the files that matter most:"
          ],
          subCards: [
            {
              icon: "📄",
              title: "index.html",
              text: "The entry point. It has a <div id='root'> where React injects your entire app."
            },
            {
              icon: "🏗️",
              title: "main.jsx",
              text: "The bridge between your code and the HTML. It 'renders' the App component."
            },
            {
              icon: "⚛️",
              title: "App.jsx",
              text: "Your first real React component! This is where you'll spend most of your time."
            }
          ]
        }
      ],
      goal: "Successfully setup a professional React development environment on your local machine.",
      challenge: {
        title: "Vite CLI Command",
        problem: "What is the command to start the development server in a Vite project?",
        type: "quiz",
        options: ["npm start", "npm run dev", "npm build", "vite launch"],
        correct: 1,
        hint: "Check the 'Scaffolding with Vite' section above."
      }
    }
  },
  {
    id: 4,
    title: "4. JSX",
    path: "/module/4",
    content: {
      title: "JSX (JavaScript + HTML)",
      sections: [
        {
          heading: "What is JSX?",
          items: [
            "JSX stands for JavaScript XML. It allows us to write HTML-like code inside our JavaScript files.",
            "It makes the code more readable and expressive by combining UI structure with logic."
          ],
          image: "/assets/jsx_transform.png",
          subCards: [
            {
              icon: "🔀",
              title: "Transformation",
              text: "Browsers don't understand JSX. Tools like Babel convert it into standard React.createElement() calls."
            },
            {
              icon: "📏",
              title: "Strict Rules",
              text: "JSX follows XML rules very closely (e.g., all tags must be closed, specific attribute names)."
            }
          ]
        },
        {
          heading: "Core Syntax Rules",
          items: [
            "To write valid JSX, you must follow these four fundamental rules:"
          ],
          subCards: [
            {
              icon: "🌳",
              title: "Single Root",
              text: "A component must return a single 'root' element (or a Fragment <>...</>)."
            },
            {
              icon: "🏷️",
              title: "CamelCase",
              text: "Attributes use camelCase (e.g., 'onClick', 'className') because they are JS objects internally."
            },
            {
              icon: "⚡",
              title: "JS Expressions",
              text: "Use curly braces {} to embed any valid JavaScript variable or logic directly into your UI."
            }
          ]
        }
      ],
      goal: "Master the syntax of JSX and understand how it bridges the gap between design and logic."
    }
  },
  {
    id: 5,
    title: "5. Components",
    path: "/module/5",
    content: {
      title: "Components (Core of React)",
      sections: [
        {
          heading: "What is a Component?",
          items: [
            "Components are the building blocks of every React application.",
            "Instead of one giant file, we break the UI into independent, reusable pieces of code.",
            "Each component is essentially a JavaScript function that returns JSX."
          ],
          image: "/assets/component_lego.png",
          subCards: [
            {
              icon: "🏗️",
              title: "Structure",
              text: "A component encapsulates its own structure (JSX), style, and logic."
            },
            {
              icon: "🔄",
              title: "Reusable",
              text: "Write a button or a navigation bar once, then use it as many times as needed across your app."
            }
          ]
        },
        {
          heading: "Functional vs Class",
          items: [
            "React has evolved. While old projects use 'Class Components', modern React uses 'Functional Components' with Hooks."
          ],
          subCards: [
            {
              icon: "✅",
              title: "Functional",
              text: "Simpler, more readable, and faster. It's the standard for modern React development."
            },
            {
              icon: "📜",
              title: "Class-based",
              text: "Legacy syntax. You might see this in older tutorials, but we'll focus on the modern way."
            }
          ],
          code: "function Welcome() {\n  return <h1>Hello, Developer!</h1>;\n}"
        }
      ],
      goal: "Shift your mindset from building 'pages' to building a 'system of reusable components'."
    }
  },
  {
    id: 6,
    title: "6. Props",
    path: "/module/6",
    content: {
      title: "Props (Component Communication)",
      sections: [
        {
          heading: "What are Props?",
          items: [
            "Props (short for properties) are how we pass data from a parent component to a child component.",
            "They make components dynamic and reusable. Think of props as 'arguments' to a function."
          ],
          image: "/assets/props_flow.png",
          subCards: [
            {
              icon: "🛤️",
              title: "Directional",
              text: "Data flows in one direction: Top to Bottom (Parent to Child)."
            },
            {
              icon: "🔒",
              title: "Read-Only",
              text: "A component must never modify its own props. They are immutable from the child's perspective."
            }
          ]
        },
        {
          heading: "Destructuring Props",
          items: [
            "Modern React projects always destructure props for cleaner, more readable code."
          ],
          code: "function Profile({ name, age }) {\n  return <h1>{name} is {age} years old</h1>;\n}"
        }
      ],
      goal: "Master the art of passing data through the component tree effectively."
    }
  },
  {
    id: 7,
    title: "7. State & useState",
    path: "/module/7",
    content: {
      title: "State & useState Hook",
      sections: [
        {
          heading: "Understanding State",
          items: [
            "While props are passed from outside, 'State' is a component's internal memory.",
            "When state changes, React automatically re-renders that specific component to reflect the new data."
          ],
          subCards: [
            {
              icon: "🧠",
              title: "Internal Memory",
              text: "State holds data that changes over time (like a counter, a form input, or a user setting)."
            },
            {
              icon: "⚡",
              title: "Reactive",
              text: "Updating state triggers the 'Reconciliation' process, making the UI stay in sync with data."
            }
          ]
        },
        {
          heading: "The useState Hook",
          items: [
            "The most fundamental hook in React. It returns an array with the current value and a setter function."
          ],
          code: "const [count, setCount] = useState(0);\n\n// Usage:\nsetCount(count + 1);"
        }
      ],
      goal: "Learn how to make your UI interactive and dynamic using internal component state."
    }
  },
  {
    id: 8,
    title: "8. Handling Events",
    path: "/module/8",
    content: {
      title: "Handling Events",
      sections: [
        {
          heading: "Direct Interaction",
          items: [
            "React events are named using camelCase, rather than lowercase (e.g., onClick instead of onclick).",
            "You pass a function as the event handler rather than a string."
          ],
          image: "/assets/event_lightning.png",
          subCards: [
            {
              icon: "🖱️",
              title: "Mouse Events",
              text: "Examples: onClick, onMouseEnter, onMouseLeave, onDoubleClick."
            },
            {
              icon: "⌨️",
              title: "Keyboard Events",
              text: "Examples: onKeyDown, onKeyUp, onKeyPress."
            }
          ]
        },
        {
          heading: "Event Objects",
          items: [
            "React provides a 'SyntheticEvent' wrapper to ensure cross-browser compatibility."
          ],
          code: "function handleClick(e) {\n  e.preventDefault();\n  console.log('Clicked!');\n}"
        }
      ],
      goal: "Connect user actions (clicks, typing) to your app's logic and state."
    }
  },
  {
    id: 9,
    title: "9. Conditional Rendering",
    path: "/module/9",
    content: {
      title: "Conditional Rendering",
      sections: [
        {
          heading: "Logic in UI",
          items: [
            "In React, you can render different parts of your UI based on specific conditions.",
            "This is how we show 'Loading...' spinners or hide 'Admin' panels from regular users."
          ],
          subCards: [
            {
              icon: "🔀",
              title: "Ternary Operator",
              text: "The most common way: { isLoggedIn ? <User /> : <Guest /> }"
            },
            {
              icon: "🛡️",
              title: "Short Circuit",
              text: "The && operator: { hasError && <ErrorMessage /> }"
            }
          ]
        }
      ],
      goal: "Design adaptive user interfaces that change based on data and logic."
    }
  },
  {
    id: 10,
    title: "10. Lists & Keys",
    path: "/module/10",
    content: {
      title: "Lists & Keys",
      sections: [
        {
          heading: "Looping through Data",
          items: [
            "We use the standard JavaScript .map() method to transform arrays of data into lists of JSX elements.",
            "This is the heart of dynamic data-driven applications."
          ],
          subCards: [
            {
              icon: "🗺️",
              title: "Map Method",
              text: "Transforms each item in an array into a unique component instance."
            },
            {
              icon: "🔑",
              title: "Unique Keys",
              text: "Props called 'key' must be unique IDs. They help React track item changes/moves."
            }
          ]
        },
        {
          heading: "Implementation",
          code: "const listItems = users.map(user => (\n  <li key={user.id}>{user.name}</li>\n));"
        }
      ],
      goal: "Efficiently render large collections of data with proper performance tracking."
    }
  },
  {
    id: 11,
    title: "11. useEffect Hook",
    path: "/module/11",
    content: {
      title: "useEffect (Side Effects)",
      sections: [
        {
          heading: "What are Side Effects?",
          items: [
            "Sometimes components need to step outside of the React world to synchronize with external systems.",
            "Common tasks include: Fetching data, setting up a subscription, or manually changing the DOM."
          ],
          subCards: [
            {
              icon: "🔄",
              title: "Synchronization",
              text: "useEffect lets you run code after the component renders to sync with outside data."
            },
            {
              icon: "🧹",
              title: "Cleanup",
              text: "You can return a function to 'clean up' (e.g., stop a timer or remove an event listener) when the component unmounts."
            }
          ]
        },
        {
          heading: "Dependency Array",
          items: [
            "The second argument to useEffect controls when the effect runs."
          ],
          subCards: [
            {
              icon: "📥",
              title: "Empty []",
              text: "Runs only once (on mount). Great for initial data fetching."
            },
            {
              icon: "🔍",
              title: "With State [data]",
              text: "Runs every time the 'data' state changes. React 'watches' these variables."
            }
          ]
        }
      ],
      goal: "Master the lifecycle of a component and handle external data sources safely."
    }
  },
  {
    id: 12,
    title: "12. Fetching Data",
    path: "/module/12",
    content: {
      title: "Data Fetching & APIs",
      sections: [
        {
          heading: "Getting External Data",
          items: [
            "We usually fetch data from a REST API inside a useEffect hook.",
            "This ensures the data is fetched as soon as the component appears on screen."
          ],
          subCards: [
            {
              icon: "🌐",
              title: "Fetch API",
              text: "The built-in browser method for making HTTP requests."
            },
            {
              icon: "⏳",
              title: "Async/Await",
              text: "Modern JS syntax that makes asynchronous code look like synchronous code."
            }
          ]
        },
        {
          heading: "The 3 States of Fetching",
          items: [
            "A professional UI always handles three distinct phases of data loading:"
          ],
          subCards: [
            {
              icon: "⌛",
              title: "Loading",
              text: "Show a spinner or skeleton to let the user know work is happening."
            },
            {
              icon: "⚠️",
              title: "Error",
              text: "Gracefully handle network failures or 404 responses."
            },
            {
              icon: "✅",
              title: "Success",
              text: "Render the actual data once it arrives."
            }
          ]
        }
      ],
      goal: "Connect your React application to the real world using APIs."
    }
  },
  {
    id: 13,
    title: "13. React Router",
    path: "/module/13",
    content: {
      title: "Multi-Page Navigation",
      sections: [
        {
          heading: "The SPA Philosophy",
          items: [
            "Single Page Applications (SPAs) don't refresh the whole page when you click a link.",
            "React Router swaps out components based on the URL in the browser's address bar."
          ],
          subCards: [
            {
              icon: "🛣️",
              title: "Routes",
              text: "Map paths (like /about) to specific components."
            },
            {
              icon: "🔗",
              title: "Link Component",
              text: "Use <Link> instead of <a> to prevent full page reloads."
            }
          ]
        },
        {
          heading: "Key Concepts",
          items: ["BrowserRouter, Routes, and Route are the main building blocks."],
          code: "<Link to='/profile'>Go to Profile</Link>"
        }
      ],
      goal: "Build complex applications with professional navigation and multiple pages."
    }
  },
  {
    id: 14,
    title: "14. Styling in React",
    path: "/module/14",
    content: {
      title: "Styling Strategies",
      sections: [
        {
          heading: "Making It Beautiful",
          items: [
            "React gives you total freedom in how you style your components.",
            "Each method has its own pros and cons depending on project size."
          ],
          subCards: [
            {
              icon: "🎨",
              title: "CSS Modules",
              text: "Scope styles locally to a component so they don't leak or conflict."
            },
            {
              icon: "🚀",
              title: "Tailwind CSS",
              text: "The modern industry standard. Build UIs rapidly using utility classes."
            },
            {
              icon: "🧩",
              title: "Component Libraries",
              text: "Use pre-made UI kits like Material UI or Shadcn/UI for professional results."
            }
          ]
        }
      ],
      goal: "Choose the right styling strategy for your project's scale and designer requirements."
    }
  },
  {
    id: 15,
    title: "15. Forms & Validation",
    path: "/module/15",
    content: {
      title: "Forms (Collecting User Input)",
      sections: [
        {
          heading: "Controlled Components",
          items: [
            "In React, state is the 'single source of truth' for form inputs.",
            "We call this 'Controlled Components' because React controls what is typed into the field."
          ],
          subCards: [
            {
              icon: "🆔",
              title: "Input Value",
              text: "Mapped directly to a state variable."
            },
            {
              icon: "📢",
              title: "onChange",
              text: "Updates state on every keystroke, keeping the UI in sync."
            }
          ]
        },
        {
          heading: "Submission Logic",
          items: [
            "Always prevent the default browser refresh when a user clicks 'Submit'."
          ],
          code: "const handleSubmit = (e) => {\n  e.preventDefault();\n  // Send data to API\n};"
        }
      ],
      goal: "Master the patterns for building secure and user-friendly web forms."
    }
  },
  {
    id: 16,
    title: "16. Advanced Hooks",
    path: "/module/16",
    content: {
      title: "Advanced Hooks & Context",
      sections: [
        {
          heading: "Beyond useState & useEffect",
          items: [
            "React provides specialized hooks for managing complex state and sharing data globally.",
            "useContext, useRef, and custom hooks are essential for building production-grade apps."
          ],
          subCards: [
            {
              icon: "🌍",
              title: "useContext",
              text: "Provides a way to pass data through the component tree without having to pass props down manually at every level."
            },
            {
              icon: "🎯",
              title: "useRef",
              text: "Allows you to persist values between renders and directly access DOM elements."
            }
          ]
        },
        {
          heading: "The Power of Custom Hooks",
          items: [
            "Developers can build their own hooks to extract component logic into reusable functions."
          ],
          code: "function useWindowSize() {\n  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);\n  // logic here\n  return size;\n}"
        }
      ],
      goal: "Harness the full power of the React engine to build cleaner and more maintainable code."
    }
  },
  {
    id: 17,
    title: "17. State Management",
    path: "/module/17",
    content: {
      title: "Managing Global State",
      sections: [
        {
          heading: "The Scalability Challenge",
          items: [
            "As apps grow, passing props between distant components becomes a nightmare (Prop Drilling).",
            "State management libraries help centralize and organize your application's data."
          ],
          subCards: [
            {
              icon: "🏪",
              title: "Redux Toolkit",
              text: "The industry standard for complex state. Uses a 'Store' for predictable data flow."
            },
            {
              icon: "🐻",
              title: "Zustand",
              text: "A modern, lightweight alternative that is incredibly easy to set up."
            },
            {
              icon: "📡",
              title: "React Query",
              text: "Specifically for managing 'Server State' like API data and caching."
            }
          ]
        }
      ],
      goal: "Architect large-scale applications with a clear and predictable data structure."
    }
  },
  {
    id: 18,
    title: "18. Performance Opt.",
    path: "/module/18",
    content: {
      title: "Performance Optimization",
      sections: [
        {
          heading: "Keeping It Fast",
          items: [
            "React is fast by default, but expensive calculations or huge lists can slow it down.",
            "We use memoization to tell React 'don't recalculate this unless absolutely necessary'."
          ],
          subCards: [
            {
              icon: "🧠",
              title: "useMemo",
              text: "Caches the result of a heavy calculation."
            },
            {
              icon: "📞",
              title: "useCallback",
              text: "Caches a function definition to prevent unnecessary child re-renders."
            }
          ]
        },
        {
          heading: "React.memo",
          items: [
            "Wraps a component to prevent it from re-rendering if its props haven't changed."
          ],
          code: "const MemoComponent = React.memo(MyComponent);"
        }
      ],
      goal: "Deliver a smooth, 60 FPS experience even in complex data-heavy interfaces."
    }
  },
  {
    id: 19,
    title: "19. Testing in React",
    path: "/module/19",
    content: {
      title: "Testing & Quality Assurance",
      sections: [
        {
          heading: "Ship with Confidence",
          items: [
            "Testing ensures that your code works today and doesn't break when you add features tomorrow.",
            "Modern React testing focuses on how the user interacts with the UI."
          ],
          subCards: [
            {
              icon: "🧪",
              title: "Vitest / Jest",
              text: "The engine that runs your test files and checks for errors."
            },
            {
              icon: "🐙",
              title: "React Testing Library",
              text: "Tools to 'click' buttons and 'find' text exactly like a human would."
            }
          ]
        }
      ],
      goal: "Write professional-grade tests that guarantee your app stays bug-free."
    }
  },
  {
    id: 20,
    title: "20. Deployment",
    path: "/module/20",
    content: {
      title: "Going Live",
      sections: [
        {
          heading: "The Deployment Flow",
          items: [
            "Transforming your source code into a light, fast production bundle is the final step.",
            "Cloud platforms have made this process nearly automatic."
          ],
          subCards: [
            {
              icon: "🏗️",
              title: "The Build Step",
              text: "Vite minifies your CSS and JS into tiny files for the fastest load times."
            },
            {
              icon: "🏙️",
              title: "Hosting",
              text: "Services like Vercel and Netlify host your project for free with built-in SSL."
            }
          ]
        }
      ],
      goal: "Take your project from a local folder to a live URL accessible by the whole world."
    }
  },
  {
    id: 21,
    title: "21. Next Steps",
    path: "/module/21",
    content: {
      title: "The Journey Ahead",
      sections: [
        {
          heading: "Congratulations! 🎓",
          items: [
            "You have mastered the core fundamentals of modern React development.",
            "But the ecosystem is vast and always evolving. Here is where to go next:"
          ],
          subCards: [
            {
              icon: "🔼",
              title: "Next.js",
              text: "The most popular React framework for production. Adds SSR and File Routing."
            },
            {
              icon: "📱",
              title: "React Native",
              text: "Take your React skills to mobile and build IOS/Android apps."
            },
            {
              icon: "🛠️",
              title: "Build Projects",
              text: "The best way to learn is to build. Start a dashboard, a store, or a blog today!"
            }
          ]
        }
      ],
      goal: "Continue growing as a developer and build the future of the web."
    }
  }
];
