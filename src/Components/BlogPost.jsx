import React from "react";
import { useParams } from "react-router-dom";

// Sample blog data for demonstration
const blogPosts = [
  {
    id: 1,
    title: "Schulte Table Exercise | A Fun Way to Train Your Brain",
    content: `Schulte table brain exercises don't have to feel like a chore. In fact, you can turn them into an exciting game! One way to gamify your exercise is by setting a timer and challenging yourself to beat your previous records. You can also create a reward system where you treat yourself after achieving certain milestones. Maybe you can enjoy a piece of your favorite chocolate or take a relaxing break after completing a particularly tough exercise. The goal is to make the process fun and engaging, so you're motivated to keep going.

Another great tip is to use vibrant colors and playful fonts when creating your Schulte tables. This small tweak can make the exercises visually appealing and more enjoyable to complete. If you’re feeling creative, try making themed Schulte tables based on your favorite movies, books, or hobbies. By incorporating elements you love, the exercise feels less like a task and more like a fun activity you look forward to.

Benefits for Mental Health
Engaging in Schulte table brain exercises can do wonders for your mental health. One of the significant benefits is stress reduction. When you focus on finding the numbers in the grid, your mind shifts away from daily worries and stresses. This mental break allows you to relax and unwind, providing a much-needed escape from the hustle and bustle of everyday life. The sense of achievement you feel after completing an exercise also boosts your mood and can lead to increased happiness.

In addition to stress reduction, Schulte table exercises can enhance your overall mental well-being. By regularly challenging your brain, you're fostering a sense of accomplishment and boosting your self-esteem. This positive reinforcement can lead to a happier, more satisfied outlook on life. Plus, as you see your skills improve over time, you'll gain confidence in your cognitive abilities, which can translate into other areas of your life.

Creative Variations of Schulte Tables
Keeping your Schulte table brain exercises fresh and exciting is key to maintaining your interest and motivation. One way to do this is by customizing the exercises to suit your preferences. For instance, you can alter the size of the grid to increase or decrease the difficulty level. Start with a 5x5 grid and gradually work your way up to larger grids as you become more proficient. This progression keeps the exercises challenging and ensures that you’re constantly pushing your limits.

Adding challenges to your Schulte table exercises can also make them more engaging. You can set specific goals, such as finding all the numbers in a particular order or within a certain time frame. Another fun variation is to create themed tables, where all the numbers are related to a specific topic, like historical dates or mathematical constants. These variations keep the exercises interesting and can even help you learn new information as you train your brain.

Community Challenges
Joining online groups dedicated to Schulte table brain exercises can add a social aspect to your practice, making it even more enjoyable. These communities often share tips, tricks, and new variations of the exercises, providing endless inspiration for your own practice. Plus, being part of a group can offer a sense of camaraderie and motivation, as you share your progress and achievements with others who have similar interests.

Competing with friends can also make Schulte table exercises more fun and exciting. You can set up friendly competitions to see who can complete a table the fastest or who can achieve the highest accuracy. These challenges not only make the exercises more engaging but also encourage you to improve your skills. The thrill of competition adds an extra layer of excitement, making the whole experience more enjoyable.

Conclusion
Incorporating Schulte table brain exercises into your routine can be a delightful way to boost your cognitive skills and improve your mental health. By turning the exercises into a game, enjoying the mental health benefits, exploring creative variations, and participating in community challenges, you can keep the practice fun and engaging. So, why not give it a try and see how much you can improve your brainpower while having a great time?`,
  },
  //   {
  //     id: 2,
  //     title: "Blog Post 2",
  //     content: "This is the content of Blog Post 2.",
  //   },
  // Add more blog posts here...
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {post ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="text-lg text-gray-700 leading-relaxed">
            {post.content.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </>
      ) : (
        <p className="text-lg text-gray-700">Blog post not found.</p>
      )}
    </div>
  );
};

export default BlogPost;
