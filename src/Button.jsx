

function Button() {

    const styles = {
        // JSX code (below) requires camel case naming conventions for CSS
        // All values should strings with commas to separate (just like an object's syntax)
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
    }

    return (
        <button style={styles}>Click me</button>
    );

};

export default Button;