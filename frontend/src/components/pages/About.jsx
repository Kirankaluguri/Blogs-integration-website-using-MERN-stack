import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
           Welcome to Quest!
          At Quest, we believe in the power of stories and ideas to inspire, inform, and connect people 
          from all walks of life. Our blog is a haven for curious minds, where we explore a diverse range of 
          topics to enrich your knowledge and spark your imagination.
        </p>
        <p>
          <h4>Our Mission</h4>
          Our mission is to provide high-quality, engaging content that resonates with our readers. 
          Whether you're here to learn something new, find inspiration, or simply enjoy a good read, 
          our aim is to make every visit worthwhile. We cover a variety of subjects, including technology, 
          health, lifestyle, travel, and personal development, to ensure there's something for everyone.
        </p>
        <p>
          <h4>Meet the Team</h4>
          We are a passionate team of writers, thinkers, and creatives who love to 
          share our insights and discoveries with the world. Our contributors come from 
          diverse backgrounds, each bringing their unique perspective and expertise to the blog.
        </p>
        <p>
          <h4>Why Quest?</h4>
          <h5>Quality Content:</h5> We prioritize well-researched and thoughtfully written articles 
          that provide value to our readers.<br></br>
          <h5>Diverse Topics:</h5> From in-depth guides to personal stories, we cover a broad spectrum of 
          subjects to cater to various interests.<br></br>
          <h5>Community Engagement:</h5> We cherish our readers and encourage you to join the conversation 
          through comments and social media.<br></br>
        </p>
        <p>
          <h4>Join Our Community</h4>
          Stay connected with us by subscribing to our newsletter and following us on social media platforms. 
          Your feedback and engagement help us grow and improve, so feel free to reach out with your thoughts 
          and suggestions.

          Thank you for being part of the Quest community. Happy reading!

          Feel free to further personalize this content with specific details about your blog, its focus, 
          and your team members
        </p>
      </div>
    </article>
  );
};

export default About;
