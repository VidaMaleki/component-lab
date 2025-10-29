import React from "react";

type Props = {
  portfolioUrl?: string;
};


export default function AboutPage({ portfolioUrl = "https://your-portfolio.example" }: Props) {
  return (
    <>
      <h1>About Me</h1>
      <p>Welcome to my portfolio! You can find my work at <a href={portfolioUrl}>{portfolioUrl}</a>.</p>
    </>
  );
}