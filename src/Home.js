
export default function Home() {
    return (
        <div
            id="home"
            style={{
                textAlign: "center",
                padding: "20px",
                backgroundImage: "url('https://example.com/your-image.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "black",
                minHeight: "100vh",
            }}
        >
            <h1>
                Welcome to <span id="span-1" style={{ color: "blue" }}>MCA</span>-
                <span id="span-2" style={{ color: "blue" }}>BANK</span>
            </h1>
            <h2 style={{ fontStyle: "italic", marginTop: "10px" }}>
                "Your Trusted Partner in Online Banking"
            </h2>
            <p style={{ marginTop: "20px", fontSize: "16px", lineHeight: "1.6" }}>
                Experience seamless online banking services available 24/7 from any
                internet-connected device.
            </p>
            <p style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px" }}>
                With MCA-BANK, you can:
            </p>
            <ul style={{ listStyleType: "circle", textAlign: "left", display: "inline-block" }}>
                <li>Open a new account effortlessly.</li>
                <li>Check your account balance.</li>
                <li>Securely deposit and manage your money with ease.</li>
            </ul>
            <p style={{ marginTop: "20px", fontSize: "16px", fontWeight: "bold" }}>
                Bank smarter, anytime, anywhere!
            </p>
        </div>
    );
}
