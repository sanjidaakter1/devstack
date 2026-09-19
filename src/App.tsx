import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

type Tech = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

const App = () => {
  const [technologies, setTechnologies] = useState<Tech[]>([]);
  const [stack, setStack] = useState<Tech[]>([]);
  const [loading, setLoading] = useState(true);

  // Load technologies from JSON
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/technologies.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load technologies");
        }

        return res.json();
      })
      .then((data: Tech[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to load technologies");
        setLoading(false);
      });
  }, []);

  // Add technology to stack
  const handleAdd = (tech: Tech) => {
    const alreadyAdded = stack.some(
      (item) => item.id === tech.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${tech.name} is already in your stack!`
      );
      return;
    }

    setStack((prev) => [...prev, tech]);
    toast.success(
      `${tech.name} added to your stack!`
    );
  };

  // Remove technology
  const handleRemove = (tech: Tech) => {
    setStack((prev) =>
      prev.filter((item) => item.id !== tech.id)
    );

    toast.info(
      `${tech.name} removed from your stack.`
    );
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies removed.");
  };

  return (
    <>
      <Nav />

      <main>
        <Hero />

        {loading ? (
          <section className="section-container py-20 text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500"></div>

            <p className="mt-4 text-sm font-medium text-slate-500">
              Loading technologies...
            </p>
          </section>
        ) : (
          <Technologies
            technologies={technologies}
            stack={stack}
            onAdd={handleAdd}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        )}
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </>
  );
};

export default App;