import "./globals.css";

export default function Home() {
  return (
    <>
      <head>
        <link rel="icon" href="/images.png" />
      </head>
      <main>
        <section className="frontBackground">
          <h1 className="fontThin ah1">Chase Fatherhood Elite®</h1>
          <span className="sub">A card for the best fathers</span>
        </section>
        <section className="content">
          <section style={{ textAlign: "center", alignItems: "center" }}>
            <h1 className="smallH">MATERIALLY DIFFERENT</h1>
            <img
              src="/Untitled presentation (2).png"
              style={{ borderRadius: 10, marginTop: 30 }}
              width="250em"
            ></img>
            <img
              src="/Untitled presentation (3).png"
              style={{ borderRadius: 10, marginTop: 30, marginLeft: 20 }}
              width="250em"
            ></img>
            <p style={{ color: "grey", fontSize: 11 }}>
              High-grade multi-layered paper flashcard material carefully
              compounded with premium generic glue
            </p>
          </section>
        </section>
        <section className="content2">
          <div
            style={{
              textAlign: "left",
              alignItems: "left",
              paddingBottom: "1%",
            }}
          >
            <h1 className="smallH">
              REMARKABLE CASHBACK FOR AN EQUALLY REMARKABLE FATHER
            </h1>
          </div>
          <section
            style={{ display: "grid", gridTemplateColumns: "33% 33% 33%" }}
          >
            <div style={{ textAlign: "left", marginTop: "10px" }}>
              <h1 className="fontThin ah2">10% cashback</h1>
              <span>on all car and car repair purchases</span>
            </div>
            <div style={{ textAlign: "left", marginTop: "10px" }}>
              <h1 className="fontThin ah2">5% cashback</h1>
              <span>on casino and roulette spending</span>
            </div>
            <div style={{ textAlign: "left", marginTop: "10px" }}>
              <h1 className="fontThin ah2">2.5% cashback</h1>
              <span>on all other purchases</span>
            </div>
          </section>
        </section>
        <section className="content" style={{ textAlign: "left" }}>
          <h1 className="smallH">BENEFITS WORTH HAVING CHILDREN FOR</h1>
          <section style={{ display: "grid", gridTemplateColumns: "60% 40%" }}>
            
            <section
              style={{ display: "grid", gridTemplateColumns: "50% 50%" }}
              className="benefitsParent"
            >
              <div style={{ marginTop: "10px", paddingTop:"50%" }}>
                <h1 className="fontThin ah2">$0 annual fee</h1>
                <span>No annual fee for all cardmembers</span>
                
              </div>
              <div style={{ marginTop: "10px", paddingTop:"50%"  }}>
                <h1 className="fontThin ah2">$500 cardmember bonus</h1>
                <span>New cardmembers receive a $500 bonus</span>
              </div>
              <div style={{ marginTop: "10px" }}>
                <h1 className="fontThin ah2">$100,000 anniversary credit</h1>
                <span>Credit for a $100,000 Ferrari® every year</span>
              </div>
              
            </section>
            <img
              src="file (1).svg"
              width="125%"
              style={{ paddingLeft: "58%" }}
            ></img>
          </section>
        </section>
      </main>
    </>
  );
}
