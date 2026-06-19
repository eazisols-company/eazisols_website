import Cal from "@calcom/embed-react";
import { useEffect, useState } from "react";

export function DiscoveryCall() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const originalScrollTo = window.scrollTo;
    const originalScrollIntoView = Element.prototype.scrollIntoView;
    window.scrollTo = () => {};
    Element.prototype.scrollIntoView = () => {};
    return () => {
      window.scrollTo = originalScrollTo;
      Element.prototype.scrollIntoView = originalScrollIntoView;
    };
  }, []);

  return (
    <section >
      <div className="container-page" style={{ marginTop: "40px" }}>
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "0.9rem",
              color: "#777",
              paddingTop: "48px",
            }}
          >
            DISCOVERY CALL
          </p>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "16px",
            }}
          >
            Let&apos;s work on your MVP together
          </h2>
          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#555",
              fontSize: "1.1rem",
            }}
          >
            We only take a very limited number of clients at a time. This is because we are a small team
            and we want to give each client the best possible experience and keep the quality of our work
            the best.
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "100%",
              maxWidth: "900px",
              minHeight: "650px",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            {mounted ? (
              <Cal
                calLink="eazisols/30min"
                style={{
                  width: "100%",
                  height: "650px",
                }}
                config={{
                  layout: "month_view",
                  theme: "dark",
                  hideEventTypeDetails: "true",
                  hideBranding: "true",
                }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
