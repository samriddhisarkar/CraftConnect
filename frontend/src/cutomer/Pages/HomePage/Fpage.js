import React from "react";
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};

function Fpage() {
    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);
    const [feedback, setFeedback] = React.useState("");
    const [isButtonHovered, setIsButtonHovered] = React.useState(false);

    const handleClick = value => {
        setCurrentValue(value);
    };

    const handleMouseOver = value => {
        setHoverValue(value);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };

    const handleButtonMouseOver = () => {
        setIsButtonHovered(true);
    };

    const handleButtonMouseLeave = () => {
        setIsButtonHovered(false);
    };

    return (
        <div style={styles.background}>
            <div style={styles.container}>
                <h2 style={styles.heading}>Rate Your Experience</h2>
                <p style={styles.text}>We highly value your feedback! Kindly take a moment to rate your experience and provide us with your valuable feedback.</p>
                <div style={styles.stars}>
                    {stars.map((_, index) => {
                        return (
                            <FaStar
                                key={index}
                                size={24}
                                style={{
                                    // marginTop:10,
                                    // marginRight: 10,
                                    cursor: "pointer",
                                    height1: "100px"
                                }}
                                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                onClick={() => handleClick(index + 1)}
                                onMouseOver={() => handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}
                            />
                        )
                    })}
                </div>
                <textarea
                    placeholder="Tell us About your Experience!"
                    style={styles.textarea}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                />
                <button
                    style={{
                        ...styles.button,
                        ...(isButtonHovered ? styles.buttonHover : {})
                    }}
                    onMouseOver={handleButtonMouseOver}
                    onMouseLeave={handleButtonMouseLeave}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

const styles = {
    background: {
        backgroundImage: 'url("https://media.istockphoto.com/id/1309646840/photo/handicraft-packaging-from-natural-product.jpg?s=612x612&w=0&k=20&c=lXVQU2xpmr-FrJCM93wQpeGgb-gDFCwSCFiVrOcP6L8=")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Georgia, serif'
    },
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.558)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '350px',
        textAlign: 'center',
        fontFamily: 'Georgia, serif',
        height:'500px'
    },
    heading: {
        fontFamily: 'Georgia, serif'
    },
    text: {
        fontFamily: 'Georgia, serif'
    },
    stars: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        // marginBottom: "20px"
    },
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: '100%',
        // margin: "20px 0",
        minHeight: 100,
        padding: 10,
        fontFamily: 'Georgia, serif'
    },
    button: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: '100px',
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: '#FFBA5A',
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        fontFamily: 'Georgia, serif',
        transition: 'background-color 0.3s ease'
    },
    buttonHover: {
        backgroundColor: '#ffa500'
    }
};

export default Fpage;