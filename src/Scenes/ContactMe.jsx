import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { tokens } from "../theme";
import { motion } from "framer-motion";

const ContactMe = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <center>
      <Box
        p="20px"
        maxWidth="600px"
        borderRadius="15px"
        backgroundColor={colors.grey[900]}
        id="contactme"
      >
        <center>
          <h1 color="black">Contact Me</h1>
          <p>
            Thank you for your interest in contacting me. Please fill out the
            form below, and I'll get back to you as soon as possible.
          </p>
        </center>
        <form
          action="https://api.web3forms.com/submit"
          onSubmit="reset()"
          method="POST"
          id="contact-form"
          style={{
            fontFamily: '"DotGothic16", sans-serif',
            fontWeight: 400,
            fontStyle: "normal",
          }}
        >
          <input
            type="hidden"
            name="access_key"
            value="63c5869e-0908-486b-8968-734e0f074598"
          />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required=""
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required=""
          />
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required=""
          ></textarea>
          <button id="submit-button" type="submit">
            Send Message
          </button>
        </form>
      </Box>
    </center>
  );
};

export default ContactMe;
