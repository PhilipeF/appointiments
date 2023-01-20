import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

 :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #fff
 }

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 body {
    background: var(--background);
    --webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
 }

 h1, h2, h3, h4, h5, strong {
    font-weight: 600;
 }

 html {
    @media (max-width: 1080px) {
        font-size: 93,75%;
    }

    @media (max-width: 720px) {
        font-size: 87,5%;
    }
 }

 button {
    cursor: pointer;
 }

 [disable] {
    opacity: 0.6;
    cursor: not-allowed;
 }

 .react-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: 'rgba(255, 255, 255, 0.75)';

      display: flex; 
      align-items: center;
      justify-content: center;

 }

 .react-modal-content {
   width: 100%;
   max-width: 576px;
   position: relative;
   padding: 3rem;
   background-color: var(--background);
   border-radius: 0.25rem;

 }

`