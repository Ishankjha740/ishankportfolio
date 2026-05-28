import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Page Not Found — Ishank Jha";

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      const created = !el;
      if (!el) {
        el = document.createElement("meta");
        const [key, val] = attr.split("=");
        el.setAttribute(key, val.replace(/"/g, ""));
        document.head.appendChild(el);
      }
      const prev = el.getAttribute("content");
      el.setAttribute("content", value);
      return () => {
        if (created) el?.remove();
        else if (prev !== null) el!.setAttribute("content", prev);
      };
    };

    const desc = "The page you're looking for doesn't exist. Return to Ishank Jha's portfolio home.";
    const ogTitle = "Page Not Found — Ishank Jha";

    const restorers = [
      setMeta('meta[name="description"]', 'name="description"', desc),
      setMeta('meta[property="og:title"]', 'property="og:title"', ogTitle),
      setMeta('meta[property="og:description"]', 'property="og:description"', desc),
      setMeta('meta[name="twitter:title"]', 'name="twitter:title"', ogTitle),
      setMeta('meta[name="twitter:description"]', 'name="twitter:description"', desc),
    ];

    return () => {
      document.title = prevTitle;
      restorers.forEach((r) => r());
    };
  }, []);

  return (
    <main className="flex min-h-dvh items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
