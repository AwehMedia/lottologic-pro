export default function HomePage() {
  const lotteryResults = [
    {
      id: 1,
      date: "2025-01-18",
      numbers: [7, 14, 21, 28, 35, 42],
      bonus: 49,
      jackpot: "R85.5M",
    },
    {
      id: 2,
      date: "2025-01-15",
      numbers: [3, 12, 19, 26, 33, 47],
      bonus: 8,
      jackpot: "R72.3M",
    },
    {
      id: 3,
      date: "2025-01-11",
      numbers: [5, 16, 23, 31, 38, 44],
      bonus: 15,
      jackpot: "R68.1M",
    },
  ]

  const ballStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#2563eb",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "18px",
    margin: "0 5px",
  }

  const bonusBallStyle = {
    ...ballStyle,
    backgroundColor: "#dc2626",
  }

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
    margin: "16px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e5e7eb",
  }

  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)",
    padding: "0",
  }

  const headerStyle = {
    backgroundColor: "white",
    padding: "20px 0",
    borderBottom: "1px solid #e5e7eb",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  }

  const buttonStyle = {
    backgroundColor: "#2563eb",
    color: "white",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
  }

  return (
    <div style={containerStyle}>
      {/* Header */}
      <header style={headerStyle}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#2563eb",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "12px",
              }}
            >
              <span style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}>LL</span>
            </div>
            <h1 style={{ margin: 0, fontSize: "28px", fontWeight: "bold", color: "#111827" }}>LottoLogic Pro</h1>
          </div>
          <a href="#" style={buttonStyle}>
            Get Pro Access
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        {/* Hero Section */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "#111827",
              marginBottom: "16px",
              margin: "0 0 16px 0",
            }}
          >
            South African Lottery Results
          </h2>
          <p style={{ fontSize: "20px", color: "#6b7280", maxWidth: "600px", margin: "0 auto 32px auto" }}>
            Get the latest lottery results and professional analysis to improve your winning chances.
          </p>
        </div>

        {/* Latest Results */}
        <div style={{ marginBottom: "48px" }}>
          <h3
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#111827",
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            Latest Results
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px" }}>
            {lotteryResults.map((result) => (
              <div key={result.id} style={cardStyle}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <h4 style={{ margin: 0, fontSize: "20px", fontWeight: "600", color: "#111827" }}>
                    Draw #{result.id}
                  </h4>
                  <span style={{ color: "#6b7280", fontSize: "14px" }}>
                    {new Date(result.date).toLocaleDateString("en-ZA", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <p style={{ margin: "0 0 12px 0", fontSize: "14px", fontWeight: "600", color: "#374151" }}>
                    Winning Numbers
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
                    {result.numbers.map((number, idx) => (
                      <div key={idx} style={ballStyle}>
                        {number}
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <p style={{ margin: "0 0 12px 0", fontSize: "14px", fontWeight: "600", color: "#374151" }}>
                    Bonus Ball
                  </p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={bonusBallStyle}>{result.bonus}</div>
                  </div>
                </div>

                <div style={{ textAlign: "center", paddingTop: "16px", borderTop: "1px solid #e5e7eb" }}>
                  <p style={{ margin: "0 0 8px 0", fontSize: "14px", color: "#6b7280" }}>Jackpot</p>
                  <p style={{ margin: 0, fontSize: "24px", fontWeight: "bold", color: "#059669" }}>{result.jackpot}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            marginBottom: "48px",
          }}
        >
          <div style={cardStyle}>
            <h4 style={{ margin: "0 0 16px 0", fontSize: "20px", fontWeight: "600", color: "#111827" }}>
              📊 Advanced Analysis
            </h4>
            <p style={{ margin: 0, color: "#6b7280", lineHeight: "1.6" }}>
              Statistical analysis, frequency charts, and pattern recognition to improve your odds.
            </p>
          </div>

          <div style={cardStyle}>
            <h4 style={{ margin: "0 0 16px 0", fontSize: "20px", fontWeight: "600", color: "#111827" }}>
              ⚡ Real-Time Updates
            </h4>
            <p style={{ margin: 0, color: "#6b7280", lineHeight: "1.6" }}>
              Automatic updates every draw night. Never miss the latest results and jackpot amounts.
            </p>
          </div>

          <div style={cardStyle}>
            <h4 style={{ margin: "0 0 16px 0", fontSize: "20px", fontWeight: "600", color: "#111827" }}>
              👥 Pro Community
            </h4>
            <p style={{ margin: 0, color: "#6b7280", lineHeight: "1.6" }}>
              Join thousands of players using data-driven strategies to increase their winning chances.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ ...cardStyle, textAlign: "center" }}>
          <h3 style={{ margin: "0 0 16px 0", fontSize: "28px", fontWeight: "bold", color: "#111827" }}>
            Ready to Improve Your Strategy?
          </h3>
          <p style={{ margin: "0 0 24px 0", color: "#6b7280", fontSize: "18px" }}>
            Join thousands of players using LottoLogic Pro to make smarter lottery decisions.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#" style={buttonStyle}>
              Start Free Analysis
            </a>
            <a
              href="#"
              style={{ ...buttonStyle, backgroundColor: "transparent", color: "#2563eb", border: "2px solid #2563eb" }}
            >
              View All Results
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#111827", color: "white", padding: "32px 0", marginTop: "48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
          <p style={{ margin: 0, color: "#9ca3af" }}>
            © 2025 LottoLogic Pro. All rights reserved. | Responsible gambling. Play within your means.
          </p>
        </div>
      </footer>
    </div>
  )
}
