import course1 from "../../public/course1.webp";
import course2 from "../../public/course2.webp";
import course3 from "../../public/course3.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBook, faComment } from "@fortawesome/free-solid-svg-icons";

const navbarList = [
  {
    id: 0,
    menu: "HOME",
    subMenu: [],
  },
  {
    id: 1,
    menu: "LEARNING",
    subMenu: ["Course", "Game"],
  },
  {
    id: 2,
    menu: "COMMUNITY",
    subMenu: ["Discussions"],
  },
  {
    id: 3,
    menu: "FAQ",
    subMenu: ["FAQ", "Contact Us"],
  },
];

const feature = [
  {
    id: 0,
    // 🟣
    title: "Adaptive Learning",
    content:
      "Experience tailored Korean lessons that adapt to your individual learning pace.",
    icon: (
      <FontAwesomeIcon
        icon={faBook}
        style={{ marginRight: "10px", color: "#FF964f" }}
      />
    ),
  },
  {
    id: 1,
    // 🟠
    title: "Interactive Lessons",
    content:
      "Engage in lessons filled with dynamic quizzes, speaking exercises, and more.",
    icon: (
      <FontAwesomeIcon
        icon={faComment}
        style={{ marginRight: "10px", color: "#8c65d3" }}
      />
    ),
  },
  {
    id: 2,
    // 🟢
    title: "Global Community",
    content:
      "Join a community of Korean language learners and native speakers to practice with.",
    icon: (
      <FontAwesomeIcon
        icon={faUsers}
        style={{ marginRight: "10px", color: "#94fa92" }}
      />
    ),
  },
];

const testimonial = [
  {
    id: 0,
    content:
      '"I\'ve never learned a language so efficiently! The adaptive learning really makes a difference."',
    writer: "- Sarah, New York",
  },
  {
    id: 1,
    content:
      '"The community here is so welcoming. I\'ve made friends and language partners from all over the world. 감사합니다!"',
    writer: "- Jae, Seoul",
  },
];

const course = [
  {
    id: 0,
    img: course1,
    difficulty: "beginner",
    title: "Beginner Korean *",
    subTitle:
      "Master Hangul, essential phrases, and basic grammar with interactivelessons and practical exercises, laying a solid foundation in Korean.",
    content:
      "Start your journey with the basics of Korean grammar and vocabulary.",
    lesson: [
      {
        title: "Lesson 1: Introduction",
        description: "Get started with basic Korean alphabets and sounds.",
      },
      {
        title: "Lesson 2: Basic Phrases",
        description: "Learn common phrases used in daily conversations.",
      },
      {
        title: "Lesson 3: Numbers and Time",
        description:
          "Master counting in Korean, tell the time, and understand the two number systems to shop and schedule confidently.",
      },
      {
        title: "Lesson 4: Everyday Vocabulary",
        description:
          "Build your word bank with common nouns, verbs, and adjectives used in daily life to express yourself effectively.",
      },
      {
        title: "Lesson 5: Forming Simple Sentences",
        description:
          "Learn the structure of Korean sentences and practice forming your own basic statements and questions.",
      },
      {
        title: "Lesson 6: Korean Grammar Essentials",
        description:
          "Dive into the foundational grammar rules, including verb conjugation, particles, and sentence endings for different formality levels.",
      },
      {
        title: "Lesson 7: Listening Skills 101",
        description:
          "Tune your ears to the Korean language with listening exercises to understand spoken phrases and sentences.",
      },
      {
        title: "Lesson 8: Speaking Practice",
        description:
          "Engage in practical speaking exercises to pronounce words clearly and communicate basic ideas in Korean.",
      },
      {
        title: "Lesson 9: Cultural Insights",
        description:
          "Immerse in Korean culture, traditions, and societal norms to communicate respectfully and authentically.",
      },
      {
        title: "Lesson 10: Review and Practice",
        description:
          "Consolidate your learning with a comprehensive review and practice using interactive quizzes and dialogues.Each lesson is designed to be progressive and interactive, ensuring that beginners grasp the basics of the Korean language while engaging in practical exercises to reinforce their learning.",
      },
    ],
  },
  {
    id: 1,
    img: course2,
    difficulty: "intermediate",
    title: "Intermediate Korean Conversations *",
    subTitle:
      "Elevate your Korean fluency with lessons focused on advanced grammar, practical conversation scenarios, and cultural insights.",
    content: "Dive into day-to-day dialogues and polish your speaking skills.",
    lesson: [
      {
        title: "Lesson 1: Expressing Emotions",
        description:
          "Enhance your conversational skills by learning varied expressions to convey emotions and feelings effectively in Korean.",
      },
      {
        title: "Lesson 2: Advanced Grammar Structures",
        description:
          "Delve into complex sentence constructions, enabling more sophisticated and nuanced communications.",
      },
      {
        title: "Lesson 3: Talking About the Future",
        description:
          "Master future tense and explore expressions to discuss plans, aspirations, and predictions.",
      },
      {
        title: "Lesson 4: Narrating Past Events",
        description:
          "Develop your storytelling abilities, narrating past experiences and events with clarity and detail.",
      },
      {
        title: "Lesson 5: Health and Wellness Conversations",
        description:
          "Learn vocabulary and phrases for discussing health, wellness, and medical scenarios with precision.",
      },
      {
        title: "Lesson 6: Workplace Communication",
        description:
          "Equip yourself with business terminology and etiquette to communicate professionally in a Korean workplace.",
      },
      {
        title: "Lesson 7: Navigating Social Situations",
        description:
          "Practice conversations for social events and informal settings, enhancing fluency and cultural understanding.",
      },
      {
        title: "Lesson 8: Korean Idioms and Slange",
        description:
          "Enrich your vocabulary with idiomatic expressions and slang, adding color and authenticity to your conversations.",
      },
      {
        title: "Lesson 9: Discussing News and Media",
        description:
          "Explore language used in media, improving your skills to discuss current events and trending topics.",
      },
      {
        title: "Lesson 10: Conversational Practice Sessions",
        description:
          "Consolidate your learning with a comprehensive review and practice using interactive quizzes and dialogues.Each lesson is designed to be progressive and interactive, ensuring that beginners grasp the basics of the Korean language while engaging in practical exercises to reinforce their learning.",
      },
    ],
  },
  {
    id: 2,
    img: course3,
    difficulty: "advanced",
    title: "Advanced Korean Writing *",
    subTitle:
      "Refine your Korean writing with advanced structures, styles, and cultural insights.",
    content: "Master the art of writing in Korean with comprehensive lessons.",
    lesson: [
      {
        title: "Lesson 1: Mastering Hangul Writing",
        description:
          "Perfect your Hangul script, focusing on advanced writing techniques and calligraphy styles for aesthetic and professional writing.",
      },
      {
        title: "Lesson 2: Complex Sentence Structures",
        description:
          "Dive deep into complex grammatical forms and expressions, enhancing the sophistication of your written Korean.",
      },
      {
        title: "Lesson 3: Formal and Informal Writing Styles",
        description:
          "Navigate the nuances of jondaenmal and banmal, understanding the contexts and etiquettes of formal and informal writings.",
      },
      {
        title: "Lesson 4: Creative Writing Elements",
        description:
          "Explore elements of storytelling, poetry, and essay writing, honing creativity and expression in Korean.",
      },
      {
        title: "Lesson 5: Korean Business Correspondence",
        description:
          "Learn the structure, tone, and style of academic writing, focusing on thesis, essays, and reports in Korean.",
      },
      {
        title: "Lesson 6: Academic Writing Skills",
        description:
          "Dive into the foundational grammar rules, including verb conjugation, particles, and sentence endings for different formality levels.",
      },
      {
        title: "Lesson 7: Editing and Proofreading Techniques",
        description:
          "Enhance your writing precision with skills in editing and proofreading, ensuring clarity and correctness.",
      },
      {
        title: "Lesson 8: Writing for Media",
        description:
          "Develop the aptitude to write articles, blogs, and scripts, adapting to different media and audience.",
      },
      {
        title: "Lesson 9: Cultural Sensitivity in Writing",
        description:
          "Immerse in the cultural aspects influencing written expressions, ensuring respect and appropriateness.",
      },
      {
        title: "Lesson 10: Portfolio Development",
        description:
          "Compile and refine your writings, creating a comprehensive portfolio showcasing your advanced Korean writing skills.",
      },
    ],
  },
];

const pathStep = [
  {
    id: 0,
    number: 1,
    content: "Introduction to Korean Alphabets (Hangul)",
  },
  {
    id: 1,
    number: 2,
    content: "Basic Vocabulary and Grammar",
  },
  {
    id: 2,
    number: 3,
    content: "Intermediate Conversational Practices",
  },
  {
    id: 3,
    number: 4,
    content: "Advanced Composition and Reading",
  },
];

const sortBtn: string[] = ["All", "Beginner", "Intermediate", "Advanced"];

interface Question {
  word: string;
  choices: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    word: "안녕하세요",
    choices: ["Goodbye", "Hello", "Please", "Thank you"],
    correctAnswer: "Hello",
  },
  {
    word: "감사합니다",
    choices: ["Goodbye", "Hello", "Please", "Thank you"],
    correctAnswer: "Thank you",
  },
  {
    word: "제발",
    choices: ["Goodbye", "Hello", "Please", "Thank you"],
    correctAnswer: "Please",
  },
  {
    word: "물",
    choices: ["Water", "Fire", "Earth", "Air"],
    correctAnswer: "Water",
  },
  {
    word: "사랑해",
    choices: ["Goodbye", "I Love You", "Thank You", "Hello"],
    correctAnswer: "I Love You",
  },
  {
    word: "친구",
    choices: ["Mother", "Father", "Friend", "Enemy"],
    correctAnswer: "Friend",
  },
  // Add more questions as needed
];

export {
  navbarList,
  feature,
  testimonial,
  course,
  pathStep,
  sortBtn,
  questions,
};
