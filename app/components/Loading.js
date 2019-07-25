import React from "react";
import PropTypes from "prop-types";

const styles = {
  content: {
    fontSize: "35px",
    position: "absolute",
    left: "0",
    right: "0",
    marginTop: "20px",
    textAlign: "center"
  }
};

export default function Loading({ speed, text }) {
  const interval = React.useRef();
  const [content, setContent] = React.useState(text);

  React.useEffect(
    () => {
      interval.current = window.setInterval(() => {
        setContent(content => content + ".");
      }, speed);

      return () => window.clearInterval(interval.current);
    },
    [content, speed, text]
  );

  React.useEffect(
    () => {
      if (content === text + "....") {
        setContent(text);
      }
    },
    [content, text]
  );

  return <p style={styles.content}>{content}</p>;
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
};

Loading.defaultProps = {
  text: "Loading",
  speed: 300
};
